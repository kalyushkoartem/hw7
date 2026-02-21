const arrey = [1, 2, 3]
arrey[1] = 6
console.log(arrey);

let arrey2 = ["num1", "num2", "num3"]
console.log(arrey2.push("num4"));

const arrey3 = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < arrey3.length; i += 1){
    sum = sum + arrey3[i]
}
console.log(sum);

const arrey4 = [1, 2, 3, 4, 5]
for (let i = 0; i < arrey4.length; i += 1){
    console.log(arrey4[i]);
    
}

const arrey5 = ["num1", "num2", "num3", "num4", "num5"]
for (let i = 0; i < arrey5.length; i += 1){
    if (arrey5[i].length > 5) {
        console.log(arrey5[i]);
        
    }
}

const arrey6 = [3, 7, 9, 12, 15, 19, 20, 22, 26, 30]
let max = arrey6[0]
for (let i = 0; i < arrey6.length; i++){
    if (arrey6[i] > max) {
        max = arrey6[i]
    }
}
console.log(max);

const arrey7 = [3, 7, 9, 12, 15, 19, 20, 22, 26, 30]
for (let i = 0; i < arrey7.length; i++){
    if (arrey7[i] % 2 === 0) {
      console.log(arrey7[i]);
      
    }
}