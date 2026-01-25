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
// if ((salary > 25000 && hasCar == true) || isBcs == true) {
//   console.log("eso baba kobul");
// }
// if ((salary > 25000 || hasCar == true) && isBcs == true) {
//   console.log("noo");
// }

// -------------------------------------
// problem-2:
// const orderAmount = 1100;
// if(orderAmount>=1000){
//   console.log('Free Delivery');
// }else{
//   console.log('Delivery Charge 80 taka');
// }

// ------Problem-2----------------
const balance = 7000;
const withDraw = 700;
if (withDraw <= balance) {
  if (withDraw % 500 === 0) {
    console.log("WithDraw Successful");
  } else {
    console.log("Enter amount multiple of 500");
  }
} else {
  console.log("Insufficient Balance");
}
