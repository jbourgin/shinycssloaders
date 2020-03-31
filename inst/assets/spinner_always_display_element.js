/* When recalculating starts, show the spinner container & hide the output */
$(document).on('shiny:recalculating', function(event) {
    $(".recalculating").siblings(".load-container, .shiny-spinner-placeholder").show();
});

/* When new value or error comes in, hide spinner container (if any) & show the output */
$(document).on('shiny:value shiny:error', function(event) {
    $("#"+event.target.id).siblings(".load-container, .shiny-spinner-placeholder").hide();
});
