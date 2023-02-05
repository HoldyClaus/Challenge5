var timeDisplayEl = $('#currentDay');
var saveButton = $('.btn');
var currentHour = dayjs().format('H');
var textBox = $(".description");

function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}
var exampleHour = 23
function handleHour(time){
    if(time < 12){
        return time + ":00 AM"
    } else{
        return time-12 + ":00 PM"
    }
}
$(function () {
    $(saveButton).on("click", saveElement);
    function saveElement(event){
        event.preventDefault()
        var parentID = $(this).parent().attr('id');
        var userInput = event.target.previousElementSibling.value
        localStorage.setItem(parentID, userInput);
    }
    for(let i=9; i< 18;i++){
        var thisSlotsStorage = localStorage.getItem(`hour-${i}`)
        console.log($(`#hour-${i}`).children()[1])
        $(`#hour-${i}`).children()[1].value =thisSlotsStorage
        if (currentHour == i) {
            $(`#hour-${i}`).addClass("present");
        } else if (currentHour > i) {
            $(`#hour-${i}`).addClass("past");
        } else {
            $(`#hour-${i}`).addClass("future");
        }
    }
  });

  displayTime();
  setInterval(displayTime, 1000);