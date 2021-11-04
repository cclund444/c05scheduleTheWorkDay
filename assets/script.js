var day = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentDay = document.getElementById('currentDay');
currentDay.innerHTML = day;

$(".saveBtn").on("click", function() {
    var saveEl = $(this).siblings("textarea").attr("id");
    var textEl = $(this).siblings("textarea").val();
    console.log(this)

    localStorage.setItem(saveEl, textEl);
});

function colors() {
    var currentTime = moment().hour();
    $('.row').each(function() {
        var sectionTime = parseInt($(this).attr('id').split('hrs')[1]);
        if (sectionTime < currentTime) {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        }
        else if (sectionTime === currentTime) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        } 
        else {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        }
    })
}