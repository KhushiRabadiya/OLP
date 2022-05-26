$(document).ready(function() {
  jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }); 

  jQuery.validator.addMethod("address", function(value, element) 
  {
    return this.optional(element) || /^[a-z,0-9," "]+$/i.test(value);
  }); 

  jQuery.validator.addMethod("mno", function(value, element) 
  {
    return this.optional(element) || /^[6-9]\d{9}$/i.test(value);
  }); 
  jQuery.validator.addMethod("eml", function(value, element) 
  {
    return this.optional(element) || /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/i.test(value);
  }); 
  
  $("#form").validate({
  rules: {
    firstname : {
      required: true,
      lettersonly : true
    },
    lastname : {
      required: true,
      lettersonly:true
    },
    street1:{
      required:true,
      address:true,
    },
    street2:{
      required:true,
      address:true
    },
    city:{
      required:true,
      lettersonly:true
    },
    state:{
      required:true,
      lettersonly:true
    },
    code:{
      required:true,
      digits:true,
      rangelength:[6,6]
    },
    mno:{
      required:true,
      mno:true,
      digits:true,
      rangelength:[10,10]
    },
    mail:{
      required:true,
      eml:true
    },
    sel:{
      required:{
        depends: function(element){
          if(0 == $('#sel').val()){
              //Set predefined value to blank.
              $('#sel').val('');
          }
          return true;
        }
      }
    },
    area1:{
      required:true,
      minlength :5
    },
    area2:{
      required:true,
      minlength :5
    },
    container:{
      required:true
    },
    gender:{
      required:true
    }
  },
  messages : {
    firstname: {
      required:"Enter your first name, please.",
      lettersonly:"Only characters are allowed"
    },
    lastname: {
      required:"Enter your last name, please.",
      lettersonly:"Only characters are allowed"
    },
    street1: {
      required:"Enter your Street 1, please.",
      address:"Special charecters are not allowed"
    },
    street2: {
      required:"Enter your Street 2, please.",
      address:"Special charecters are not allowed"
    },
    city: {
      required:"Enter your City, please.",
      digits:"Only characters are allowed"
    },
    state: {
      required:"Enter your State, please.",
      digits:"Only characters are allowed"
    },
    code:{
      required:"Enter your zip code",
      digits:"Only numbers are allowed",
      rangelength:"Only 6 letters are allowed"
    },
    mno:{
      required:"Enter your Mobile no.",
      mno:"Numbers strat with 6 to 9",
      digits:"Only numbers are allowed",
      rangelength:"Only 10 letters are allowed"
    },
    mail:{
      required:"Enter Your Email",
      eml:"Please fill valid email id"
    },
    sel:{
      required:"Please select"
    },
    area1:{
      required:"Please give feedback",
      minlength :"Enter more than 5 characters"
    },
    area2:{
      required:"Please give suggestion",
      minlength :"Enter more than 5 characters"
    },
    container:{
      required:"Please select one"
    },
    gender:{
      required:"Please choose your gender"
    } 
  },
  errorPlacement: function(error, element) 
  {
    if ( element.is(":radio") ) 
    {
      error.appendTo( element.parents('.radio-container') );
    }
    else 
    { // This is the default behavior 
      error.insertAfter( element );
    }
    }
  });
  $('#submit').on('click', function() {
    var fname=$('#fname').val();
    var lname=$('#lname').val();
    var street1 =$('#street1').val();
    var street2 =$('#street2').val();
    var city =$('#city').val();
    var state=$('#state').val();
    var code=$('#code').val();
    var mno=$('#mno').val();
    var mail =$('#mail').val();
    var sel =$('#sel').val();
    var area1 =$('#area1').val();
    var area2=$('#area2').val();
    var container =$('#container').val();
    var gender=$('.gender').val();
    var count = $('#myTable tr').length;
    if(fname!="" && lname !="" && street1!="" && street2 !="" && city!="" && state !="" 
      && code !="" && mno !="" && mno!="" && mail !="" && sel !="" && area1 !="" && area2!="" 
      && container !="" && gender!="")
      {
        $('#myTable tbody').append('<tr class="child"><td>'+count+'</td><td>'+fname+'</td><td>'+lname+'</td><td>'
        +street1+'</td><td>'+street2+'</td><td>'+city+'</td><td>'+state+'</td><td>'+code+'</td><td>'
        +mno+'</td><td>'+mail+'</td><td>'+sel+'</td><td>'+area1+'</td><td>'+area2+'</td><td>'+container+'</td><td>'+
        gender+'</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a><br><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Update</a></td></tr>');
      }
    });
  $(document).on('click','.remCF1',function(){
    $(this).parent().parent().remove();
    $('#myTable tbody tr').each(function(i){            
      $($(this).find('td')[0]).html(i+1);          
    });
  });
  $(document).on('click','.remCF1',function(){
    $(this).parent().parent().update();
    $('#myTable tbody tr').each(function(i){            
      $($(this).find('td')[0]).append(i);               
    });
  });
  $("#form").submit(function(e){
    e.preventDefault();
  });
});