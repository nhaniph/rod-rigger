$(document).ready(function() {


  function copyToClipboard(element) {
    //console.log("hello");

    var $temp = $("<input>");
    $("body").append($temp);
    var copyValue = $(element).text();
    copyValue = copyValue.substr(0, copyValue.length - 4);
    $temp.val(copyValue).select();
    document.execCommand("copy");
    $temp.remove();
    $('[data-toggle="tooltip"]').tooltip();
  }

  $("#copy").click(function() {
    copyToClipboard('#post-link');
  });

});
