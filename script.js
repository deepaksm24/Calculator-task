document.addEventListener("DOMContentLoaded", function(event) {


    let body = document.querySelector('body')

    let initial_value = "";

    let result = document.querySelector('#result');

    let equal = document.querySelector('#equal');
 
    let delete_single_num = document.querySelector('#delete_single_num');


 let add = document.querySelector('#add');
 let subtract = document.getElementById('subtract');
 
 let one = document.getElementById('1');
 let two = document.getElementById('2');
 let three = document.getElementById('3');




let op = ["-","+","*","/"];



    let Normal_btn = document.querySelectorAll('#Normal_btn');

   
Normal_btn.forEach((Normal_btn, index)=>{
    Normal_btn.addEventListener('click', function(){  


        let text = this.value;

        initial_value += text;

        result.value = initial_value;

    });
});


add.addEventListener('click', function(){  



    let text = this.value;

    initial_value += text;

    result.value = initial_value;


});


subtract.addEventListener('click', function(){  



    let text = this.value;

    initial_value += text;

    result.value = initial_value;
    
});
one.addEventListener('click', function(){  

    let text = this.value;

    initial_value += text;

    result.value = initial_value;
    
    
});
two.addEventListener('click', function(){  

    let text = this.value;

    initial_value += text;

    result.value = initial_value;
    
   
});

three.addEventListener('click', function(){  

    let text = this.value;

    initial_value += text;

    result.value = initial_value;
   

});

/*equal to button action*/
equal.addEventListener('click', function(){
    if (result.value != "") {
    result.value = eval(result.value);
    initial_value = eval(result.value);
    }else{
    alert('please enter any Number');
    }
    });

/*clear all number*/
clear.addEventListener('click', function(){
    result.value = "0";
    initial_value = "";
    
    });
let i=1;
/*delete single number*/
delete_single_num.addEventListener('click', function(){

   

    result.value = result.value.substring(0,result.value.length-1);
    initial_value = result.value;

    
    });
    




document.addEventListener('keyup', (event) => {

    let key = event.key;
    let code = event.code;
    let name = event.name;

 if((code.includes("Digit") ||(code.includes("Numpad"))) && !(event.shiftKey))
  {
  
    initial_value += key;
    result.value = initial_value;

  }
  
  else{
    
    alert("Only numbers are allowed");
  }
  });

});
