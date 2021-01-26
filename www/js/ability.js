/**
 * @param {string} phase - "m","e","s"のいずれか。
 * @param {object} myMonster - 自分のモンスターの情報。
 * @param {object} enemy - 相手のモンスターの情報。
 */
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
  let conditionName = "通常"
  let mCondition = myMonster.condition;
  let eCondition = enemy.condition;
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
    case 'attack_1':
      abilityType = 0;
      abilityPower = 30;
      abilityName = "通常攻撃";
      abilityMessage = "は攻撃をしかけた！";
      abilitySoundEffectPlaying("dageki",3);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt2':
      break;
    case 'abt3':
      break;
    case 'heavyAttack':
      abilityType = 0;
      abilityPower = 60;
      abilityName = "強打";
      abilityMessage = "は強打を放った！！"
      abilitySoundEffectPlaying("dageki",2);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'bodyslam':
      abilityType = 0;
      abilityPower = 75;
      abilityName = "のしかかり";
      abilityMessage = "は大きく飛び上がって相手にのしかかった！！"
      abilitySoundEffectPlaying("dageki",2);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'buchikamashi':
      abilityType = 0;
      abilityPower = 85;
      abilityName = "ぶちかまし";
      abilityMessage = "のぶちかまし！！"
      abilitySoundEffectPlaying("dageki",2);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt7':
      abilityType = 1;
      abilityPower = 25;
      conditionType = "Poison"
      abilityName = "毒攻撃";
      abilityMessage = "は毒攻撃をしかけた！！"
      abilitySoundEffectPlaying("dageki",5);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      conditionName = "毒";
      if(phase === "m"){
        eCondition = "poison";
      }else{
        mCondition = "poison";
      }
      break;
    case 'abt8':
      abilityPower = 65;
      abilityType = 1;
      conditionType = "hgihPoison"
      abilityName = "溶解液";
      abilityMessage = "は溶解液を放った！！"
      abilitySoundEffectPlaying("slime",2);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      conditionName = "猛毒";
      if(phase === "m"){
        eCondition = "highPoison";
      }else{
        mCondition = "highPoison";
      }
      break;
    case 'abt9':
      abilityType = 3;
      abilityPower = 40;
      abilityName = "ヒール";
      abilityMessage = "のヒール！"
      abilitySoundEffectPlaying("magic",2);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      attackerLife = attackerLife + damage;
      break;
    case 'abt10':
      abilityType = 1;
      conditionType = "poison"
      abilityPower = 40;
      abilityName = "フラッシュ";
      abilityMessage = "はフラッシュを放った！！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      conditionName = "毒";
      if(phase === "m"){
        eCondition = "poison";
      }else{
        mCondition = "poison";
      }
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
      abilitySoundEffectPlaying("magic",1);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt13':
      abilityType = 0;
      abilityPower = 75;
      abilityName = "火炎放射";
      abilityMessage = "は火炎放射を放った！！"
      abilitySoundEffectPlaying("magic",1);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt14':
      abilityType = 0;
      abilityPower = 80;
      abilityName = "パイルバンカー";
      abilityMessage = "はパイルバンカーで相手を激しく打ち付けた！！"
      abilitySoundEffectPlaying("gunfire",4);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt15':
      abilityType = 0;
      abilityPower = 85;
      abilityName = "ラリアット";
      abilityMessage = "のラリアット！！"
      abilitySoundEffectPlaying("dageki",2);
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
      abilitySoundEffectPlaying("swing",2);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt19':
      abilityType = 0;
      abilityPower = 50;
      count = getRandomInt(1, 6);
      abilityName = "クナイ";
      abilityMessage = `のクナイ投げ！！${count}回当たった！！`
      loopSoundEffectPlaying("swing",1,count);
      damage = count * (Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255));
      targetLife = targetLife - damage * 2;
      break;
    case 'abt20':
      abilityType = 0;
      abilityPower = 50;
      count = getRandomInt(1, 3);
      abilityName = "回転切り";
      abilityMessage = `の回転切り！！${count}回転！！`
      loopSoundEffectPlaying("dageki",1,count);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt21':
      abilityType = 0;
      abilityPower = 100;
      count = getRandomInt(2, 5);
      abilityName = "大回転切り";
      abilityMessage = `の大回転切り！！${count}回転！！`
      loopSoundEffectPlaying("dageki",2,count);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt22':
      abilityType = 0;
      abilityPower = 35;
      count = getRandomInt(3, 6);
      abilityName = "連続突き";
      abilityMessage = `の連続突き！！${count}回当たった！！`
      loopSoundEffectPlaying("dageki",1,count);
      damage = count * (Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255));
      targetLife = targetLife - damage * 2;
      break;
    case 'abt23':
      abilityType = 0;
      abilityPower = 200;
      abilityName = "無限";
      abilityMessage = "の無限！！"
      abilitySoundEffectPlaying("magic",3);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt24':
      abilityType = 0;
      abilityPower = 300;
      abilityName = "狂気";
      abilityMessage = "の狂気！！"
      abilitySoundEffectPlaying("magic",3);
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * abilityPower * attackerPower / (targetShield * 0.6) )/50+2))) / 255);
      targetLife = targetLife - damage * 2;
      break;
    case 'abt25':
      abilityType = 0;
      abilityPower = 95;
      abilityName = "歩む死";
      abilityMessage = "の歩む死！！"
      abilitySoundEffectPlaying("magic",3);
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
  return {abilityName:abilityName, abilityMessage:abilityMessage, damage:damage, myMonsterParam:mParam, enemyParam:eParam, abilityType:abilityType , conditionName:conditionName,mCondition:mCondition,eCondition:eCondition};
};

function abilitySoundEffectPlaying(seType,seNumber){
      SoundManager.setVolume(70);
      SoundManager.play(seType + "_" + seNumber);
      SoundManager.setVolume(0.8);
};

function loopSoundEffectPlaying(seType,seNumber,count){
  for (let i=0; i<1; i++) {
    SoundManager.setVolume(1);
    SoundManager.play(seType + "_" + seNumber);
    SoundManager.setVolume(0.8);
  }
}