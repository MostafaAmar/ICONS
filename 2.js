let total = 0;

function myFunction1() {
    if(document.getElementById("pnow").value)
    document.getElementById("demo1").innerHTML = "Go to next step!"
}

function myFunction2() {
    if(document.getElementById("pspent").value)
    document.getElementById("demo2").innerHTML = "Done!"
}


function myFunction3() {
    var pnow = document.getElementById("pnow").value;
  

    var pspent = document.getElementById("pspent").value;

    total=Number(pnow)+Number(pspent);
    
    if(document.getElementById("total").value){
    }
    else 
    document.getElementById("total").innerHTML = Math.ceil((4000-total)/235) + " Weeks";

}
