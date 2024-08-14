// JQuery
$(document).ready(function () {
     $("#draggable").draggable();
     //Droppable
     $("#draggable1").draggable();
     $("#Droppable1").droppable({
          drop: function (e, ui) {
               $(this).css("background", "green").find("p.Droppable1").html("dropped")
          }
     })
     //Accordion
     $("#accordion").accordion();
     $("#accordion1").accordion({
          collapsible: true
     });
     //Autocomplete
     var courseName = ["html", "css", "js", "jquery", "python", "java"];
     $("#Courses").autocomplete({
          source: courseName
     });
     //Datepicker
     $("#datepicker").datepicker();
     //Dialog
     $("#dialog").dialog({
          autoOpen: false,
          show: {
               effect: "blind",
               duration: 1000
          },
          hide: {
               effect: "explode",
               duration: 1000
          }
     });
     $("#opener").on("click", function () {
          $("#dialog").dialog("open");
     });
     //Progressbar
     var progressbar = $("#progressbar"),
          progressLabel = $(".progress-label");

     progressbar.progressbar({
          value: false,
          change: function () {
               progressLabel.text(progressbar.progressbar("value") + "%");
          },
          complete: function () {
               progressLabel.text("Complete!");
          }
     });

     function progress() {
          var val = progressbar.progressbar("value") || 0;

          progressbar.progressbar("value", val + 2);

          if (val < 99) {
               setTimeout(progress, 80);
          }
     }
     setTimeout(progress, 2000);

     //Slider
     $("#slider-range").slider({
          range: true,
          min: 0,
          max: 500,
          values: [75, 300],
          slide: function (event, ui) {
               $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
          }
     });
     $("#amount").val("$" + $("#slider-range").slider("values", 0) +
          " - $" + $("#slider-range").slider("values", 1));
     //Spinner
     $("#tabs").tabs();
     //Tooltip
     $("#show-option").tooltip()
     //Tooltip
     $("#show-options").tooltip({
          track: true
     })
     //Draggable
     $("#draggable2").draggable({
          revert: true
     });

     //
     $("#draggable3").draggable({
          revert: "valid"
     });
     $("#Droppable3").droppable();

     //
     $("#draggable4").draggable({
          revert: "invalid"
     });
     $("#Droppable4").droppable({
          drop: function (e, ui) {
               $(this)
                    .css("background", "red").find("p.Droppable1").html("Dropped!");
          }
     });

//
$( "#datepicker1" ).datepicker({
     showOn: "button",
     buttonText: "Select date"
   });





})