var moment = require('../moment');

var time1 = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
console.log(time1) //Tuesday, November 27th 2018, 02:15:52 pm
var time2 = moment().format('YYYY-MM-DD');
console.log(time2) //2018-11-27

var time3 = moment().format('ddd, hA');
console.log(time3)

var time4 = moment().format('YYYY MM DD');
console.log(time4)