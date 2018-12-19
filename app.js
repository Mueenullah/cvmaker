// let n=0;
// while (n<3){
//   console.log(n)
//   n++;
// }


// let i=8;
// while(i>5){
//   console.log(--i)
// }

// let i=8;
// while(i>5){
//   console.log(i--)
// }

// let a=0;
// while(a<15) {
//   console.log(a);
//   a++;
// }
// let b=null;
// while(b<4){
//   console.log(b);
//   b++;
// }
// let b=null;
// while(b<4){
//   console.log(b++);
 
// }
// let c=6;
// while (c<8) {
//   console.log(c++)
  
// }
// let d = 10;
// while (d>0) {
//   console.log(d--)
  
// }
// let d = 10;
// while (d>=0) {
//   console.log(d--)
  
// }

// let d = 0;
// do{
//   alert(d);
//   d++;
// }while(d<4);


// let e = 10;
// do{
//   alert(e);
//   e--;
// }while (e>0);

// let f=5;
// do{
//   alert(f);
//   f++;
// }while (f>10);


// let g=5;
// do{
//   alert(g);
//   --g;
// }while(g>0);

// for ( let h=0; h<5; h++){
//   alert(h);
// }


// for (let j=10; j>0; j--){
//   alert(j);
// }

// for(let k=null; k<5; k++){
//   alert(k);
// }
 
// for(let l=0; l<5;){
//   alert(l);
// }
// let rows=5;
// for(let i=0; i<=rows; i++){
//   for(let j=1; j<=i; j++){
//     document.write("* ");
//   }
//   document.write("<br/>");
// }
alert("wellcome to cv maker")
alert("please enter your details")
let userName= prompt("enter your name","")
if (userName == "") {
  alert("This must be filled");
}
else {
  alert("done");
}
let userDob=prompt("enter your Date of birth")
if (userDob == "") {
  alert("This must be filled");
}
else {
  alert("done");
}
let userCnic= prompt("enter your CNIC number")
if (userCnic == "") {
  alert("This must be filled");
}
else {
  alert("done");
}
let userQual= prompt("enter your Qualfication")
if (userQual == "") {
  alert("This must be filled");
}
else {
  alert("done");
}
document.write("PERSONAL DETAILS")
document.write("<br/>");
document.write("<br/>");
document.write("Name  "+userName);
document.write("<br/>");
document.write("Date of birth  "+userDob);
document.write("<br/>");
document.write("CNIC  "+userCnic);
document.write("<br/>");
document.write("<br/>");
document.write("EDUCATION")
document.write("<br/>");
document.write("<br/>");
document.write("Qualification  "+userQual);