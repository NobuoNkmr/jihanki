
const readline = require('readline');

const gl = require("./getline.js");
const vend = require('./vending.js');

//li.func();

async function main(){
    
    let endflag =0;
    let pattern = 0;
    while(endflag == 0){
        
        
        switch (pattern){
            case 0://自販機リストの表示
                line();
                vend.lis();
                pattern = 1;
                break;

            case 1://入力処理
                var money= await gl.getline('pay money :');
                var name = await gl.getline('choose name:');
                var a =0;
                
                if(money=="manage"){
                    console.log('Welcome manager mode!');
                    pattern = 99;
                    break;
                }   
                var namecheck = vend.testname(name);//商品があるかチェック
                money=Number(money);//string=>numberに型変換

                pattern = 2;
                break;

            case 2://入力ミス確認 & 管理者モード   

                if(money==""){
                    console.log('no money');
                    line();
                    pattern = 1;
                    break;
                }else if(Boolean(money) == false ){
                    console.log("数字を入力してください！");
                    line();
                    pattern = 1;
                }else if(namecheck == false){
                    console.log('選択し直してください');
                    line();
                    vend.lis();
                    pattern = 1;
                    break;
                }else{
                    //console.log("pay money:"+money);
                    //console.log("choose name:"+name);
                    pattern=3;
                    break;
                }  
                break;    

            case 3:
                var ans =vend.moneySele(money,name);
                if(ans == 'Not enough money'){
                    pattern = 1;
                    break;
                }else{
                    //console.log("OK!");
                    var con= await gl.getline('続けますか？(y/n) :');
                    if(con == 'y'){
                        pattern = 0;
                        break;
                    }else if(con == 'n'){
                        endflag = 1;
                        line();
                        break;
                    }else{
                        console.log("y or n で回答してください");
                        break;
                    }
                }


            case 99://managermode
                line();
                vend.zaikokan(0);
            var add= await gl.getline('いくつ在庫を補充しますか？:');
                add = Number(add);
                vend.zaikokan(add);
                pattern = 0;
                break;

        }
    }
    //console.log('--end--');
}
function line(){
    console.log("__________________________________________________________________________________");
}
main();
