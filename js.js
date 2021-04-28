
function changFunction() {
 document.getElementById("elemnt").innerHTML = "Hello JavaScript!"
}

function dontchangFunction() {
    document.getElementById("elemnt").innerHTML = "I will chng!"
   }
   
function bmiCal(){
    var x= document.getElementById("height").value;
    var y= document.getElementById("weight").value;
    document.getElementById("yourbmi").innerHTML = (x+y);
}

formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
  };
/*
function doThis(){
   alert("getElementById");
   
}*/


