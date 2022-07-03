
function arrToObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            obj[arr[i][j]] = arr[i][j + 1];
             break;




        }

    }
    return obj;
}

// Expected results:

const obj1 = arrToObj([
    ['name', 'Son Dang'],
    ['age', 21],
    ['address', 'Ha Noi']
])
console.log(obj1)
//Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
    ['name', 'Duc Long'],
    ['age', 18],
    ['address', 'Ha Noi']
])
console.log(obj2)

