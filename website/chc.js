function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function myValidation(){
var nerror = 0;
if(document.getElementById("name").value=="") {
    document.getElementById("name").style.borderColor="red";
    nerror = 1;
    } else{
      document.getElementById("name").style.borderColor="white";
      }

      if(document.getElementById("address").value=="") {
          document.getElementById("address").style.borderColor="red";
          nerror = 1;
          } else{
            document.getElementById("address").style.borderColor="white";
            }

            if(document.getElementById("email").value=="") {
                document.getElementById("email").style.borderColor="red";
                nerror = 1;
                } else{
                  document.getElementById("email").style.borderColor="white";
                  }

                  if(document.getElementById("hcard").value=="") {
                      document.getElementById("hcard").style.borderColor="red";
                      nerror = 1;
                      } else{
                        document.getElementById("hcard").style.borderColor="white";
                        }
                        if(document.getElementById("card-number").value=="") {
    document.getElementById("card-number").style.borderColor="red";
    nerror = 1;
  } else{
    document.getElementById("card-number").style.borderColor="white"
  }
  if(document.getElementById("card-number-1").value==""){
    document.getElementById("card-number-1").style.borderColor="red";
    nerror = 1;
  }else{
    document.getElementById("card-number-1").style.borderColor="white"
  }
  if(document.getElementById("card-number-2").value==""){
    document.getElementById("card-number-2").style.borderColor="red";
    nerror = 1;
  }else{
    document.getElementById("card-number-2").style.borderColor="white"
  }
  if(document.getElementById("card-number-3").value==""){
    document.getElementById("card-number-3").style.borderColor="red";
    nerror = 1;
  }else{
    document.getElementById("card-number-3").style.borderColor="white"
  }
                        if(document.getElementById("card-expiration-month").value==""){
   document.getElementById("card-expiration-month").style.borderColor="red";
   nerror = 1;
 }else{
   document.getElementById("card-expiration-month").style.borderColor="white"
 }
 if(document.getElementById("card-expiration-year").value==""){
   document.getElementById("card-expiration-year").style.borderColor="red";
   nerror = 1;
 }else{
   document.getElementById("card-expiration-year").style.borderColor="white"
 }
 if(document.getElementById("card-ccv").value==""){
   document.getElementById("card-ccv").style.borderColor="red";
   nerror = 1;
 }
 else{
   document.getElementById("card-ccv").style.borderColor="white"
 }


            var radioButtons = document.getElementsByName("card_type");
            for (var x = 0; x < radioButtons.length; x ++) {
            if (radioButtons[x].checked) {
          var card_tp = radioButtons[x].value;
        }
             }

         if (card_tp!="mc" && card_tp!="visa" && card_tp!="AmEx"){
            nerror=1;
            alert(card_tp)
            document.getElementById("master").style.color="red";
            document.getElementById("vsa").style.color="red";
            document.getElementById("AmEx").style.color="red";
           } else
            {

             document.getElementById("master").style.color="white";
             document.getElementById("vsa").style.color="white";
            document.getElementById("AmEx").style.color="white";
}
if(document.getElementById("tnc1").checked) {
  document.getElementById("tnc2").style.color="white";
}
else{
  document.getElementById("tnc2").style.color="red";
  nerror = 1
}


var tname = document.getElementById("name").value;
var taddress = document.getElementById("address").value;
var temail = document.getElementById("email").value;
var tcard = document.getElementById("card-number").value;
tcard=tcard.replace(/\d(?=\d{4})/g,"X");

      if(nerror==1)
      {
        alert("Please fill up all required fields")
        }else{
              alert("Hi" + tname + " thanks for renting the house " + card_tp + " credit card no. XXXX XXXX XXXX "+ tcard + ". We will email your receipt on "+ temail + " and send the hard copy to "+ taddress + "." );
                  }
}
