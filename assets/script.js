//html elements
var saveButton = $('.saveBtn');
var timeBlockContainer = $('#time-blocks');

//html element divs
var hourNineDiv = $('#hour-9');
var hourTenDiv = $('#hour-10');
var hourElevenDiv = $('#hour-11');
var hourTwelveDiv = $('#hour-12');
var hourThirteenDiv = $('#hour-13');
var hourFourteenDiv = $('#hour-14');
var hourFifteenDiv = $('#hour-15');
var hourSixteenDiv = $('#hour-16');
var hourSeventeenDiv = $('#hour-17');

// input elements in an array to loop through
var divElements = [
  {htmlEl: hourNineDiv, hour: 9},
  {htmlEl: hourTenDiv, hour: 10},
  {htmlEl: hourElevenDiv, hour: 11},
  {htmlEl: hourTwelveDiv, hour: 12},
  {htmlEl: hourThirteenDiv, hour: 13},
  {htmlEl: hourFourteenDiv, hour: 14},
  {htmlEl: hourFifteenDiv, hour: 15},
  {htmlEl: hourSixteenDiv, hour: 16},
  {htmlEl: hourSeventeenDiv, hour: 17}
  //returns a number
]

//variables
var timeNow = dayjs();
//returns string
var currentHour = timeNow.format('H'); 
console.log(currentHour);
var dailySchedule = [];