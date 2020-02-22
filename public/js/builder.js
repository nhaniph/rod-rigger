var removeBtn = document.getElementsByClassName("remove");

$(".remove").each(function(index) {
  $(this).click(function() {
    var parentId = $(this).closest(".col")[0].id;
    removeData("/remove", parentId);
    var source = document.getElementById(`${parentId}-build-template`).innerHTML;

    var template = Handlebars.compile(source);
    var html = template();
    document.getElementById(`${parentId}`).innerHTML = html;
  });
});


/*
for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener("click", function() {
    var parentDiv = removeBtn[i].closest("div.col");
    var parentId = parentDiv.id;
    console.log(parentId);
    console.log(parentDiv);

    var source = document.getElementById(`${parentId}-build-template`).innerHTML;
    document.getElementById(`${parentId}`).innerHTML = source;




    //removeData("/remove", parentId);

    var source = document.getElementById(`${parentId}-build-template`).innerHTML;

    var template = Handlebars.compile(source);
    var html = template();
    document.getElementById(`${parentId}`).innerHTML = html;



  });
}
*/
async function removeData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: data
    })
  });
}

$('#file').on('change', function() {
  //get the file name
  var fileName = $(this).val();
  //replace the "Choose a file" label
  $(this).next('.custom-file-label').html(fileName);
})
