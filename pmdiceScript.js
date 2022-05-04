let password;
let password1= "TesT";
let date = Date.now();
IAS=window.navigator.userAgent; //take the userAgent to protect the script
let date1= 991641900217192;//set time limit
let date2= Date.now()+3600000; // every 1hour of running the bet will stop
alert("Bienvenue sur le Script essaie!.");//greeting
password=prompt('Tapez vos nom donné par l admin!',''); 

let UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36';
//in this case we don't verify the UserAgent because the script is not encrypted yet
if (password==password1  && date<date1 ) {
alert("balance recommandée: 2$. Enjoy!"); 
$("#setrerandomize").click();

let betAmount='0.001';

//let mise= [0,2, 6,18, 54, 162, 486, 1458, 4374, 13122, 39366]; mytraditionnal method to set bet amount
//19682 

let loss=0;
let loss_temp=0;
let balance=$("#balancesx").text();
let balance1=0;
let failure=0;
let success=0;
let loss_succ=0;
let win_succ=0; 
let win_temp=0;
let chance=64.0266;
let xx = setInterval(function(){ 
    //Click Roll Dice and verify if the script is outdate every 3s.
    date= Date.now();
    if (date>date1 || date>date2 && win_temp>0){ 
        // if the date is out or 1hour is passed then stop the bet 
        //and rerandomize the seeds(random number generator)
        clearInterval(xx);
        $("#setrerandomize").click();
        setTimeout(function(){
            location.reload()
        },1000);
    }

document.querySelector('#mfInputAmount').value=betAmount;
document.querySelector('#btnplaymb').click(); //click roll dice every 3s. 
balance1=$("#balancesx").text(); //check balance every 3s.
console.clear()
}, 3000); 

const element = document.getElementById('btnplaymb')

element.addEventListener("click", () => {//if roll dice is clicked then make all following instructions.
setTimeout(function(){ 

    if(document.querySelector('.label-danger')!==null){ //in case we have failure
            loss++;
            loss_temp++;
            failure++;
            win_temp=0;
    }
    if(loss_temp<10){
        chance=(chance-chance*0.1).toFixed(4);//decrease chance 10%
    }
    if(loss>0 && loss<3){
        betAmount=(betAmount*2).toFixed(4);   //increase bet amount 100% to the two first failure
    }else if(loss==3){
        betAmount=(betAmount*1.5).toFixed(4);  // increase bet amount 50% in 3rd failure
    }else{
        betAmount=(betAmount*1.4).toFixed(4); // increase bet amount 40% till we have success
    }
    if(loss_succ<loss_temp){loss_succ=loss_temp}//count maximum loss successive
    if(document.querySelector('.label-success')!==null){ // in case of e have success
        chance=64.0266;// reset chance
        betAmount=0.0010;//reset bet amount
        loss=0;
         loss_temp=0;
         success++;
         win_temp++;}
    if(win_succ<win_temp){win_succ=win_temp}// count maximum success successive
    if(win_temp>0||loss_temp>0) {//set chance every bets
        $("#mfpayoutper").val(chance +'%')
    }
    console.log("success: " + success +"  failure:  " +failure + " loss succ: " + loss_succ+"  win succ: " +win_succ+" bet : " + (success+failure)+" profit: "+ (balance1-balance).toFixed(4))
}, 1000) // print some statistics

;}); 
} 
else { // in case of wrong password or script outdated, we print alert
alert("Contacter l'admin!!!!"); }

//We try to make a chart to show the statistics
<script> src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"</script>
$(document).ready(function(){
    $("#balancesx").after('<div id="b0_d" style="display:none;position:fixed;left:10px;top:50px;width:140px;border:solid 1px #000;background-color:#fff;padding:5px;text-align:center;z-index:9999"></div>');
})