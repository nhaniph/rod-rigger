var brandArr = [{
  "brand": "Beulah Fly Rods",
  "oneWrd": false,
  "value": "ah Fly Rods"
}, {
  "brand": "Rio",
  "oneWrd": true
}, {
  "brand": "Scientific Anglers",
  "oneWrd": false,
  "value": "ic Anglers"
}, {
  "brand": "Hatch",
  "oneWrd": true
}, {
  "brand": "Airflo",
  "oneWrd": true
}, {
  "brand": "Umpqua",
  "oneWrd": true
}, {
  "brand": "Hi-Seas",
  "oneWrd": true
}, {
  "brand": "Sufix",
  "oneWrd": true
}, {
  "brand": "Seaguar",
  "oneWrd": true
}, {
  "brand": "Berkley",
  "oneWrd": true
}, {
  "brand": "Power Pro",
  "oneWrd": false,
  "value": "er Pro"
}, {
  "brand": "Momoi",
  "oneWrd": true
}, {
  "brand": "Jinkai",
  "oneWrd": true
}, {
  "brand": "Sunline",
  "oneWrd": true
}, {
  "brand": "Yo-Zuri",
  "oneWrd": true
}, {
  "brand": "Spiderwire",
  "oneWrd": true
}, {
  "brand": "Lindgren-Pitman",
  "oneWrd": true
}, {
  "brand": "Ande",
  "oneWrd": true
}, {
  "brand": "Stren",
  "oneWrd": true
}, {
  "brand": "Gliss",
  "oneWrd": true
}, {
  "brand": "Runoff Lures",
  "oneWrd": false,
  "value": "ff Lures"
}, {
  "brand": "Triple Fish",
  "oneWrd": false,
  "value": "le Fish"
}, {
  "brand": "Platypus",
  "oneWrd": true
}, {
  "brand": "P-Line",
  "oneWrd": true
}, {
  "brand": "Aftco",
  "oneWrd": true
}, {
  "brand": "Daiwa",
  "oneWrd": true
}, {
  "brand": "American Fishing Wire",
  "oneWrd": false,
  "value": "an Fishing Wire"
}, {
  "brand": "Jerry Brown",
  "oneWrd": false,
  "value": "ry Brown"
}, {
  "brand": "Malin",
  "oneWrd": true
}, {
  "brand": "Trik",
  "oneWrd": true
}, {
  "brand": "Tony Maja",
  "oneWrd": false,
  "value": "ny Maja"
}, {
  "brand": "Makai",
  "oneWrd": true
}, {
  "brand": "Sea Striker",
  "oneWrd": false,
  "value": "ea Striker"
}, {
  "brand": "TUF-LINE",
  "oneWrd": true
}, {
  "brand": "Tsunami",
  "oneWrd": true
}, {
  "brand": "Vicious",
  "oneWrd": true
}, {
  "brand": "Gamma",
  "oneWrd": true
}, {
  "brand": "Cortland",
  "oneWrd": true
}, {
  "brand": "FINS",
  "oneWrd": true
}, {
  "brand": "Nomad Design",
  "oneWrd": false,
  "value": "ad Design"
}, {
  "brand": "Wind-On",
  "oneWrd": true
}, {
  "brand": "Izorline",
  "oneWrd": true
}, {
  "brand": "Florida Fishing Products",
  "oneWrd": false,
  "value": "da Fishing Products"
}, {
  "brand": "Braid Products",
  "oneWrd": false,
  "value": "id Products"
}, {
  "brand": "Ardent",
  "oneWrd": true
}, {
  "brand": "Blood Run Tackle",
  "oneWrd": false,
  "value": "un Tackle"
}, {
  "brand": "Clam",
  "oneWrd": true
}, {
  "brand": "DAM",
  "oneWrd": true
}, {
  "brand": "Lew's",
  "oneWrd": true
}, {
  "brand": "Maxima",
  "oneWrd": true
}, {
  "brand": "Northland",
  "oneWrd": true
}, {
  "brand": "Raven",
  "oneWrd": true
}, {
  "brand": "HT Enterprises",
  "oneWrd": false,
  "value": "HT Enterprises"
}, {
  "brand": "Mason",
  "oneWrd": true
}, {
  "brand": "PowerPro",
  "oneWrd": true
}, {
  "brand": "Tuf-Line",
  "oneWrd": true
}, {
  "brand": "Drennan",
  "oneWrd": true
}, {
  "brand": "Redwing Tackle",
  "oneWrd": false,
  "value": "ng Tackle"
}, {
  "brand": "Stealthcore",
  "oneWrd": true
}, {
  "brand": "Torpedo",
  "oneWrd": true
}, {
  "brand": "Musky Innovations",
  "oneWrd": false,
  "value": "ky Innovations"
}, {
  "brand": "SPRO",
  "oneWrd": true
}, {
  "brand": "Terminator",
  "oneWrd": true
}, {
  "brand": "VMC",
  "oneWrd": true
}, {
  "brand": "Anglers Image",
  "oneWrd": false,
  "value": "rs Image"
}, {
  "brand": "Frog Hair",
  "oneWrd": false,
  "value": "og Hair"
}, {
  "brand": "RIO",
  "oneWrd": true
}, {
  "brand": "Wapsi",
  "oneWrd": true
}, {
  "brand": "Eagle Claw",
  "oneWrd": false,
  "value": "le Claw"
}, {
  "brand": "Fenwick",
  "oneWrd": true
}, {
  "brand": "Hardy",
  "oneWrd": true
}, {
  "brand": "Temple Fork Outfitters",
  "oneWrd": false,
  "value": "rk Outfitters"
}];

// Creates the checkboxes with the given brands

var filterCheckboxes = document.getElementsByClassName("checkbox");
var brandCheckboxes = document.getElementsByClassName("brand");
var categoryCheckboxes = document.getElementsByClassName("category");
var searchBar = document.getElementById("search");
var brandFilter = [];
var categoryFilter = [];
var brandStr = "";
var categoryStr = "";
var searchStr = "";
var addBtns;

// Initial Functions when we first load the pages
createBrands();
render(window.location.hash);

searchBar.addEventListener("change", function() {
  searchStr = (searchBar.value).replace(/\s/g, '$');
  render(window.location.hash)
})

for (let i = 0; i < filterCheckboxes.length; i++) {
  // When a checkbox is changed, check to see which ones are selected
  filterCheckboxes[i].addEventListener("change", function() {
    checkFilters();
    let hash = window.location.hash;
    let hashPage = hash.substr(hash.indexOf("=" + 1), hash.length);
    //console.log(hash, hashPage);

    if (hashPage > 1) {
      window.location.hash = "#page=1";
    }
    render(window.location.hash);
  });
}

function createBrands() {
  var source = document.getElementById("filter-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = brandArr;
  var html = template(context);
  document.getElementById("filters").innerHTML = html;
}

function checkFilters() {
  // Reset the filters array so there are no duplicates
  brandFilter.length = 0;
  categoryFilter.length = 0;
  // If a box is checked, add it to array of filters
  for (let i = 0; i < brandCheckboxes.length; i++) {
    if (brandCheckboxes[i].checked == true) {
      brandFilter.push(brandCheckboxes[i].value);
    }
  }

  for (let i = 0; i < categoryCheckboxes.length; i++) {
    if (categoryCheckboxes[i].checked == true) {
      categoryFilter.push(categoryCheckboxes[i].value);
    }
  }

  categoryStr = categoryFilter.join('$');
  brandStr = brandFilter.join('$');

  //console.log(brandStr);
  //console.log(categoryStr);
}

function fetchAndServeData(page, category, brand, search) {
  let fetchLink = `/data/line?page=${page}&limit=10&category=${category}&brand=${brand}&search=${search}`;

  fetch(fetchLink).then(function(res) {
    return res.json();
  }).then(function(data) {
    let products = data.results;
    let pages = data;

    //Generates HTML elements from data
    generateAllProductsHTML(products);
    generatePagination(pages);
    return products;

  }).then(function(data) {
    addBtns = document.getElementsByClassName("add");
    for (let i = 0; i < addBtns.length; i++) {
      addBtns[i].addEventListener("click", function() {
        //console.log("Add button clicked", data[i]);
        postData("/add", data[i]);
        location.href = "/builder";
      });
    }
  });

  //console.log(fetchLink);
}

window.addEventListener("hashchange", function() {
  //On every hash change the render function is called with the new hash.
  // This is how the navigation of our app happens.

  render(decodeURI(window.location.hash));
  console.log("Hash changed");
});


function render(url) {
  // Gets the # keyword from the current URL e.x. localhost:3000/#page1 gives you page1
  var keyWrd = url.substr(url.indexOf("#"), url.indexOf("="));
  //Clears the page of what is currently shown
  document.getElementById("output").innerHTML = "";
  document.getElementById("pagination").innerHTML = "";


  var map = {
    //Pagination
    "#page": function() {

      var pageNum = url.split("=")[1];
      fetchAndServeData(pageNum, categoryStr, brandStr, searchStr);

    }

  } //map

  if (map[keyWrd]) {
    map[keyWrd]();
  }
} //render


function generateAllProductsHTML(data) {
  var source = document.getElementById("product-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = data;
  var html = template(context);
  document.getElementById("output").innerHTML = html;
}

function generatePagination(pages) {
  var source = document.getElementById("page-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = pages;
  var html = template(context);
  document.getElementById("pagination").innerHTML = html;
}

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
