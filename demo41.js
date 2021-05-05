const buffer1 = Buffer.allocUnsafe(40);
// console.log(buffer1)
console.log('%c 🌭 buffer1 allocUnsafe: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', buffer1);
buffer1.fill(0)
// console.log(buffer1)
console.log('%c 🍦 buffer1: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', buffer1);
const buffer2 = Buffer.alloc(40);
// console.log("buffer2:", buffer2)
console.log('%c 🥑 buffer2: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', buffer2);
len = buffer1.write("abc")
console.log("len=", len, "buffer1=", buffer1)
const buffer3 = Buffer.from([97, 98, 99, 100])
const buffer4 = Buffer.from("Hello World")
// console.log(buffer3)
console.log('%c 🥡 buffer3: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', buffer3);
// console.log(buffer4)
console.log('%c 🥠 buffer4: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', buffer4);