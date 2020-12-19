function abilitySelect(phase,myMonster,enemy){
  let abilityId;
  let mParam = myMonster.param;
  let eParam = enemy.param;
  let ability_message = "様子を見ている";
  if(phase === "m"){
    ability_id = myMonster.ability_id;
    //攻撃者の設定
    attackerLife = mParam.life;
    attackerPower = mParam.power;
    attackerShield = mParam.shield;
    attackerSpeed = mParam.speed;
    //受け手の設定
    targetLife = enemy.param.life;
    targetPower = enemy.param.power;
    targetShield = enemy.param.shield;
    targetSpeed = enemy.param.speed;
  }else{
    abilityId = enemy.ability_id;
    //攻撃者の設定
    attackerLife = enemy.param.life;
    attackerPower = enemy.param.power;
    attackerShield = enemy.param.shield;
    attackerSpeed = enemy.param.speed;
    //受け手の設定
    targetLife = mParam.life;
    targetPower = mParam.power;
    targetShield = mParam.shield;
    targetSpeed = mParam.speed;
  }
  switch (ability_id){
    case 'abt1':
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
};