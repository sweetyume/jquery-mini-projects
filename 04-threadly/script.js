$(document).ready(function() {
    $('.btn').click(function(event) {
      // $('#comments').keypress();
      event.preventDefault()
    	var toAdd = $("input[id=comment]").val();
        $('.comments').prepend("<li>"+toAdd+"</li>");
    });
});
