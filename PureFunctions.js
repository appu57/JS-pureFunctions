
function sum(a,b){ //function completely dependent on input arguements
    return a+b;
}
console.log(sum(1,2));
console.log(sum(1,2));

//Impure function

var c=0,d=0;
function sums(a,b)
{
    return a+b+c+d; //impure function because the output of the sums function depends on outer var
}
console.log(sums(1,2));

