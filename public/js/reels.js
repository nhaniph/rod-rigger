//var brandArr = ["Waterworks Lamson","Redington","Hatch","Cheeky","Seigler Reels","Sage","Tibor","Douglas Outdoors","Temple Fork Outfitters","Van Staal","Shimano","13 Fishing","Daiwa","Abu Garcia","Quantum","Zebco","Pflueger","Favorite","Lew's","Ardent","Okuma","Penn","Avet Reels","Tica","Tsunami","Star Rods","Florida Fishing Products","Accurate","Fin-Nor","Maxel","Elec-Tra-Mate","Kristal Fishing","Hooker Electric","Everol","Lindgren-Pitman","Blue Marlin","Alutecnos"];
var brandArr = [{
  "brand": "Waterworks Lamson",
  "oneWrd": false,
  "value": "ks Lamson"
}, {
  "brand": "Redington",
  "oneWrd": true
}, {
  "brand": "Hatch",
  "oneWrd": true
}, {
  "brand": "Cheeky",
  "oneWrd": true
}, {
  "brand": "Seigler Reels",
  "oneWrd": false,
  "value": "er Reels"
}, {
  "brand": "Sage",
  "oneWrd": true
}, {
  "brand": "Tibor",
  "oneWrd": true
}, {
  "brand": "Douglas Outdoors",
  "oneWrd": false,
  "value": "as Outdoors"
}, {
  "brand": "Temple Fork Outfitters",
  "oneWrd": false,
  "value": "le Fork Outfitters"
}, {
  "brand": "Van Staal",
  "oneWrd": false,
  "value": "an Staal"
}, {
  "brand": "Shimano",
  "oneWrd": true
}, {
  "brand": "13 Fishing",
  "oneWrd": false,
  "value": "13 Fishing"
}, {
  "brand": "Daiwa",
  "oneWrd": true
}, {
  "brand": "Abu Garcia",
  "oneWrd": false,
  "value": "bu Garcia"
}, {
  "brand": "Quantum",
  "oneWrd": true
}, {
  "brand": "Zebco",
  "oneWrd": true
}, {
  "brand": "Pflueger",
  "oneWrd": true
}, {
  "brand": "Favorite",
  "oneWrd": true
}, {
  "brand": "Lew's",
  "oneWrd": true
}, {
  "brand": "Ardent",
  "oneWrd": true
}, {
  "brand": "Okuma",
  "oneWrd": true
}, {
  "brand": "Penn",
  "oneWrd": true
}, {
  "brand": "Avet Reels",
  "oneWrd": false,
  "value": "et Reels"
}, {
  "brand": "Tica",
  "oneWrd": true
}, {
  "brand": "Tsunami",
  "oneWrd": true
}, {
  "brand": "Star Rods",
  "oneWrd": false,
  "value": "ar Rods"
}, {
  "brand": "Florida Fishing Products",
  "oneWrd": false,
  "value": "da Fishing Products"
}, {
  "brand": "Accurate",
  "oneWrd": true
}, {
  "brand": "Fin-Nor",
  "oneWrd": true
}, {
  "brand": "Maxel",
  "oneWrd": true
}, {
  "brand": "Elec-Tra-Mate",
  "oneWrd": true
}, {
  "brand": "Kristal Fishing",
  "oneWrd": false,
  "value": "al Fishing"
}, {
  "brand": "Hooker Electric",
  "oneWrd": false,
  "value": "er Electric"
}, {
  "brand": "Everol",
  "oneWrd": true
}, {
  "brand": "Lindgren-Pitman",
  "oneWrd": true
}, {
  "brand": "Blue Marlin",
  "oneWrd": false,
  "value": "ue Marlin"
}, {
  "brand": "Alutecnos",
  "oneWrd": true
}, {
  "brand": "Frabill",
  "oneWrd": true
}, {
  "brand": "HT Enterprises",
  "oneWrd": false,
  "value": "HT Enterprises"
}, {
  "brand": "Bauer",
  "oneWrd": true
}, {
  "brand": "Cortland",
  "oneWrd": true
}, {
  "brand": "Echo",
  "oneWrd": true
}, {
  "brand": "Hardy",
  "oneWrd": true
}, {
  "brand": "Ross",
  "oneWrd": true
}, {
  "brand": "Shakespeare",
  "oneWrd": true
}, {
  "brand": "Islander",
  "oneWrd": true
}, {
  "brand": "Kingpin",
  "oneWrd": true
}, {
  "brand": "Raven",
  "oneWrd": true
}, {
  "brand": "Sheffield",
  "oneWrd": true
}, {
  "brand": "Clam",
  "oneWrd": true
}, {
  "brand": "Schooley's",
  "oneWrd": true
}];
/*
for (let i = 0; i < brandArr.length; i++) {
  var newItem = {
    brand: brandArr[i],
    oneWrd: brandArr[i].indexOf(' ') == -1 ? true : false
  }
  if (!newItem.oneWrd) {
    newItem.value = brandArr[i].substring(brandArr[i].indexOf(" ") - 2, brandArr[i].length);
  }
  brandArr[i] = newItem;

}

console.log(JSON.stringify(brandArr));
*/
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
});

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
  let fetchLink = `/data/reel?page=${page}&limit=10&category=${category}&brand=${brand}&search=${search}`;

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
