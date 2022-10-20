//current date to calender 

var todayDate = moment().format('ddd, MMM Do YYYY');
$("#currentDate").html(todayDate);

//create a saveBtn

var saveBtn = $(".saveBtn")

var currentHour = parseInt($(this).attr("id"));

//color coding each block based on past, present, future

function timeBlockColor() {

    for (var hour = 8; hour <= 17; hour++)
        var timeBlock = $(".time-block").eq(hour - 8);

        if (currentHour > hour) {
            timeBlock.addClass("future");

        } else if (currentHour === hour) {
            timeBlock.addClass("present");

        } else {
            timeBlock.addClass("past");
        }
    
};

timeBlockColor();
