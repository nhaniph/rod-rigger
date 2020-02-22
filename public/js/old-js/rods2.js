var testBtn = document.getElementById("test");
var brandCheckBoxes = document.getElementsByName("brand");
//var baseURL = "rods2?page=1&limit=10&category=&brand=&search=";
var brands = [];

function initial() {
  let url = location.href; //parse part of url that has the brandStr and then find all the checkboxes with the values and make them checked
  var brandStr = url.substr(url.indexOf())
}

function check() {
  for (let i = 0; i < brandCheckBoxes.length; i++) {
    if (brandCheckBoxes[i].checked == true) {
      brands.push(brandCheckBoxes[i].value);
    }
  }
}



testBtn.addEventListener("click", function() {
  //location.href = "rods2?page=1&limit=10&category=Fly&brand=&search=";
  //console.log('hello');
  check();
  var brandStr = brands.join('$');
  console.log(brandStr);
  location.href = `rods2?page=1&limit=10&category=&brand=${brandStr}&search=`;
});
