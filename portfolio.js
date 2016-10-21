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
  
  
});
