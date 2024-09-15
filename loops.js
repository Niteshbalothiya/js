              //loop and string

/*for (let count=1; count<=10;count++){
    console.log("Nitesh");
}
   // FOR LOOP
let sum=0;
 for(let i=1 ; i<=10; i++){
    sum= sum+1
 }
console.log("sum=", sum);
            // DO  WHILE LOOP
   let i= 20;
   do {console.log ("nitesh");
   i++ 
    } while ( i<= 10);// at laest one statement print
           // FOR OF LOOP   // THIS LOOP IS USE  ONLY STRING AND ARRAY
let str = "nitesh";
let size =0;
for(let i of str)
{console.log("i=",i);
   size++;
}
console.log("string size", size);*/
       //for In loop
let student ={
   name:"nitesh",
   cgpa: 8.9,
   isPass:true,
};
for( let i in student){
   console.log(i ,"=",student [i]);
   
}