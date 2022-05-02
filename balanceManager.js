let bet_table=[];
let bal=8;
function max_bet(balance){
    let base= balance/25000;
    let max_bet_amount= 0;
    let bet_number=0;
    let i=0;
    while(balance>max_bet_amount){ 
            bet_number++;
            if(i<3){
                bet_table.push(base*(2**i)); //increase bet amount 100% two times (i==1 and i==2)

            }else if(i==3){
                bet_table.push(base*2*2*1.5); //increase bet amount 50% one time
            }else{
                bet_table.push(base*2*2*1.5*(1.4)**(i-3)); //increase bet amount 40% many times while the balance is sufficient
            }
            max_bet_amount= bet_table.reduce((a,b)=> a+b); i++;
           
    }
    console.log("Total : "+(max_bet_amount-bet_table[bet_number-1]).toFixed(8));// sum of bet amounts
    return bet_number;
}

console.log("you have "+max_bet(bal)+ " bets according your balance!");

