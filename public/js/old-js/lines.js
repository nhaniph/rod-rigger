var filterBtn = document.getElementById("filter");
var categoryBtns = document.getElementsByName("category");
var loadMoreBtn = document.getElementById("load");
var dataDiv = document.getElementById("data");
var brandForm = document.getElementById("filter-brand");
var brandBtns = document.getElementsByName("brand");
var searchBar = document.getElementById("search-bar");
var btnCounter = 0;
var category = [];
var brand = [];
var brandStr;
var searchStr;
var fetchLink;

var addBtn;

var brandArr = ["Beulah Fly Rods","Rio","Scientific Anglers","Hatch","Airflo","Umpqua","Hi-Seas","Sufix","Seaguar","Berkley","Power Pro","Momoi","Jinkai","Sunline","Yo-Zuri","Spiderwire","Lindgren-Pitman","Ande","Stren","Gliss","Runoff Lures","Triple Fish","Platypus","P-Line","Aftco","Daiwa","American Fishing Wire","Jerry Brown","Malin","Trik","Tony Maja","Makai","Sea Striker","TUF-LINE","Tsunami","Vicious","Gamma","Cortland","FINS","Nomad Design","Wind-On","Izorline","Florida Fishing Products","Braid Products","Ardent"];

for (let i = 0; i < brandArr.length; i++) {

  if (brandArr[i].indexOf(' ') == -1) {
    value = brandArr[i];
  } else {
    value = brandArr[i].substring(brandArr[i].indexOf(" ") - 2, brandArr[i].length);
  }

  brandForm.innerHTML += `<p><label><input class="with-gap" name="brand" type="checkbox" value="${value}"/><span>${brandArr[i]}</span></label></p>`
}



function getType() {
  category.length = 0;
  brand.length = 0;

  for (let i = 0; i < categoryBtns.length; i++) {
    if (categoryBtns[i].checked == true) {
      category.push(categoryBtns[i].value);
    }
  }

  for (let i = 0; i < brandBtns.length; i++) {
    if (brandBtns[i].checked == true) {
      brand.push(brandBtns[i].value);
    }
  }


  searchStr = (searchBar.value).replace(/\s/g, '$');
  categoryStr = category.join('$');
  brandStr = brand.join('$');
}


filterBtn.addEventListener("click", function() {
  let oldSearch = searchStr;
  let oldCategory = categoryStr;
  let oldBrand = brandStr;

  getType();
  btnCounter = 0;

  if (oldCategory !== categoryStr) {
    dataDiv.innerHTML = '';
  }

  if (oldBrand !== brandStr) {
    dataDiv.innerHTML = '';
  }

  if (oldSearch !== searchStr) {
    dataDiv.innerHTML = '';
  }

  fetchData();
});



loadMoreBtn.addEventListener("click", function() {
  fetchData();
});

function fetchData() {
  btnCounter++;
  fetchLink = `/data/line?page=${btnCounter}&limit=10&category=${categoryStr}&brand=${brandStr}&search=${searchStr}`;

  //console.log(btnCounter);
  //console.log(fetchLink);

  fetch(fetchLink).then(function(res) {
    return res.json();
  }).then(function(data) {
    let products = data.results;
    //console.log(products);

    for (let i = 0; i < products.length; i++) {
      let html = `<div class="row"><div class="col s12 m7"><div class="card"><div class="card-image"><img src="${products[i]["img_src"]}"><span class="card-title blue-text">${products[i].brand}</span></div><div class="card-content"><p>${products[i].name}</p><p class="price">Price: ${products[i].price}</p></div><div class="card-action"><a href="${products[i].href}">Buy</a><button class="btn add">Add</button></div></div></div>`;
      dataDiv.innerHTML += html;
    }
    return products;

  })
  .then(function(data) {
    //console.log(data);

    addBtn = document.getElementsByClassName("add");
    //console.log(addBtn);

    for (let i = 0; i < addBtn.length; i++) {
      addBtn[i].addEventListener("click", function() {
        postData("/add", data[i]);
        location.href = "/builder";
      });
    }

  });

}


getType();
fetchData();

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
