const salary = 21000;
const isBcs = true;
const height = 61;
const hasCar = false;

// if (salary > 20000 && height > 66) {
//   console.log("su------patro");
// } else {
//   console.log("onno patro khuji");
// }

// ----------------------------------
// if(salary>25000 || height>72 ){
//     console.log('eso baba kobul');
// }else{
//     console.log('vaag tui mokbul');
// }

// --------------------------------------
// more and more conditions

// if (salary > 25000 || height > 72 || isBcs == true) {
//   console.log("eso baba kobul");
// } else {
//   console.log("vaag tui mokbul");
// }

// -------------------------

// if (salary > 25000 && height > 72 && isBcs == true) {
//   console.log("eso baba kobul");
// } else {
//   console.log("vaag tui mokbul");
// }

// ----------complex conditions-------------
if ((salary > 25000 && hasCar == true) || isBcs == true) {
  console.log("eso baba kobul");
}
if ((salary > 25000 || hasCar == true) && isBcs == true) {
  console.log("noo");
}
