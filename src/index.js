// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var money=currency;
    var anser={};
    if(currency<10000){
        if(money-50>=0)anser.H=0;
        for(var i=0;money-50>=0;i++){
            anser.H++;
            money-=50;
            }
        if(money-25>=0)anser.Q=0;
        for(i=0;money-25>=0;i++){
            anser.Q++;
            money-=25;
            }
        if(money-10>=0)anser.D=0;
        for(i=0;money-10>=0;i++){
            anser.D++;
            money-=10;
            }
        if(money-5>=0)anser.N=0;
        for(i=0;money-5>=0;i++){
            anser.N++;
            money-=5;
            }
        if(money-1>=0)anser.P=0;
        for(i=0;money-1>=0;i++){
            anser.P++;
            money-=1;
            }
            return anser;
    }else return {error: "You are rich, my friend! We don't have so much coins for exchange"};
};
