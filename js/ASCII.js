// JavaScript Document
$('body').on('blur', '#input_area', function(){
  $("#text_area").html('<ul></ul>');
  var make_awesome = $(this).val().split('');
  for(var i = 0; i < make_awesome.length; i++)
    {
      if(make_awesome[i] != ' ')
      {
        if(make_awesome[i].toLowerCase() == make_awesome[i]){
          var the_html = $('.bet-' + make_awesome[i]).html();
          $("#text_area ul").append('<li>' + the_html + '</li>');
        }
        else{
          var the_html = $('.bet-' + make_awesome[i].toLowerCase()).html();
          $("#text_area ul").append("<li class='capit'>" + the_html + '</li>');
        }
      }
      else{
        var the_html = $('.bet-space').html();
        $("#text_area ul").append('<li>' + the_html + '</li>');
      }
    }
});

$('#input_area').trigger('blur');