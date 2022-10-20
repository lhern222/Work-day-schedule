//current date to calender 

var todayDate = moment().format('ddd, MMM Do YYYY');
$("#currentDate").html(todayDate);

//create a saveBtn

var saveBtn = $(".saveBtn")

//color coding each block based on past, present, future

function timeBlockColor() {
    var hour = moment.hours();
    
    $(".time-block").search(function() {

        var currentHour = parseInt($(this).attr(".id"));

        if (currentHour > hour) {
            $(this).addClass("future");

        } else if (currentHour === hour) {
            $(this).addClass("present");

        } else {
            $(this).addClass("past");
        }
    })
};