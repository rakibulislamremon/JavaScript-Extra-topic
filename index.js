//Array for each method
var numarray=["11","13","45","76","87","43"];
    numarray.forEach(function(item){
    //console.log(item + "<br>")
})

//Array includes method
var Econ=[5,15,4,8,78,55,34];
    var result= Econ.includes(55);
//console.log(result)


//array Indexof method 
var Econ=[5,15,4,8,78,55,34];
    var result= Econ.indexOf(34);
//console.log(result)


// Array Reverse method
var Econ=[5,15,4,8,78,55,34];
    var result=Econ.reverse();
//console.log(result)

//Array push method
var Econ=[5,15,4,8,78,55,34];
        Econ.push(51,65,78)
//console.log(Econ)

//Array Pop method 
var Econ=[5,15,4,8,78,55,34];
Econ.pop()
Econ.pop()
//console.log(Econ)

//Array slice method
var arr=[5,10,15,20,30,50];
var res=arr.slice(1,3);
//console.log(res)

//Array slice method small to big
var arr=[5,10,15,20,30,50];
var res=arr.sort();
//console.log(res)

//Array slice method big to small
var arr=[5,10,15,20,30,50];
var res=arr.sort().reverse();
//console.log(res)