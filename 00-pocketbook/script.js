$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();

    //vérifier la valeur de l'input first-name
    //si c'est vide, j'affiche msg erreur
    var firstName = $('#first').val();
    if (firstName === "") {
      $('.first-name-error').html('Please enter your first name');
    };
    var lastName = $('#last').val();
    if (lastName === "") {
      $('.last-name-error').html('Please enter your last name');
    };
    var mail = $('#email').val();
    if (mail === "") {
      $('.email-error').html('Please enter your email address');
    };
    var pass = $('#password').val();
    if (pass === "") {
      $('.password-error').html('Please enter a valid password');
    };

  });

});
