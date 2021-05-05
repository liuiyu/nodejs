/*********** 使用 arrow fn 就沒有 this 的問題 */ 
const fs = require('fs')
const path1 = "data\\info.txt"
function FileObject() {
    this.fileName = "";
    this.file_exists = function (callback) {
        console.log("about to open:", this.fileName)
        fs.open(this.fileName, 'r',  (err, handle) => {
            if (err) {
                console.log("can not open file", this.fileName)
                callback(err)        
                return;
            }
            console.log("the file we process is:", this.fileName)
            console.log("now we can use file handler:", handle)
            fs.close(handle, function () { })
            callback(null, true);
            
        })
        console.log("this will no longer exist")
    }
}
const fo = new FileObject()
fo.fileName = path1;
fo.file_exists((error, results) => {
    if (error) {
        console.log("error in file_exists", JSON.stringify(error))
        return
    }
    console.log("file exists!", results)
})

/*********** 把 this儲存到變數中 */ 
// const fs = require('fs')
// const path1 = "datax\\info.txt"
// function FileObject() {
//     this.fileName = "";
//     this.file_exists = function (callback) {
//         console.log("about to open:", this.fileName)
//         const holdThis = this;
//         fs.open(this.fileName, 'r', function (err, handle) {
//             if (err) {
//                 console.log("can not open file", holdThis.fileName)
//                 callback(err)        
//                 return;
//             }
//             console.log("the file we process is:", holdThis.fileName)
//             console.log("now we can use file handler:", handle)
//             fs.close(handle, function () { })
//             callback(null, true);
            
//         })
//         console.log("this will no longer exist")
//     }
// }
// const fo = new FileObject()
// fo.fileName = path1;
// fo.file_exists((error, results) => {
//     if (error) {
//         console.log("error in file_exists", JSON.stringify(error))
//         return
//     }
//     console.log("file exists!", results)
// })


/*********** this 問題 */ 
// const fs = require('fs')
// const path1 = "datax\\info.txt"
// function FileObject() {
//     this.fileName = "";
//     this.file_exists = function (callback) {
//         console.log("about to open:", this.fileName)
//         fs.open(this.fileName, 'r', function (err, handle) {
//             if (err) {
//                 console.log("can not open file", this.fileName)
//                 callback(err)        
//                 return;
//             }
//             console.log("the file we process is:", this.fileName)
//             console.log("now we can use file handler:", handle)
//             fs.close(handle, function () { })
//             callback(null, true);
            
//         })
//         console.log("this will no longer exist")
//     }
// }
// const fo = new FileObject()
// fo.fileName = path1;
// fo.file_exists((error, results) => {
//     if (error) {
//         console.log("error in file_exists", JSON.stringify(error))
//         return
//     }
//     console.log("file exists!", results)
// })