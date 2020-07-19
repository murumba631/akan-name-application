var dd = parseInt(document.getElementById("day"));
var mm = parseInt(document.getElementById("month"));
var cc = parseInt(document.getElementById("century"));
var yy = parseint(document.getElementById("year"));
var gender = document.getElementById("gender");

function calculate(_dd,mm,cc,yy,gender) { //Create a function to calculate and process the data
    result = ( (_cc/4) -(2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10) % 7));

    if (result<= 0 && gender === male){
        console.log("Kwasi");
    }   else if (result <= 0 && gender === female){
        console.log("Akosua");
    }   else if (result <= 1 && gender === male){
        console.log("Kwadwo");
    }   else if (result <= 1 && gender === female){
        console.log("Adwoa");
    }   else if (result <= 2 && gender === male){
        console.log("Kwabena");
    }   else if (result <= 2 && gender === female){
        console.log("Abenaa"); 
    }   else if (result <= 3 && gender === male){
        console.log("Kwaku");
    }   else if (result <= 3 && gender === female){
        console.log("Akua");
    }   else if (result <= 4 && gender === male){
        console.log("Yaw");
    }   else if (result <= 4 && gender === female){
        console.log("Yaa");
    }   else if (result <= 5 && gender === male){
        console.log("Kofi");
    }   else if (result <= 5 && gender === female){
        console.log("Afua");
    }   else if (result <= 6 && gender === male){
        console.log("Kwame");
    }   else (result <= 6 && gender === female);{
        console.log("Ama");
    }   $("#output").text(console.log);
};

calculate(dd,mm,cc,yy,gender);