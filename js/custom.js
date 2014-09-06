  $(document).ready(function(){  
    
    $(".btn-click-submit").click(function(){
        $(".form-submit .btn").click();
        $('html,body').animate({scrollTop: $('.form-submit').offset().top}, 1000);
        return false;
    });

    $(".background-1").anystretch('img/background-1.jpg'); 
    $(".background-1-1").anystretch('img/background-1-1.jpg'); 

    $(".background-2").anystretch('img/background-2.jpg'); 
    $(".background-2-1").anystretch('img/background-2-1.jpg'); 

        $('form').validate({
        rules: { 
          _email: {
            minlength: 2,
            required: true,
            email: true
          } 
        },
        highlight: function(label) {
            $(label).closest('.form-group').addClass('error');
        },
        success: function(label) {
            label
                .text('OK!').addClass('valid')
                .closest('.form-group').addClass('success');
        }
    });
  
  });
