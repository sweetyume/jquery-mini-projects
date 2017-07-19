$(document).ready(function() {
  $(".more-btn").click(function(){
      $(this).next('.more-menu').slideToggle("slow");
  });
  $(".share").click(function(){
      $(this).next('.share-menu').slideToggle("slow");
  });
  $(".glyphicon-bell").click(function(){
      $(this).toggleClass("active");
  });
});
