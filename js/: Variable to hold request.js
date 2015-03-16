jQuery( document ).ready(function( $ ) {
    // variable to hold request
    var request;

// $('.game').submit(function () {
//     alert($(this).attr("id"));
//     return true;
// })

    $(".game").submit(function(event){
        if (request) {
            request.abort();
        }
        var $form = $(this);
        var $inputs = $form.find("input, select, button, textarea, radio");
        var gameResult = $form.serialize();
        // var gameResult1  = $('form:eq(0)').serializeArray();
        // var gameResult2 = $('form:eq(1)').serializeArray();


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

// $("#submitbutton").click(function () {
//     $('.game').trigger('submit');

$("#submitbutton").click(function(){
    $(".game").each(function(){
        $(".game").trigger("submit");
    });
});

});




