const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const path = require('path');
//const logger = require('morgan');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');
require('dotenv').config();
const app = express();

const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

app.listen(process.env.PORT);

//Mongo DB connect and import user models
require('./models');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Lines = mongoose.model('Lines');
var Reels = mongoose.model('Reels');
var Rods = mongoose.model('Rods');

//mongoose.connect('mongodb+srv://nhaniph2:nhaniph2@jwt-test-a4ed1.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const mongoURI = 'mongodb://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@localhost:27017/product-info-db';
//const mongoURI = 'mongodb://localhost:27017/product-info-db';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let gfs;
conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  });
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 10000 * 1000
  }
});


// View Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev')); //Search what the package Morgan does
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser()); // Look up what cookie parser does

app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
  secret: process.env.EXPRESS_SECRET,
  saveUninitialized: false,
  resave: false
}));



// Passport Setup
app.use(passport.initialize());
app.use(passport.session());

// ===============================
passport.use(new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
  },
  function(username, password, next) {
    User.findOne({
      username: username
    }, function(err, user) {
      if (err) return next(err);
      if (!user || !bcrypt.compareSync(password, user.passwordHash)) {

        return next({
          message: 'Username or Password is incorrect'
        });


      }
      next(null, user);
    })
  }));

passport.use('signup', new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
  },
  function(username, password, next) {

    User.findOne({
      username: username
    }, async function(err, user) {
      if (err) return next(err);
      if (user) return next({
        message: 'User already exists'
      });

      let hashedPass = await bcrypt.hash(password, 10);

      let newUser = new User({
        username: username,
        passwordHash: hashedPass
      });
      newUser.save(function(err) {
        next(err, newUser);
      });
    });
  }));
  // =========================== //

passport.serializeUser(function(user, next) {
  next(null, user._id);
});

passport.deserializeUser(function(id, next) {
  User.findById(id, function(err, user) {
    next(err, user);
  });
});

// Routes
app.get('/', function(req, res, next) {
  if (!req.session.build) {
    req.session.build = {
      rod: {},
      reel: {},
      line: {}
    }
  }
  res.render('index', {
    data: req.session
  });
  //console.log(req.session);
});

app.get('/signup', function(req, res, next) {
  res.render('signup', {
    data: req.session
  });
});

app.get('/login', function(req, res, next) {
  res.render('login', {
    data: req.session,
    err: {}
  });
});
// Logout Route (NOT USED YET)

app.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

app.get('/success', function(req, res, next) {
  res.render('success');
});

app.get('/builder', function(req, res, next) {
  if (!req.session.build) {
    req.session.build = {
      rod: {},
      reel: {},
      line: {}
    }
  }
  //res.render('builder', req.session.build);
  res.render('builder', {
    data: req.session
  })
  //console.log(req.session.build);
});

app.get('/profile', async function(req, res, next) {
  if (!req.session.passport || !req.session.passport.user) {
    res.render('login', {
      data: req.session,
      err: {
        msg: "You must be signed in to view your profile"
      }
    });
  } else if (req.session.passport.user) {
    let currentUser = req.session.passport.user;
    let results;
    try {
      results = await Post.find({
        user: currentUser
      }).exec();

      res.render('profile', {
        data: req.session,
        results: results
      });
      //next();
    } catch (e) {
      res.status(500).json({
        message: e.message
      });
    }
  }
});

app.get('/feed', paginatePosts(Post), async function(req, res, next) {

  res.render('feed', {
    data: req.session,
    results: res.paginatePosts
  });

});

app.get('/rods', function(req, res, next) {
  res.render('rods', {
    data: req.session
  });
  //res.json(res.paginatedResults);
});

app.get('/reels', function(req, res, next) {
  res.render('reels', {
    data: req.session
  });
  //res.json(res.paginatedResults);
});

app.get('/lines', function(req, res, next) {
  res.render('lines', {
    data: req.session
  });
  //res.json(res.paginatedResults);
});

// =============== OLD ROUTES THAT I DONT NEED =====================
/*
app.get('/rods2', paginatedResults(Rods), function(req, res, next) {
  var brandArr = ["Tsunami","ODM Rods","TackleDirect","Star Rods","St. Croix","Black Hole","Daiwa","Shimano","Temple Fork Outfitters","G Loomis","Ande","Okuma","Ocean Tackle International","Ahi USA","Ugly Stik","Tica","Penn","Jigging World","Lamiglas","Tony Maja","Falcon Rods","Van Staal","13 Fishing","Accurate","Phenix","Lew's","Wright & McGill","Sea Striker","Century Rods","Shakespeare","Seeker","Rogue Rods","Major Craft","RH Composites","Quantum","Maxel","Crowder Rods","Fin-Nor","Fitzgerald Rods","Blackfin","Black Bart","Favorite","Duckett Fishing","Dobyns Rods","Megabass","Fenwick","Abu Garcia","Douglas Outdoors","Doomsday Tackle","Beulah Fly Rods","Sage","Redington","Thomas & Thomas","Mystic Outdoors","Waterworks Lamson","R.L. Winston"];
  res.paginatedResults.brands = brandArr;
  res.render('rods2', res.paginatedResults);
  //res.json(res.paginatedResults);
});


app.get('/rods', function(req, res, next) {
  res.render('rods');
  //console.log(req.session);
});

app.get('/reels', function(req, res, next) {
  res.render('reels');
  //console.log(req.session);
});

app.get('/lines', function(req, res, next) {
  res.render('lines');
  //console.log(req.session);
});

*/
// =============== API for Rod, Reel, and Line Data ================

app.get('/data/line', paginatedResults(Lines), function(req, res, next) {
  res.json(res.paginatedResults);
});


app.get('/data/reel', paginatedResults(Reels), function(req, res, next) {
  res.json(res.paginatedResults);
});

app.get('/data/rod', paginatedResults(Rods), function(req, res, next) {
  res.json(res.paginatedResults);
});



function paginatedResults(model) {
  return async (req, res, next) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const categorySearch = req.query.category;
    const brand = req.query.brand;
    const searchQuery = req.query.search;

    var categArr = [];
    var brandArr = [];
    var searchArr = [];


    if (categorySearch.indexOf('$') > -1) {
      categArr = categorySearch.split('$');
    } else {
      categArr.push(categorySearch);
    }

    if (brand.indexOf('$') > -1) {
      brandArr = brand.split('$');
    } else {
      brandArr.push(brand);
    }

    if (searchQuery.indexOf('$') > -1) {
      searchArr = searchQuery.split('$');
    } else if (searchQuery.indexOf('$') < 0) {
      searchArr.push(searchQuery);
    }


    for (let i = 0; i < categArr.length; i++) {
      categArr[i] = new RegExp(categArr[i], 'i');
    }

    for (let i = 0; i < brandArr.length; i++) {
      brandArr[i] = new RegExp(brandArr[i], 'i');
    }

    for (let i = 0; i < searchArr.length; i++) {
      searchArr[i] = new RegExp(searchArr[i], 'i');
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    results.params = {
      category: categorySearch,
      brand: brand,
      search: searchQuery
    }

    results.current = {
      page: page,
      limit: limit,
      firstPage: page == 1 ? true : false,
      lessThanFive: page < 5 ? true : false
    }


    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }


    // ==========================================================

    try {
      var allData = await model.find({
        category: {
          $in: categArr
        },
        brand: {
          $in: brandArr
        },
        name: {
          $in: searchArr
        }
      }).exec();

      if (endIndex < allData.length) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }

      results.total = {
        items: allData.length,
        pages: Math.ceil(allData.length / limit),
        notZero: (Math.ceil(allData.length / limit)) > 0 ? true : false
      }

      results.current.lastPage = (page == results.total.pages) ? true : false;

      if (results.current.lessThanFive) {
        var rangeArr = [];
        for (let i = 1; i <= Math.min(results.current.page + 4, results.total.pages); i++) {
          var isCurrent = (i == page) ? true : false
          rangeArr.push({
            page: i,
            isCurrent: isCurrent
          });
        }
        results.current.range = rangeArr;
      } else if (!results.current.lessThanFive) {
        var rangeArr = [];
        for (let i = results.current.page - 4; i <= Math.min(results.current.page + 4, results.total.pages); i++) {
          var isCurrent = (i == page) ? true : false
          rangeArr.push({
            page: i,
            isCurrent: isCurrent
          });
        }
        results.current.range = rangeArr;
      }

      results.results = await model.find({
        category: {
          $in: categArr
        },
        brand: {
          $in: brandArr
        },
        name: {
          $in: searchArr
        }
      }).limit(limit).skip(startIndex).exec();

      res.paginatedResults = results;
      next();

    } catch (e) {
      res.status(500).json({
        message: e.message
      });
    }

  } //Returned Function
} //Paginated Results Function


function paginatePosts(model) {
  return async (req, res, next) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    //const user = req.query.user;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    results.current = {
      page: page,
      limit: limit
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }


    try {

      var allData = await model.find().exec();

      if (endIndex < allData.length) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }

      results.total = {
        items: allData.length,
        pages: Math.ceil(allData.length / limit),
      }


      results.results = await model.find().limit(limit).skip(startIndex).lean().exec();

      for (let i = 0; i < results.results.length; i++) {
        let id = results.results[i].user;
        var account = await User.findById({
          _id: id
        }).limit(limit).skip(startIndex).exec();
        results.results[i].username = account.username;

      }


      res.paginatePosts = results;
      next();

    } catch (e) {
      res.status(500).json({
        message: e.message
      });
    }

  } //Returned Function
}

app.get('/posts', paginatePosts(Post), function(req, res, next) {
  res.json(res.paginatePosts);
});


app.post('/signup', passport.authenticate('signup', {
    failureRedirect: '/'
  }),
  function(req, res, next) {
    res.redirect('/profile');
  });

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/'
  }),
  function(req, res, next) {
    //res.redirect('/success');
    res.redirect('/profile');
  });

app.post('/add', function(req, res, next) {
  //console.log("Request is received");

  if (!req.session.build) {
    req.session.build = {
      rod: {},
      reel: {},
      line: {}
    }
  }

  let data = req.body;
  //let referer = (req.headers.referer).replace(process.env.HOST, '');
  let referer = (req.headers.referer).replace('http://' + process.env.HOST, '');
  //console.log(req.headers.referer);

  if (referer == 'rods') {
    req.session.build.rod = data;
  } else if (referer == 'lines') {
    req.session.build.line = data;
  } else if (referer == 'reels') {
    req.session.build.reel = data;
  }

  res.end();
});

app.post('/remove', function(req, res, next) {
  //console.log("Remove request received");
  let type = req.body.type;
  //console.log(req.session.build[type] !== {});

  if (req.session.build[type] !== {}) {
    req.session.build[type] = {};
  }

  res.end();
});


app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    file: req.file
  });
  //res.redirect('/');
});

app.get('/files', (req, res) => {
  gfs.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }

    // Files exist
    return res.json(files);
  });
});

app.get("/image/:filename", (req, res) => {
  // console.log('id', req.params.id)
  const file = gfs
    .find({
      filename: req.params.filename
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist"
        });
      }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

app.get("/combo/:uid", async (req, res, next) => {

  var data = await Post.find({
    uid: req.params.uid
  }).exec();

  var username = await User.findById({
    _id: data[0].user
  }).exec();
  data[0].username = username.username;

  res.render('post_page', { data: req.session, results: data })

});


function checkIfUser() {
  return async (req, res, next) => {
    //console.log(req.body.name);
    if (req.session.passport == null) {
      console.log('User must be signed in to upload a build');
      res.redirect('/builder');
      res.end();
    } else if (req.session.passport.user) {
      next();
    }
  }
}

function checkBuild() {
  return async (req, res, next) => {
    // CHeck if build has an object in rods, reels, and lines property
    let rod = req.session.build.rod;
    let reel = req.session.build.reel;
    let line = req.session.build.line;
    if (rod.hasOwnProperty('name') && reel.hasOwnProperty('name') && line.hasOwnProperty('name')) {
      console.log('The build is complete and filled in');
      next();
    } else {
      res.redirect('/builder');
      res.end();
    }
  }
}

app.post('/post', checkIfUser(), checkBuild(), upload.single('file'), async function(req, res, next) {
  //console.log('Post request received');

  let newPost = new Post({
    uid: crypto.randomBytes(16).toString('hex'),
    user: req.session.passport.user,
    build_name: req.body.name, //req.body.type
    build_img: req.file.filename,
    max_price: (req.session.build.rod.maxPrice + req.session.build.reel.maxPrice + req.session.build.line.maxPrice).toFixed(2),
    min_price: (req.session.build.rod.minPrice + req.session.build.reel.minPrice + req.session.build.line.minPrice).toFixed(2),
    build: {
      rod: {
        _id: req.session.build.rod._id,
        name: req.session.build.rod.name,
        href: req.session.build.rod.href,
        brand: req.session.build.rod.brand,
        price: req.session.build.rod.price,
        img_src: req.session.build.rod.img_src,
        category: req.session.build.rod.category,
        minPrice: req.session.build.rod.minPrice,
        maxPrice: req.session.build.rod.maxPrice
      },
      reel: {
        _id: req.session.build.reel._id,
        name: req.session.build.reel.name,
        href: req.session.build.reel.href,
        brand: req.session.build.reel.brand,
        price: req.session.build.reel.price,
        img_src: req.session.build.reel.img_src,
        category: req.session.build.reel.category,
        minPrice: req.session.build.reel.minPrice,
        maxPrice: req.session.build.reel.maxPrice
      },
      line: {
        _id: req.session.build.line._id,
        name: req.session.build.line.name,
        href: req.session.build.line.href,
        brand: req.session.build.line.brand,
        price: req.session.build.line.price,
        img_src: req.session.build.line.img_src,
        category: req.session.build.line.category,
        minPrice: req.session.build.line.minPrice,
        maxPrice: req.session.build.line.maxPrice
      }
    }
  });

  newPost.save();
  req.session.build = {
    rod: {},
    reel: {},
    line: {}
  }


  res.redirect('/builder');

  res.end();

});



// Catch 404 error and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
  res.status(err.status || 500);

  if (err.message == 'Username or Password is incorrect') {
    res.render('login', {data: req.session, err: {
      msg: res.locals.message
    }});
  } else {
    res.render('error', {data: req.session});

  }

});
