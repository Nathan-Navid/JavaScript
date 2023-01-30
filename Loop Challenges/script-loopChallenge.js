
/* Odd Number from 1 to 20 */
function oddnumber(){
    for(var i=1; i<=20;i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}
oddnumber()


/* Multiple of 3 from 100 down to 0 */
function MultiplesOf3(){
    for(var i=100; i>=0; i--){
        if(i%3 == 0){
            console.log(i)
        }
    }
}
MultiplesOf3()

/* Special Loop with mines 1.5 */
function Specialprint(){
    for(var i=4; i>=-3.5; i=i-1.5){
        console.log(i)
    }
}
Specialprint()


/* Sum of 1 to 100 */
function sigma(){
    var sum =0;
    for(var i=1;i<=100;i++){
        sum +=i;
    }
    console.log(sum)
}
sigma()

/* Factorial of 1 to 12 */
function Factorial(){
    var sum =1;
    for(var i=1;i<=12;i++){
        sum *=i;
    }
    console.log(sum)
}
Factorial()