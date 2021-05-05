console.log("program start")
setTimeout(() => {
    console.log("team A finish  work")
    setTimeout(() => {
        console.log("team C finish")
    }, 0)
}, 0)
setTimeout(() => {
    console.log("team B finish  work")
    setTimeout(() => {
        console.log("team D finish")
    }, 0)
}, 0)
console.log("program end")