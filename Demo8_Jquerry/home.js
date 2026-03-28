console.log("jquerry is ready");
// document.getElementById("h3id").innerText;
var h3Content = $("#h3id").text();
console.log(h3Content);

var h4Content = $(".h4Class").text();
console.log(h4Content);

var h5Content = $("h5").text();
console.log(h5Content);

// event handling jquerry
$("#bt1Id").click(function (e) {
  console.log("Button 1 is clicked");
});
//
$("#bt2Id").click(function (e) {
  console.log("Button 2 is clicked");
});

// $("#h3id").val();
