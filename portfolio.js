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
        
        $('#nameLabel').removeClass('hiddenLabel');
    });
    
    $('#emailInput').keyup(function() {
        $('#emailLabel').removeClass('hiddenLabel');
    });
    $('#phoneInput').keyup(function() {
        $('#phoneLabel').removeClass('hiddenLabel');
    });
    $('#messageInput').keyup(function() {
        $('#messageLabel').removeClass('hiddenLabel');
    });
  
  
});
