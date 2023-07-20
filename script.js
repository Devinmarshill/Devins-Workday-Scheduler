$(function () {
  // the following function is creating variables for the IDs found in the HTML and are going to format the date of the calendar to show today's date in a Day, Month and Date format.
  var currentDayEl = $("#currentDay")
  var currentDayTime = dayjs().format("dddd MMMM, DD")
  var saveBtn = $(".saveBtn")
  // console.log(currentDayTime)
  currentDayEl.text(currentDayTime)
  var currentHour = dayjs().hour()
  // console.log(currentHour)

  for (let i = 9; i < 18; i++) {
    var timeBlock = $("#hour-" + i)
    var event = localStorage.getItem("hour-" + i)
    if (i === currentHour) {
      timeBlock.addClass("present")
    }
    else if (currentHour > i) {
      timeBlock.addClass("past")
    }
    else {
      timeBlock.addClass("future")
    }
  }
  // the for loop above searchs to see if the current hour is equal to the present time, it will add a "present" class if the current hour is greater than "i" it will add a class of "past"

  function saveEvent(event) {
    var currentButton = $(event.target)
    var textArea = currentButton.siblings("textarea")
    var parentId = currentButton.parent().attr("id")

    alert(textArea.val() + " " + parentId)
    localStorage.setItem(parentId, textArea.val())
    localStorage.getItem("hour-" + i)

  }
  saveBtn.on("click", saveEvent)
});
