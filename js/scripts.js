function getName(){

    var result = getDay(document.getElementById("bday").value);
    var x=document.getElementById("male").checked;
     var y=document.getElementById("female").checked;
        
        if (result == 0 && x === true){
            console.log("Kwasi");
        }   else if (result == 0 && y === true){
            console.log("Akosua");
        }   else if (result == 1 && x === true){
            console.log("Kwadwo");
        }   else if (result == 1 && y === true){
            console.log("Adwoa");
        }   else if (result == 2 && x === true){
            console.log("Kwabena");
        }   else if (result == 2 && y === true){
            console.log("Abenaa"); 
        }   else if (result == 3 && x === true){
            console.log("Kwaku");
        }   else if (result == 3 && y === true){
            console.log("Akua");
        }   else if (result == 4 && x === true){
            console.log("Yaw");
        }   else if (result == 4 && y === true){
            console.log("Yaa");
        }   else if (result == 5 && x === true){
            console.log("Kofi");
        }   else if (result == 5 && y === true){
            console.log("Afua");
        }   else if (result == 6 && x === male){
            console.log("Kwame");
        }   else (result == 6 && y === true);{
            console.log("Ama");
        }   $("#output").text(console.log);
    };
    
    