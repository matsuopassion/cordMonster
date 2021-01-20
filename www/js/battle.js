function Battle(phase,myMonster,enemy,master){
  // 出題・回答・判定の内の、どのフェーズか
         /*
         * 自キャラ・・・"m"
         * 敵キャラ・・・"e"
         * システム・・・"s"
         */
  let message;
  let commandResults;
  let abilityName;
  let abilityMessage;
  let damage = 0;
  let count = 1;
  switch (phase){
    case 'm':
      commandResults = abilitySelect(phase,myMonster,enemy);
      myMonster.param = commandResults.myMonsterParam;
      enemy.param = commandResults.enemyParam;
      console.log(JSON.stringify(myMonster.param));
      console.log(JSON.stringify(enemy.param));
      this.message = getMessage(phase,myMonster,enemy,commandResults);
      console.log(`${myMonster.monsterName}の体力：${myMonster.param.life}`);
      console.log(`${enemy.monsterName}の体力：${enemy.param.life}`);
      break;
    case 'e':
      commandResults = abilitySelect(phase,myMonster,enemy);
      myMonster.param = commandResults.myMonsterParam;
      enemy.param = commandResults.enemyParam;
      this.message = getMessage(phase,myMonster,enemy,commandResults);
      console.log(`${myMonster.monsterName}の体力：${myMonster.param.life}`);
      console.log(`${enemy.monsterName}の体力：${enemy.param.life}`);
      break;
    case 's':
      if(myMonster.param.life <= 0){
        this.message = `${myMonster.monsterName}は倒れた！`;
        //console.log(this.message);
      }else if(enemy.param.life <= 0){
        this.message = `${enemy.monsterName}は倒れた！`;
        //console.log(this.message);
      }else{
        this.message = `${enemy.monsterName}が飛び出してきた！`;
        console.log(`${myMonster.monsterName}の体力：${myMonster.param.life}`);
        console.log(`${enemy.monsterName}の体力：${enemy.param.life}`);
        console.log(this.message);
      }
      break;
    default:
      console.log('エラー：変数 phase に正しい値が設定されてません');
      console.log(`phase : ${phase} `);
  }
  return this.message;
}

function abilitySelect(phase,myMonster,enemy){
  let abilityId = "abt0";
  let attackerLv;
  let attackerLife;
  let attackerPower;
  let attackerShield;
  let attackerSpeed;
  let targetLife;
  let targetPower;
  let targetShield;
  let targetSpeed;
  let mParam = myMonster.param;
  let eParam = enemy.param;
  let abilityName = "様子を見る";
  let abilityPower = 0;
  let abilityMessage = "様子を見ている";
  let damage = 0;
  let abilityType = 0;
  // 0:相手に攻撃 1:相手に攻撃かつ状態異常 2:相手に状態異常 3:自身を回復 4:相手に攻撃かつ自身に回復 5:相手を回復
  if(phase === "m"){
    abilityId = myMonster.ability;
    abilityId = abilityId[Math.floor(Math.random() * abilityId.length)].toString();
    //攻撃者の設定
    attackerLv = myMonster.Lv;
    attackerLife = mParam.life;
    attackerPower = mParam.power;
    attackerShield = mParam.shield;
    attackerSpeed = mParam.speed;
    //受け手の設定
    targetLv = enemy.Lv;
    targetLife = eParam.life;
    targetPower = eParam.power;
    targetShield = eParam.shield;
    targetSpeed = eParam.speed;
  }else{
    abilityId = enemy.ability;
    abilityId = abilityId[Math.floor(Math.random() * abilityId.length)].toString();
    //攻撃者の設定
    attackerLv = enemy.Lv;
    attackerLife = eParam.life;
    attackerPower = eParam.power;
    attackerShield = eParam.shield;
    attackerSpeed = eParam.speed;
    //受け手の設定
    targetLv = myMonster.Lv;
    targetLife = mParam.life;
    targetPower = mParam.power;
    targetShield = mParam.shield;
    targetSpeed = mParam.speed;
  }
  switch (abilityId){
    case 'abt1':
      abilityType = 0;
      abilityPower = 30;
      abilityName = "通常攻撃";
      abilityMessage = "は攻撃をしかけた！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt2':
      break;
    case 'abt3':
      break;
    case 'abt4':
      abilityType = 0;
      abilityPower = 60;
      abilityName = "強打";
      abilityMessage = "は強打を放った！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt5':
      abilityType = 0;
      abilityPower = 75;
      abilityName = "のしかかり";
      abilityMessage = "は大きく飛び上がって相手にのしかかった！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt6':
      abilityType = 0;
      abilityPower = 85;
      abilityName = "ぶちかまし";
      abilityMessage = "のぶちかまし！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt7':
      abilityType = 1;
      abilityPower = 25;
      abilityName = "毒攻撃";
      abilityMessage = "は毒攻撃をしかけた！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt8':
      abilityPower = 45;
      abilityType = 1;
      abilityName = "溶解液";
      abilityMessage = "は溶解液を放った！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt9':
      abilityType = 3;
      abilityPower = 40;
      abilityName = "ヒール";
      abilityMessage = "のヒール！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      attackerLife = attackerLife + damage;
      break;
    case 'abt10':
      abilityType = 1;
      abilityPower = 40;
      abilityName = "フラッシュ";
      abilityMessage = "はフラッシュを放った！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt11':
      abilityType = 0;
      abilityPower = getRandomInt(30,250);
      abilityName = "おまじない";
      abilityMessage = "のおまじない！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt12':
      abilityType = 0;
      abilityPower = 65;
      abilityName = "パイロキネシス";
      abilityMessage = "はパイロキネシスを放った！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt13':
      abilityType = 0;
      abilityPower = 75;
      abilityName = "火炎放射";
      abilityMessage = "は火炎放射を放った！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt14':
      abilityType = 0;
      abilityPower = 80;
      abilityName = "パイルバンカー";
      abilityMessage = "はパイルバンカーで相手を激しく打ち付けた！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt15':
      abilityType = 0;
      abilityPower = 85;
      abilityName = "ラリアット";
      abilityMessage = "のラリアット！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt16':
      abilityType = 0;
      abilityPower = 95;
      abilityName = "テラブレイク";
      abilityMessage = "のテラブレイク！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt17':
      abilityType = 0;
      abilityPower = 45;
      abilityName = "噛みつき";
      abilityMessage = "は噛みついた！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt18':
      abilityType = 0;
      abilityPower = getChooseRandom([0,0,0,650]);
      abilityName = "マサカリ";
      abilityMessage = "はマサカリを大きく振りかぶった！！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt19':
      abilityType = 0;
      abilityPower = 50;
      count = getRandomInt(1, 6);
      abilityName = "クナイ";
      abilityMessage = `のクナイ投げ！！${count}回当たった！！`
      
      damage = count * (Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255));
      targetLife = targetLife - damage * 2;
      break;
    case 'abt20':
      abilityType = 0;
      abilityPower = 50;
      count = getRandomInt(1, 3);
      abilityName = "回転切り";
      abilityMessage = `の回転切り！！${count}回転！！`
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt21':
      abilityType = 0;
      abilityPower = 100;
      count = getRandomInt(2, 5);
      abilityName = "大回転切り";
      abilityMessage = `の大回転切り！！${count}回転！！`
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt22':
      abilityType = 0;
      abilityPower = 35;
      count = getRandomInt(3, 6);
      abilityName = "連続突き";
      abilityMessage = `の連続突き！！${count}回当たった！！`
      damage = count * (Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255));
      targetLife = targetLife - damage * 2;
      break;
    case 'abt23':
      abilityType = 0;
      abilityPower = 200;
      abilityName = "無限";
      abilityMessage = "の無限！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt24':
      abilityType = 0;
      abilityPower = 300;
      abilityName = "狂気";
      abilityMessage = "の狂気！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt25':
      abilityType = 0;
      abilityPower = 95;
      abilityName = "歩む死";
      abilityMessage = "の歩む死！！"
      damage =  Math.floor(targetLife / 2);
      targetLife = Math.floor(targetLife / 2);
      break;
    case 'abt26':
      abilityType = 0;
      abilityPower = 95;
      abilityName = "テラブレイク";
      abilityMessage = "のテラブレイク！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    default:
      console.log('エラー：渡されたability idが不正です。');
  }
  //自分のターンの場合
  if(phase === "m"){
    abilityId = myMonster.ability;
    abilityId = abilityId[Math.floor(Math.random() * abilityId.length)].toString();
    //攻撃者の設定
    myMonster.Lv = attackerLv;
    mParam.life = attackerLife;
    mParam.power = attackerPower;
    mParam.shield = attackerShield;
    mParam.speed = attackerSpeed;
    //受け手の設定
    eParam.life = targetLife;
    eParam.power = targetPower;
    eParam.shield = targetShield;
    eParam.speed = targetSpeed;
  }else{
    //敵のターンの場合
    //攻撃者の設定
    myMonster.Lv = targetLv;
    mParam.life = targetLife;
    mParam.power = targetPower;
    mParam.shield = targetShield;
    mParam.speed = targetSpeed;
    //受け手の設定
    eParam.life = attackerLife;
    eParam.power = attackerPower;
    eParam.shield = attackerShield;
    eParam.speed = attackerSpeed;
  }
  return {abilityName:abilityName, abilityMessage:abilityMessage, damage:damage, myMonsterParam:mParam, enemyParam:eParam, abilityType:abilityType};
};

function getMessage(phase,myMonster,enemy,commandResults){
  let message = "エラー：変数'message'の値が不正です";
  switch (phase){
    case 'm':
      switch(commandResults.abilityType){
        case 0:
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 1:
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 2:
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 3:
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}は${commandResults.damage}回復した！`;
          break;
        case 4:
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 5:
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 6:
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        default:
          this.message = `エラー：変数 abilityTypeの値が不正です`;
      }
      break;
    case 'e':
      switch(commandResults.abilityType){
        case 0:
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 1:
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 2:
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 3:
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}は${commandResults.damage}回復した！`;
          break;
        case 4:
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 5:
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 6:
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        default:
          this.message = `エラー：変数'abilityType'の値が不正です`;
      }
      break;
    default:
      this.message = `エラー：引数として渡された変数'phase'の値が不正です`;
  }
  return this.message;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

function getChooseRandom(arrayData) {
    var arrayIndex = Math.floor(Math.random() * arrayData.length);
    return arrayData[arrayIndex];
}