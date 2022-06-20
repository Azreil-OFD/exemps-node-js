console.log("Hello World!")

console.log(__dirname)
console.log(__filename)

var x = 0

if(x == 0)
    console.log(" x = " +  x)

for (let index = 0; index < 20; index++) {
    console.log( index )
    
}

setTimeout(() => {
    console.log("2 sec")
}, 2000);