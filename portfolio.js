$(document).ready(function() {
    $('#aboutButton').click(function() {
        $('.navbarButton').removeClass('active');
        $(this).addClass('active');
    });
    
    $('#portfolioButton').click(function() {
        $('.navbarButton').removeClass('active');
        $(this).addClass('active');
    });
    
    $('#contactButton').click(function() {
        $('.navbarButton').removeClass('active');
        $(this).addClass('active');
    });
    
   $('body').scrollspy(
        {target: '.navbar',
         offset: 50
            }
    );
    
    $('#nameInput').keyup(function() {
        
        $('#nameInput').wrap('<label for="nameInput">Name</label>');
        $('#nameInput').unbind('keyup');
    });
    
    $('#emailInput').keyup(function() {
        $('#emailInput').wrap('<label for="emailInput">Email Address</label>');
        $('#emailInput').unbind('keyup');
    });
    $('#phoneInput').keyup(function() {
        $('#phoneInput').wrap('<label for="phoneInput">Phone Number</label>');
        $('#phoneInput').unbind('keyup');
    });
    $('#messageInput').keyup(function() {
        $('#messageInput').wrap('<label for="messageInput">Message</label>');
        $('#messageInput').unbind('keyup');
    });
  
  
});
