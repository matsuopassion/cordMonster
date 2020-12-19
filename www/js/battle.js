function Battle(phase,myMonster,enemy,master){
  // 出題・回答・判定の内の、どのフェーズか
         /*
         * 自キャラ・・・"m"
         * 敵キャラ・・・"e"
         * システム・・・"s"
         */
  let message;
  let commandResults;
  let ability_name;
  let ability_message;
  let damage = 0;
  switch (phase){
    case 'm':
      commandResults = abilitySelect(phase,myMonster,enemy);
      myMonster.param = commandResults.myMonsterParam;
      enemy.param = commandResults.enemyParam;
      console.log(JSON.stringify(myMonster.param));
      console.log(JSON.stringify(enemy.param));
      this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}は${commandResults.ability_message}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
      //console.log(this.message);
      console.log(`${myMonster.monsterName}の体力：${myMonster.param.life}`);
      console.log(`${enemy.monsterName}の体力：${enemy.param.life}`);
      break;
    case 'e':
      commandResults = abilitySelect(phase,myMonster,enemy);
      myMonster.param = commandResults.myMonsterParam;
      enemy.param = commandResults.enemyParam;
      this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}は${commandResults.ability_message}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！`;
      //console.log(this.message);
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
  let ability_name = "様子を見る";
  let ability_power = 0;
  let ability_message = "様子を見ている";
  let damage = 0;
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
      ability_power = 30;
      ability_name = "通常攻撃";
      ability_message = "攻撃をしかけた！"
      damage = Math.floor(getRandomInt(150, 255) * (Math.floor(((( attackerLv * 2/5+2) * ability_power * attackerPower / targetShield )/50+2))) / 255);
      targetLife = targetLife - damage;
      break;
    case 'abt2':
      break;
    case 'abt3':
      break;
    case 'abt4':
      break;
    case 'abt5':
      break;
    case 'abt6':
      break;
    case 'abt7':
      break;
    case 'abt8':
      break;
    case 'abt9':
      break;
    case 'abt10':
      break;
    case 'abt11':
      break;
    case 'abt12':
      break;
    case 'abt13':
      break;
    case 'abt14':
      break;
    case 'abt15':
      break;
    case 'abt16':
      break;
    case 'abt17':
      break;
    case 'abt18':
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
  return {ability_name:ability_name, ability_message:ability_message, damage:damage, myMonsterParam:mParam, enemyParam:eParam};
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};