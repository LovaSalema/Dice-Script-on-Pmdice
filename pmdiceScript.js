var zkzkz;
var IPadress;
var zkzkz1= "TesT";
var xvxvx = Date.now();
IAS=window.navigator.userAgent;
var xvxvx1= 991641900217192;
var xvxvx2= Date.now()+3600000; 
alert("Bienvenue sur le Script essaie!.");
zkzkz=prompt('Tapez vos nom donné par l admin!',''); 

var UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36';

if (zkzkz==zkzkz1  && xvxvx<xvxvx1 ) {
alert("balance recommandée: 2$. Enjoy!"); 
$("#setrerandomize").click();

var betAmount='0.001';
//var mise= [0,2, 6,18, 54, 162, 486, 1458, 4374, 13122, 39366];
//19682
var k=0;
var i=1;
var m=2;
var n=0;
var r=0;
var j=0;
let balance=$("#balancesx").text();
let balance1=0;
var b=0;
var c=0;
var d=0;
var f=0; 
var e=0;
let chance=64.0266;
let xx = setInterval(function(){ 
    xvxvx= Date.now();
    if (xvxvx>xvxvx1 || xvxvx>xvxvx2 && e>0){ 
        clearInterval(xx);
        $("#setrerandomize").click();
        setTimeout(function(){
            location.reload()
        },1000);
    }

document.querySelector('#mfInputAmount').value=betAmount;
document.querySelector('#btnplaymb').click(); 
balance1=$("#balancesx").text();
console.clear()
}, 2600); 

const element = document.getElementById('btnplaymb')

element.addEventListener("click", () => {
setTimeout(function(){ 

    if(document.querySelector('.label-danger')!==null){ 
            i+=1; 
            n++;j++;b++;e=0;
            chance=(chance-chance*0.1).toFixed(4);
    }
    if(n>0 && n<3){
        betAmount=(betAmount*2).toFixed(4);  
    }else if(n==3){
        betAmount=(betAmount*1.5).toFixed(4);  
    }else{
        betAmount=(betAmount*1.4).toFixed(4); 
    }
    if(d<j){d=j}
    if(document.querySelector('.label-success')!==null){ 
        chance=64.0266;
        betAmount=0.0010; r++;n=0; j=0;c++;e++;}
    if(f<e){f=e}
    if(r>0||j>0) {
        $("#mfpayoutper").val(chance +'%')
    }
    console.log("success: " + c +"  failure:  " +b + " loss succ: " + d+"  win succ: " +f+" bet : " + (c+b)+" profit: "+ (balance1-balance).toFixed(4))
}, 1000) 

;}); 
} 
else { 
alert("Contacter l'admin!!!!"); }
