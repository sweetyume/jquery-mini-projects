// $(document).ready(function(){
//     $(".btn").on({
//
//         mouseleave: function(){
//             $(this).removeClass("btn-like");
//         },
//         click: function(){
//             $(this).toggleClass("btn-like");
//         }
//     });
// });
$(document).ready(function() {
  $(".btn").click(function(){
      $(this).toggleClass("btn-like");
  });
});
