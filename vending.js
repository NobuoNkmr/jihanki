var drinkData=[
    {
        name:"tea",
        price:150,
        zaiko:5,
    },
    {
        name:"coffee",
        price:120,
        zaiko:5,
    },
    {
        name:"water",
        price:100,
        zaiko:5,
    }
]
exports.lis = function() {
    console.log("こんにちは！今は下記の飲み物があります！");
    for (var item of Object.keys(drinkData)){
        if (drinkData[item].zaiko == 0){
            console.log(drinkData[item].name+":売り切れです"); 
        }else{
        console.log(drinkData[item].name+":"+drinkData[item].price+"円");
        }
    }
    console.log("お金を入れて、商品を選択してください！");
}
exports.moneySele=function(money,name){
    
    let oturi = 0;
    //console.log("現在の金額"+money+"円");

    oturi = money - selectPrice(name);
    //var checkcoin = coin(oturi);
    if (oturi<0) {
        console.log("お金が足りません");
        return 'Not enough money'
    }else if(oturi == money){
        console.log("在庫がありません！");
    }
    else{
        console.log("（ｶﾞﾀﾝｯ）おつりは"+oturi+"円です！ありがとうございました！")
        console.log("お釣り内訳");
        coin(oturi);
    }
}
//moneySeleで使われている商品のチェック
function selectPrice(name){
    let price = 0;
    let err = "err";
    for (var item of Object.keys(drinkData)){
        if(name == drinkData[item].name){
            //zaikoKanriで在庫の確認
            //在庫が0ならERROR価格を0で返している
            //そうでなければ、在庫-1している
            if(zaikoKanri(item) == 0) {
                price = 0;
                break;
            }
            //console.log(drinkData[item].name);
            price = drinkData[item].price;
        }
    }
    if (price == 0 ){
        return 0;
    }else{
        return price;
    }
}
function zaikoKanri(num){
    if(drinkData[num].zaiko == 0){
        return 0;
    }
    //console.log(drinkData[num].zaiko);
    drinkData[num].zaiko --;
    return 1;
}
function coin (oturi){
    var sen,gohyaku,hyaku,gozyu,zyu,go,ichi;
    var coin =[];
    var a=oturi;
    coin.push(Math.floor(oturi/1000));
    oturi -=coin[0]*1000;
    coin.push(Math.floor(oturi/500));
    oturi -=coin[1]*500;
    coin.push(Math.floor(oturi/100));
    oturi -=coin[2]*100;
    coin.push(Math.floor(oturi/50));
    oturi -=coin[3]*50;
    coin.push(Math.floor(oturi/10));
    oturi -=coin[4]*10;
    coin.push(Math.floor(oturi/5));
    oturi -=coin[5]*5;
    coin.push(Math.floor(oturi/1));
    console.log("1000円:"+coin[0]+"枚 500円:"+coin[1]+"枚 100円:"+coin[2]+"枚 50円:"+coin[3]+"枚 10円:"+coin[4]+"枚 5円:"+coin[5]+"枚 1円:"+coin[6]+"枚");

}

 //manager modeで在庫を表示したり、追加したり
exports.zaikokan = function(additem){
    
    for (var item of Object.keys(drinkData)){
        drinkData[item].zaiko += additem;
        console.log(`${drinkData[item].name}:${drinkData[item].zaiko}`);
         }
    
}

 //商品があるかチェック
exports.testname = function(D_name) {
   
    for (var item of Object.keys(drinkData)){
        if (drinkData[item].name == D_name){
            //console.log(D_name+"はあります"); 
            return true;
        }
    }
    if(D_name == ''){
        console.log("商品が入力されていません");
        return false;
    }
    console.log(D_name+"という商品はありません");
    return false;
};




/*
function moneySelect(money,name){
    
    let oturi = 0;
    console.log("現在の金額"+money+"円");

    oturi = money - selectPrice(name);

    if (oturi<0) {
        console.log("お金が足りません");
    }else if(oturi == money){
        console.log("在庫がありません！");
    }
    else{
        console.log("（ｶﾞﾀﾝｯ）おつりは"+oturi+"円です！ありがとうございました！")
    }
    for (var item of Object.keys(drinkData)){
       console.log(`${drinkData[item].name}:${drinkData[item].zaiko}`);
        }
}*/
//console.table(drinkData);

//list();
/*
const rl=require("readline").createInterface(process.stdin,process.stdout);
(async function(){
    const gets=()=>new Promise(res=>rl.once("line",res))
    console.log("pay money");
    var okane=await gets();
    console.log("You pay:"+okane);
    console.log("choose item")
    var product=await gets();
    console.log("You choose:"+product);
    moneySelect(okane,product);
    console.log("end");
    process.exit();
})();*/
