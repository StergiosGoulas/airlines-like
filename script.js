function validateForm(){
    var x = document.forms["myForm"]["from"].value;
    var y = document.forms["myForm"]["to"].value;
    var z = document.forms["myForm"]["departure"].value;
    var w = document.forms["myForm"]["return"].value;

    if(x == ""){
        alert("Complete all the fields please!!");
        return false;
    }

    if(y == ""){
        alert("Complete all the fields please!!");
        return false;
    }
    
    if(z == ""){
        alert("Complete all the fields please!!");
        return false;
    }

    if(w == ""){
        alert("Complete all the fields please!!");
        return false;
    }
}