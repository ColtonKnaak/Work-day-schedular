$(document).ready(function() {

  const timeBlock= [
    {
      label: "9:00 am",
      tValue: "9",
      userInput: "",
    },
    {
      label: "10:00 am",
      tValue: "10",
      userInput: "",
    },
    {
      label: "11:00 am",
      tValue: "11",
      userInput: "",
    },
    {
      label: "12:00 pm",
      tValue: "12",
      userInput: "",
    },
    {
      label: "1:00 pm",
      tValue: "13",
      userInput: "",
    },
    {
      label: "2:00 pm",
      tValue: "14",
      userInput: "",
    },
    {
      label: "3:00 pm",
      tValue: "15",
      userInput: "",
    },
    {
      label: "4:00 pm",
      tValue: "16",
      userInput: "",
    },
    {
      label: "5:00 pm",
      tValue: "17",
      userInput: "",
    },
    {
      label: "6:00 pm",
      tValue: "18",
      userInput: "",
    },
    {
      label: "7:00 pm",
      tValue: "19",
      userInput: "",
    },
    {
      label: "8:00 pm",
      tValue: "20",
      userInput: "",
    },
    {
      label: "9:00 pm",
      tValue: "21",
      userInput: "",
    },
  ]

  $("#currentDay").text(dayjs().format("ddd, MMM DD, YYYY h:mm a"));

  $(timeBlock).each(function (i) {
    const row = $("<div>");
    if (i < $(timeBlock).length) {
      row
        .addClass("row")
      $(".container").append(row);
    }
    i++
  });

  $("div.row").each(function (i) {
    const timeValue = timeBlock[i].tValue;
    const labelCol = $("<div>");
    const inputCol = $("<div>");

    labelCol
      .addClass("col-2 hour")
      .text(timeBlock[i].label)
    inputCol
      .addClass("col-10 time-block")
      .attr("value", timeValue)
    $(this).append(labelCol);
    $(this).append(inputCol);
    i++
  });

  $(".time-block").each(function (i) {
    const currentHour = parseInt(dayjs().format('H'));
    const timeId = $(this).attr("value");
    if (currentHour < timeId) {
      $(this).addClass("future");
    } else if (currentHour == timeId) {
      $(this).addClass("present");
    } else if (currentHour > timeId) {
      $(this).addClass("past");
    }
    i++
  })

  $(".time-block").each(function (i) {
    const saveCol = $("<button>");
    const timeValue = timeBlock[i].tValue;
    const inputDesc = $("<textarea>").text(timeBlock[i].userInput);
    inputDesc
      .addClass("description")
      .addClass("float-left")
      .attr("id", timeValue)
    saveCol
      .addClass("col-1 saveBtn float-right")
      .text("Save")
    $(this).append(inputDesc)
    $(this).append(saveCol);
    $(".description").show()
    i++
  });

  $(".saveBtn").on("click", function () {
    const savedInput = $(this).siblings("textarea").val()
    const timeInput = $(this).parent().attr("value")
    localStorage.setItem(timeInput, savedInput);
  });

  for (let i = 9; i < 18; i++) {
    $(`#${i}`).val(localStorage.getItem(i));
  }

});
