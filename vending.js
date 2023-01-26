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

function list(){
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

function zaikoKanri(num){
    if(drinkData[num].zaiko == 0){
        return 0;
    }
    //console.log(drinkData[num].zaiko);
    drinkData[num].zaiko --;
    return 1;
}

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
}

list();

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
})();
