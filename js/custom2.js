 
// });//end of document

jQuery( document ).ready(function( $ ) {
//     // variable to hold request

    var request;


    $(".game").submit(function(event){
        // if (request) {
        //     request.abort();
        // }
        var $form = $(this);
        var $inputs = $form.find("input, select, button, textarea, radio");
        var gameResult = $form.serialize();


        $inputs.prop("disabled", true);
        $('#result').text('The Journey is Over...');
    
        // send request to Google Docs
        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzv-gRXHjmoO2W8TgOxFcByT3lA1bPyXxtQIdXrMyiFvbFfsu4/exec",
            type: "post",
            data: gameResult
        });


        // Result is a success
        request.done(function (response, textStatus, jqXHR){
            $('#result').html('<a href="https://docs.google.com/spreadsheets/d/10tt64TiALYhPMqR2fh9JzkuhxW7oC0rXXPb_pmJ7HAY/edit?usp=sharing" target="_blank">Well Met, Traveler.</a> Check back for the Results');
            console.log("Success!");
        });
    
        // Result is a failure
        request.fail(function (textStatus, errorThrown, jqXHR){
            console.error(
                "Error: "+
                textStatus, errorThrown
            );
        });
    
        request.always(function () {
            $inputs.prop("disabled", false);
        });
    
        event.preventDefault();
    });

  var participants_selector = $("#number-of-participants"); 
  var entry_details_area = $("#game-data");

  //Each time a new value is chosen, grab their number of participants
  participants_selector.on("change", function()
  {
    //Get the number of players
    var number_of_participants = participants_selector.val();
    
    //Clear out any previously-appended HTML
    entry_details_area.empty();
    
    for (var i = 0; i < Number(number_of_participants); i++)
    {
      
      var participant_number = i+1; 
      
      var entry_form_html = [
'<form id="game1" class="game"><input ',
'            type="text" ',
'            name="Name"',
'            placeholder="Enter a Name"',
'            class="nameform"',
'            id="Name">',
'        <select name="Role">',
'  <option value="None">None</option>',
'  <option value="Assassin">Assassin</option>',
'  <option value="Merlin">Merlin</option>',
'  <option value="Mordred">Mordred</option>',
'  <option value="Morgana">Morgana</option>',
'  <option value="Oberon">Oberon</option>',
'  <option value="Percival">Percival</option>',
'</select>',
'      <select name="Alignment">',
'  <option value="Good">Good</option>',
'  <option value="Evil">Evil</option>',
'</select>',
'      <select name="Result">',
'  <option value="Win">Win</option>',
'  <option value="Loss">Loss</option>',
'</select>',
'</form>',
''
].join('');
                            
      //Add the form for each player                      
      entry_details_area.append(entry_form_html);
    }
    
  });/

//trigger multiple form submits with one button

$("#submitbutton").click(function(){
    $(".game").each(function(){
        $(this).trigger("submit");
    });
});

});






