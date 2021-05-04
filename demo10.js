var x1 = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"
var y1= x1.split(", ")
console.log(typeof y1,Array.isArray(y1))
console.log(y1)
var x2 = " \t\t\r\n    abc  def  ghi\n\r\t".trim()
console.log('%c 🥫 x2 : ', 'font-size:20px;background-color: #FCA650;color:#fff;', x2 );
console.log(`[${x2}]`)