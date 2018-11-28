var moment = require('../moment');

 
// 毫秒
var millisecond1 = moment().millisecond()
console.log(millisecond1)
var millisecond2 = moment().milliseconds();
console.log(millisecond2)

// 秒
var second1 = moment().second(); 
console.log(second1)
var second2 = moment().seconds(); 
console.log(second2)

// 分钟
var minute = moment().minute();
console.log(minute)

// 小时
var hour = moment().hour();
console.log(hour)

// 日期
var date = moment().date();
console.log(date)

//星期
var day = moment().day();
console.log(day)

var weekday = moment().weekday();
console.log(weekday)

var isoWeekday = moment().isoWeekday();
console.log(isoWeekday)

// 天
var dayOfYear = moment().dayOfYear();
console.log(dayOfYear);

//周
var week = moment().week();
console.log(week);

var isoWeek = moment().isoWeek();
console.log(isoWeek);

// 月
var month = moment().month();
console.log(month);

// 季度
var quarter = moment().quarter();
console.log(quarter)

//年
var year = moment().year();
console.log(year)

//周
var weekYear = moment().weekYear();
console.log(weekYear)

// 取值
var year = moment().get('year');
console.log(year)

var month = moment().get('month');
console.log(month)

var date = moment().get('date');
console.log(date)

var hour = moment().get('hour');
console.log(hour)

var minute = moment().get('minute');
console.log(minute)

var second = moment().get('second');
console.log(second);

var millisecond = moment().get('millisecond');
console.log(millisecond)