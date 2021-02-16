/**
 * @param {string} phase - "m","e","s"のいずれか。
 * @param {object} myMonster - 自分のモンスターの情報。
 * @param {object} enemy - 相手のモンスターの情報。
 */
function abilitySelect(phase,myMonster,enemy,ability){
  let attackerLv;
  let attackerLife;
  let attackerPower;
  let attackerShield;
  let attackerSpeed;
  let attackerCondition
  let targetLife;
  let targetPower;
  let targetShield;
  let targetSpeed;
  let targetCondition;
  let attacker;
  let target;
  let conditionName = "通常";
  let conditionType = "normal";
  let mCondition = myMonster.condition;
  let eCondition = enemy.condition;
  let mParam = myMonster.param;
  let eParam = enemy.param;
  let apCost = 0;
  let damage = 0;
  let healpoint = 0;
  let ability_result;
  let abilityId;
  let abilityType;
  let count = 1;
  let abilityPower;
  let abilityName;
  let abilityMessage;
  let abilitySound;
  let damageCalcflag;
  let random;
  // 0:相手に攻撃 1:相手に攻撃かつ状態異常 2:相手に状態異常 3:自身を回復 4:相手に攻撃かつ自身に回復 5:相手を回復
  if(phase === "m"){
    //攻撃者の設定
    attackerCondition = mCondition;
    attackerLv = myMonster.Lv;
    attackerMaxLife = mParam.maxlife;
    attackerLife = mParam.life;
    attackerPower = mParam.power;
    attackerShield = mParam.shield;
    attackerSpeed = mParam.speed;
    attackerAp = mParam.AP;
    attacker = {
      attackerLv : attackerLv,
      attackerMaxLife : attackerMaxLife,
      attackerLife : attackerLife,
      attackerPower : attackerPower,
      attackerShield : attackerShield,
      attackerSpeed : attackerSpeed,
      attackerAp : attackerAp
    };
    //受け手の設定
    targetCondition = eCondition;
    targetLv = enemy.Lv;
    targetMaxLife = eParam.maxlife;
    targetLife = eParam.life;
    targetPower = eParam.power;
    targetShield = eParam.shield;
    targetSpeed = eParam.speed;
    targetAp = eParam.ap;
    target= {
      targetLv : targetLv,
      targetMaxLife : targetMaxLife,
      targetLife : targetLife,
      targetPower : targetPower,
      targetShield : targetShield,
      targetSpeed : targetSpeed,
      targetAp : targetAp
    };
  }else{
    //攻撃者の設定
    attackerCondition = eCondition;
    attackerLv = enemy.Lv;
    attackerMaxLife = eParam.maxlife;
    attackerLife = eParam.life;
    attackerPower = eParam.power;
    attackerShield = eParam.shield;
    attackerSpeed = eParam.speed;
    attackerAp = eParam.AP;
    attacker= {
      attackerLv : attackerLv,
      attackerLife : attackerLife,
      attackerPower : attackerPower,
      attackerShield : attackerShield,
      attackerSpeed : attackerSpeed,
      attackerAp : attackerAp
    };
    //受け手の設定
    targetCondition = mCondition;
    targetLv = myMonster.Lv;
    targetMaxLife = mParam.maxlife;
    targetLife = mParam.life;
    targetPower = mParam.power;
    targetShield = mParam.shield;
    targetSpeed = mParam.speed;
    targetAp = mParam.AP;
    target= {
      targetLv : targetLv,
      targetLife : targetLife,
      targetPower : targetPower,
      targetShield : targetShield,
      targetSpeed : targetSpeed,
      targetAp : targetAp
    };
  }
  console.log(ability);
  ability_result = ABILITY_MAP.get(ability);
  console.log(JSON.stringify(ability_result));
  console.log(ability_result);
  abilityId = ability_result.abilityID;
  abilityType = ability_result.abilityType;
  conditionType = ability_result.conditionType;
  apCost = ability_result.AP;
  abilityPower = ability_result.abilityPower;
  abilityName = ability_result.abilityName;
  abilitySound = ability_result.abilitySound;
  abilityMessage = ability_result.abilityMessage;
  damageCalcflag = ability_result.damageCalcflag;
  if("abilitySound" in ability_result){
      abilitySoundEffectPlaying(abilitySound[0],abilitySound[1]);
    }
  if(damageCalcflag === true){
    if("randumFlug" in ability_result){
      count = ability_result.countRandum;
      console.log(count);
      count = getCountRandom(count[0],count[1]);
      console.log(count);
      abilityMessage = abilityMessage + "\n" + count + "回当たった！";
      abilityPower = abilityPower * count;
    }
    if("chooseFlug" in ability_result){
      abilityPower = getChooseRandom(ability_result.chooseRandum);
    }
    damageCalclator(abilityPower,attacker,target);
  }
  damage = damageCalclator(abilityPower,attacker,target);
  switch(abilityType){
    case 0: //相手に攻撃
      targetLife = targetLife - damage * 2;
      attackerAp = attackerAp - apCost;
      break;
    case 1: //相手に攻撃しつつ状態異常を付与
      random =  Math.floor( Math.random() * 101 ) ;
      if(random < ability_result.stateChangeChance){
        targetLife = targetLife - damage * 2;
        if("conditionType" in ability_result){
          console.log("状態異常を付与成功！");
          targetCondition = ability_result.conditionType;
          conditionName = ability_result.conditionName;
        }
      }else{
        console.log("状態異常を付与失敗！");
        conditionType = null;
      }
      targetLife = targetLife - damage * 2;
      attackerAp = attackerAp - apCost;
      break;
    case 2: //相手に状態異常を付与
      random =  Math.floor( Math.random() * 101 ) ;
      if(random < ability_result.stateChangeChance){
        if("conditionType" in ability_result){
          console.log("状態異常を付与成功！");
          targetCondition = ability_result.conditionType;
          conditionName = ability_result.conditionName;
        }
      }else{
        console.log("状態異常を付与失敗！");
        conditionType = null;
      }
      attackerAp = attackerAp - apCost;
      break;
    case 3: //自身を回復
      healpoint = damage * 2;
      attackerLife = attackerLife + healpoint;
      if(attackerLife > attackerMaxLife){
        attackerLife = attackerMaxLife;
      }
      attackerAp = attackerAp - apCost;
      break;
    case 4: //相手に攻撃しつつ自身を回復
      healpoint = damage;
      attackerLife = attackerLife + healpoint;
      targetLife = targetLife - damage * 2;
      if(attackerLife > attackerMaxLife){
        attackerLife = attackerMaxLife;
      }
      attackerAp = attackerAp - apCost;
      break;
    case 5://未定
      break;
    case 6://未定
      break;
  }

  //自分のターンの場合
  if(phase === "m"){
    //攻撃者の設定
    mCondition = attackerCondition;
    myMonster.Lv = attackerLv;
    mParam.MaxLife = attackerMaxLife;
    mParam.life = attackerLife;
    mParam.power = attackerPower;
    mParam.shield = attackerShield;
    mParam.speed = attackerSpeed;
    mParam.ap = attackerAp;
    //受け手の設定
    eCondition = targetCondition;
    enemy.Lv = targetLv;
    eParam.life = targetLife;
    eParam.MaxLife = targetMaxLife;
    eParam.power = targetPower;
    eParam.shield = targetShield;
    eParam.speed = targetSpeed;
    eParam.ap = targetAp;
  }else{
    //敵のターンの場合
    //攻撃者の設定
    mCondition = targetCondition;
    myMonster.Lv = targetLv;
    mParam.MaxLife = targetMaxLife;
    mParam.life = targetLife;
    mParam.power = targetPower;
    mParam.shield = targetShield;
    mParam.speed = targetSpeed;
    mParam.ap = targetAp;
    //受け手の設定
    eCondition = attackerCondition;
    enemy.Lv = attackerLv;
    eParam.MaxLife = attackerMaxLife;
    eParam.life = attackerLife;
    eParam.power = attackerPower;
    eParam.shield = attackerShield;
    eParam.speed = attackerSpeed;
    eParam.ap = attackerAp;
  }
  return {abilityName:abilityName, abilityMessage:abilityMessage, damage:damage, healpoint:healpoint, myMonsterParam:mParam, enemyParam:eParam, abilityType:abilityType, conditionName:conditionName, conditionType:conditionType, mCondition:mCondition, eCondition:eCondition};
};

function damageCalclator(abilityPower,attacker,target){
  let damage = Math.round(Math.round(Math.ceil(Math.ceil(Math.floor(attacker.attackerLv * 2 / 5 + 2 ) * abilityPower * attacker.attackerPower / target.targetShield ) / 50 + 2 ) * getCountRandom(85, 110)) / 100);
  console.log(damage);
  console.log(attacker.attackerLv);
  console.log(attacker.attackerPower);
  console.log(target.targetShield);
  return damage;
};

function abilitySoundEffectPlaying(seType,seNumber){
      SoundManager.setVolume(1.5);
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
function getCountRandom(min, max) {
  console.log(min);
  console.log(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function getChooseRandom(arrayData) {
  var arrayIndex = Math.floor(Math.random() * arrayData.length);
  return arrayData[arrayIndex];
};