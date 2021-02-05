let total = 0 ,pnow ,pspent;

function myFunction1() {
    if(!isNaN(document.getElementById("pnow").value) && document.getElementById("pnow").value>=0)
    document.getElementById("demo1").innerHTML = "Go to next step!"

    else if(document.getElementById("pnow").value<0)
        document.getElementById("demo1").innerHTML = "You must enter a number bigger than 0!"
    else
        document.getElementById("demo1").innerHTML = "You must enter a number!"

}

function myFunction2() {
    if (!isNaN(document.getElementById("pspent").value) && document.getElementById("pspent").value >= 0) {{

         pnow = document.getElementById("pnow").value;
         pspent = document.getElementById("pspent").value;
        total=Number(pnow)+Number(pspent);
    }
        if(document.getElementById("demo2").value){
        }
        else {
            document.getElementById("demo2").innerHTML = "You need "+Math.ceil((4000-total)/235) + " Weeks";
        }


    }
    else if (document.getElementById("pspent").value < 0)
        document.getElementById("demo2").innerHTML = "You must enter a number bigger than 0!"
    else
        document.getElementById("demo2").innerHTML = "You must enter a number!"
}

/*
function myFunction3() {
    var pnow = document.getElementById("pnow").value;
  

    var pspent = document.getElementById("pspent").value;

    total=Number(pnow)+Number(pspent);
    
    if(document.getElementById("total").value){
    }
    else 
    document.getElementById("total").innerHTML = Math.ceil((4000-total)/235) + " Weeks";

}
*/
