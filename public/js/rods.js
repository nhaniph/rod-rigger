//var brandArr = ["Tsunami","ODM Rods","TackleDirect","Star Rods","St. Croix","Black Hole","Daiwa","Shimano","Temple Fork Outfitters","G Loomis","Ande","Okuma","Ocean Tackle International","Ahi USA","Ugly Stik","Tica","Penn","Jigging World","Lamiglas","Tony Maja","Falcon Rods","Van Staal","13 Fishing","Accurate","Phenix","Lew's","Wright & McGill","Sea Striker","Century Rods","Shakespeare","Seeker","Rogue Rods","Major Craft","RH Composites","Quantum","Maxel","Crowder Rods","Fin-Nor","Fitzgerald Rods","Blackfin","Black Bart","Favorite","Duckett Fishing","Dobyns Rods","Megabass","Fenwick","Abu Garcia","Douglas Outdoors","Doomsday Tackle","Beulah Fly Rods","Sage","Redington","Thomas & Thomas","Mystic Outdoors","Waterworks Lamson","R.L. Winston"];
var brandArr = [{
  "brand": "Tsunami",
  "oneWrd": true
}, {
  "brand": "ODM Rods",
  "oneWrd": false,
  "value": "DM Rods"
}, {
  "brand": "TackleDirect",
  "oneWrd": true
}, {
  "brand": "Star Rods",
  "oneWrd": false,
  "value": "ar Rods"
}, {
  "brand": "St. Croix",
  "oneWrd": false,
  "value": "t. Croix"
}, {
  "brand": "Black Hole",
  "oneWrd": false,
  "value": "ck Hole"
}, {
  "brand": "Daiwa",
  "oneWrd": true
}, {
  "brand": "Shimano",
  "oneWrd": true
}, {
  "brand": "Temple Fork Outfitters",
  "oneWrd": false,
  "value": "le Fork Outfitters"
}, {
  "brand": "G Loomis",
  "oneWrd": false,
  "value": "G Loomis"
}, {
  "brand": "Ande",
  "oneWrd": true
}, {
  "brand": "Okuma",
  "oneWrd": true
}, {
  "brand": "Ocean Tackle International",
  "oneWrd": false,
  "value": "an Tackle International"
}, {
  "brand": "Ahi USA",
  "oneWrd": false,
  "value": "hi USA"
}, {
  "brand": "Ugly Stik",
  "oneWrd": false,
  "value": "ly Stik"
}, {
  "brand": "Tica",
  "oneWrd": true
}, {
  "brand": "Penn",
  "oneWrd": true
}, {
  "brand": "Jigging World",
  "oneWrd": false,
  "value": "ng World"
}, {
  "brand": "Lamiglas",
  "oneWrd": true
}, {
  "brand": "Tony Maja",
  "oneWrd": false,
  "value": "ny Maja"
}, {
  "brand": "Falcon Rods",
  "oneWrd": false,
  "value": "on Rods"
}, {
  "brand": "Van Staal",
  "oneWrd": false,
  "value": "an Staal"
}, {
  "brand": "13 Fishing",
  "oneWrd": false,
  "value": "13 Fishing"
}, {
  "brand": "Accurate",
  "oneWrd": true
}, {
  "brand": "Phenix",
  "oneWrd": true
}, {
  "brand": "Lew's",
  "oneWrd": true
}, {
  "brand": "Wright & McGill",
  "oneWrd": false,
  "value": "ht & McGill"
}, {
  "brand": "Sea Striker",
  "oneWrd": false,
  "value": "ea Striker"
}, {
  "brand": "Century Rods",
  "oneWrd": false,
  "value": "ry Rods"
}, {
  "brand": "Shakespeare",
  "oneWrd": true
}, {
  "brand": "Seeker",
  "oneWrd": true
}, {
  "brand": "Rogue Rods",
  "oneWrd": false,
  "value": "ue Rods"
}, {
  "brand": "Major Craft",
  "oneWrd": false,
  "value": "or Craft"
}, {
  "brand": "RH Composites",
  "oneWrd": false,
  "value": "RH Composites"
}, {
  "brand": "Quantum",
  "oneWrd": true
}, {
  "brand": "Maxel",
  "oneWrd": true
}, {
  "brand": "Crowder Rods",
  "oneWrd": false,
  "value": "er Rods"
}, {
  "brand": "Fin-Nor",
  "oneWrd": true
}, {
  "brand": "Fitzgerald Rods",
  "oneWrd": false,
  "value": "ld Rods"
}, {
  "brand": "Blackfin",
  "oneWrd": true
}, {
  "brand": "Black Bart",
  "oneWrd": false,
  "value": "ck Bart"
}, {
  "brand": "Favorite",
  "oneWrd": true
}, {
  "brand": "Duckett Fishing",
  "oneWrd": false,
  "value": "tt Fishing"
}, {
  "brand": "Dobyns Rods",
  "oneWrd": false,
  "value": "ns Rods"
}, {
  "brand": "Megabass",
  "oneWrd": true
}, {
  "brand": "Fenwick",
  "oneWrd": true
}, {
  "brand": "Abu Garcia",
  "oneWrd": false,
  "value": "bu Garcia"
}, {
  "brand": "Douglas Outdoors",
  "oneWrd": false,
  "value": "as Outdoors"
}, {
  "brand": "Doomsday Tackle",
  "oneWrd": false,
  "value": "ay Tackle"
}, {
  "brand": "Beulah Fly Rods",
  "oneWrd": false,
  "value": "ah Fly Rods"
}, {
  "brand": "Sage",
  "oneWrd": true
}, {
  "brand": "Redington",
  "oneWrd": true
}, {
  "brand": "Thomas & Thomas",
  "oneWrd": false,
  "value": "as & Thomas"
}, {
  "brand": "Mystic Outdoors",
  "oneWrd": false,
  "value": "ic Outdoors"
}, {
  "brand": "Waterworks Lamson",
  "oneWrd": false,
  "value": "ks Lamson"
}, {
  "brand": "R.L. Winston",
  "oneWrd": false,
  "value": "L. Winston"
}, {
  "brand": "Savage Gear",
  "oneWrd": false,
  "value": "ge Gear"
}, {
  "brand": "FishUSA",
  "oneWrd": true,
  "value": "FishUSA"
}, {
  "brand": "APR",
  "oneWrd": true,
  "value": "APR"
}, {
  "brand": "Cashion",
  "oneWrd": true,
  "value": "Cashion"
}, {
  "brand": "Denali",
  "oneWrd": true,
  "value": "Denali"
}, {
  "brand": "Berkley",
  "oneWrd": true,
  "value": "Berkley"
}, {
  "brand": "B'n'M",
  "oneWrd": true,
  "value": "B'n'M"
}, {
  "brand": "Eagle Claw",
  "oneWrd": false,
  "value": "le Claw"
}, {
  "brand": "Fish Hawk",
  "oneWrd": false,
  "value": "sh Hawk"
}, {
  "brand": "Cortland",
  "oneWrd": true,
  "value": "Cortland"
}, {
  "brand": "Echo",
  "oneWrd": true,
  "value": "Echo"
}, {
  "brand": "Hardy",
  "oneWrd": true,
  "value": "Hardy"
}, {
  "brand": "Raven",
  "oneWrd": true,
  "value": "Raven"
}, {
  "brand": "Sheffield",
  "oneWrd": true,
  "value": "Sheffield"
}, {
  "brand": "Beaver Dam",
  "oneWrd": false,
  "value": "er Dam"
}, {
  "brand": "Clam",
  "oneWrd": true,
  "value": "Clam"
}, {
  "brand": "HT Enterprises",
  "oneWrd": true,
  "value": "HT Enterprises"
}, {
  "brand": "Northland",
  "oneWrd": true,
  "value": "Northland"
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
  let fetchLink = `/data/rod?page=${page}&limit=10&category=${category}&brand=${brand}&search=${search}`;

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
