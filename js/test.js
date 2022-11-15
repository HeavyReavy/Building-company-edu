// const a = 5
// const b = -4

// function example () {
//   if (a >= 0 && b >= 0) {
//     console.log("Разность чисел равна: " + (a-b)) 
//   } else if (a<0 && b<0) {
//     console.log("Произведение чисел равно: " + (a*b))
//   } else 
//   console.log("Сумма чисел равна: " + (a+b))
// }

// example ()

// // // (a>=0 && b<0)

// let a = Math.round(Math.random()*15) 

// switch (a) {
//   case 0:
//     console.log(a++)
//   case 1:
//     console.log(a++)
//   case 2:
//     console.log(a++)
//   case 3:
//     console.log(a++)
//   case 4:
//     console.log(a++)
//   case 5:
//     console.log(a++)
//   case 6:
//     console.log(a++)
//   case 7:
//     console.log(a++)
//   case 8:
//     console.log(a++)
//   case 9:
//     console.log(a++)
//   case 10:
//     console.log(a++)
//   case 11:
//     console.log(a++)
//   case 12:
//     console.log(a++)
//   case 13:
//     console.log(a++)
//   case 14:
//     console.log(a++)
//   case 15:
//     console.log(a++)
//     break
//   default:
//     console.log('Что-то сломалось');
// }

// let a = 5
// let b = 5

// function sum() {
//   return (a+b)
// }

// function minus() {
//   return (a-b)
// }

// function delenie() {
//   return (a/b)
// }

// function ymnogenie() {
//   return (a*b)
// }

// function mathOperation(arg1, arg2, operation) {
//   switch(operation) {
//     case "+":
//       console.log(arg1 + arg2)
//       break
//     case "-":
//       console.log(arg1 - arg2)
//       break
//     case "/":
//       console.log(arg1 / arg2)
//       break
//     case "*":
//       console.log(arg1 * arg2)
//       break
//     default:
//       console.log("Такого оператора не существует")
//       break
//   }
// }

// mathOperation(10, 5, "*")

function power(val, pow) {
  return (val ** pow)
}

let x = power("2", "3")
console.log(x)