$(document).ready(function() {
  $(".day").click(function(){
      $(this).next('.hourly').slideToggle("slow");
  });
});
