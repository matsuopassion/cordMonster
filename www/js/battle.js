/**
 * バトル中に行われるモンスターの行動を決める処理です。
 * @param {string} phase - "m","e","s"のいずれか。
 * @param {object} myMonster - 自分のモンスターの情報。
 * @param {object} enemy - 相手のモンスターの情報。
 * @param {object} master - phina.jsのマスタクラス。
 */
function Battle(phase,myMonster,enemy,master,abilityID){
  let message;
  let commandResults;
  let ability = "normalAttack";
  let abilityName;
  let abilityMessage;
  let damage = 0;
  let count = 1;
  let issue = "uncertain";
  console.error(myMonster.param.AP);
  switch (phase){
    case 'm':
      if(abilityID != ""){
        ability = abilityID;
        console.log(abilityID);
      }else{
        ability = myMonster.ability;
        console.log(abilityID);
        ability = ability[Math.floor(Math.random() * ability.length)].toString();
      }
      console.error("うちの子の状態は"+myMonster.condition);
      switch(myMonster.condition){
        case "Charm": //魅了
          if(1 == Math.floor((Math.random() * 2))+1){
            this.message = `${myMonster.monsterName}は${enemy.monsterName}に見惚れて手が出せない！`;
          }else{
            commandResults = abilitySelect(phase,myMonster,enemy,ability);
            myMonster.param = commandResults.myMonsterParam;
            enemy.param = commandResults.enemyParam;
            myMonster.condition = commandResults.mCondition;
            enemy.condition = commandResults.eCondition;
          }
          break;
        case "Blind": //盲目
          if(1 == Math.floor((Math.random() * 3))+1){
            this.message = `${myMonster.monsterName}は前が見えない！`;
          }else{
            commandResults = abilitySelect(phase,myMonster,enemy,ability);
            myMonster.param = commandResults.myMonsterParam;
            enemy.param = commandResults.enemyParam;
            myMonster.condition = commandResults.mCondition;
            enemy.condition = commandResults.eCondition;
          }
          break;
        default:
          commandResults = abilitySelect(phase,myMonster,enemy,ability);
          myMonster.param = commandResults.myMonsterParam;
          enemy.param = commandResults.enemyParam;
          myMonster.condition = commandResults.mCondition;
          enemy.condition = commandResults.eCondition;
          this.message = getMessage(phase,myMonster,enemy,commandResults);
          break;
      }
      console.log(`${myMonster.monsterName}の体力：${myMonster.param.life}`);
      console.log(`${enemy.monsterName}の体力：${enemy.param.life}`);
      console.log(`${myMonster.monsterName}のap：${myMonster.param.AP}`);
      console.log(`${enemy.monsterName}のap：${enemy.param.AP}`);
      console.log(`${myMonster.monsterName}の状態：${myMonster.condition}`);
      console.log(`${enemy.monsterName}の状態：${enemy.condition}`);
      break;
    case 'e':
      ability = enemy.ability;
      ability = ability[Math.floor(Math.random() * ability.length)].toString();
      console.error("敵の状態は"+enemy.condition);
      switch(enemy.condition){
        case "Charm": //魅了
          if(1 == Math.floor((Math.random() * 2))+1){
            this.message = `${enemy.monsterName}は${myMonster.monsterName}に見惚れていて\n手が出せない！`;
          }else{
            commandResults = abilitySelect(phase,myMonster,enemy,ability);
            myMonster.param = commandResults.myMonsterParam;
            enemy.param = commandResults.enemyParam;
            myMonster.condition = commandResults.mCondition;
            enemy.condition = commandResults.eCondition;
            this.message = getMessage(phase,myMonster,enemy,commandResults);
          }
          break;
        case "Blind": //盲目
          if(1 == Math.floor((Math.random() * 3))+1){
            this.message = `${enemy.monsterName}は前が見えない！`;
          }else{
            commandResults = abilitySelect(phase,myMonster,enemy,ability);
            myMonster.param = commandResults.myMonsterParam;
            enemy.param = commandResults.enemyParam;
            myMonster.condition = commandResults.mCondition;
            enemy.condition = commandResults.eCondition;
            this.message = getMessage(phase,myMonster,enemy,commandResults);
          }
          break;
        default:
          commandResults = abilitySelect(phase,myMonster,enemy,ability);
          myMonster.param = commandResults.myMonsterParam;
          console.warn(myMonster.param.AP);
          enemy.param = commandResults.enemyParam;
          myMonster.condition = commandResults.mCondition;
          enemy.condition = commandResults.eCondition;
          this.message = getMessage(phase,myMonster,enemy,commandResults);
          break;
      }
      console.log(`${myMonster.monsterName}の体力：${myMonster.param.life}`);
      console.log(`${enemy.monsterName}の体力：${enemy.param.life}`);
      console.log(`${myMonster.monsterName}のap：${myMonster.param.AP}`);
      console.log(`${enemy.monsterName}のap：${enemy.param.AP}`);
      console.log(`${myMonster.monsterName}の状態：${myMonster.condition}`);
      console.log(`${enemy.monsterName}の状態：${enemy.condition}`);
      break;
    case 's':
      if(myMonster.param.life <= 0){
        this.message = `${myMonster.monsterName}は倒れた！`;
        console.log(this.message);
        this.issue = "lose";
      }else if(enemy.param.life <= 0){
        this.message = `${enemy.monsterName}は倒れた！`;
        console.log(this.message);
        this.issue = "win";
      }else{
        this.message = `${enemy.monsterName}が飛び出してきた！`;
        console.log(`${myMonster.monsterName}の体力：${myMonster.param.life}`);
        console.log(`${enemy.monsterName}の体力：${enemy.param.life}`);
        console.log(`${myMonster.monsterName}のap：${myMonster.param.AP}`);
        console.log(`${enemy.monsterName}のap：${enemy.param.AP}`);
        console.log(`${myMonster.monsterName}の状態：${myMonster.condition}`);
        console.log(`${enemy.monsterName}の状態：${enemy.condition}`);
        break;
      }
      break;
    default:
      console.log('エラー：変数 phase に正しい値が設定されてません');
      console.log(`phase : ${phase} `);
  }
  console.log("現在の勝敗状態：" + this.issue);
  return {messageContent:this.message, mCondition:myMonster.condition, eCondition:enemy.condition, resultIssue:this.issue};
}

function getMessage(phase,myMonster,enemy,commandResults){
  let message = "エラー：変数'message'の値が不正です";
  switch (phase){
    case 'm':
      switch(commandResults.abilityType){
        case 0://相手に攻撃
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 1://相手に攻撃しつつ状態異常を付与
          if(commandResults.eCondition != "normal" && commandResults.conditionType != null){
            this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！\n${enemy.monsterName}は${commandResults.conditionName}状態になった！`;
          }else{
            this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
          }
          break;
        case 2://相手に状態異常を付与
          if(commandResults.eCondition != "normal" && commandResults.conditionType != null){
            this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}は${commandResults.conditionName}状態になった！`;
          }else{
            this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\nしかし上手く決まらなかった！`;
          }
          break;
        case 3://自身を回復
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}は${commandResults.healpoint}回復した！`;
          break;
        case 4://相手に攻撃しつつ自身を回復
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！\n${myMonster.monsterName}は${commandResults.healpoint}回復した！`;
          break;
        case 5://未使用
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 6://未使用
          this.message = `${myMonster.monsterName}のターン！\n${myMonster.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        default:
          this.message = `エラー：変数 abilityTypeの値が不正です`;
      }
      break;
    case 'e':
      switch(commandResults.abilityType){
        case 0://相手に攻撃
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 1://相手に攻撃しつつ状態異常を付与
          if(commandResults.mCondition != "normal" && commandResults.mCondition != "normal"){
            this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！\n${myMonster.monsterName}は${commandResults.conditionName}状態になった！`;
          }else{
            this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！`;
          }
          break;
        case 2://相手に状態異常を付与
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}は${commandResults.conditionName}状態になった！`;
          break;
        case 3://自身を回復
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${enemy.monsterName}は${commandResults.healpoint}回復した！`;
          break;
        case 4://相手に攻撃しつつ自身を回復
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！\n${enemy.monsterName}は${commandResults.healpoint}回復した！`;
          break;
        case 5://未使用
          this.message = `${enemy.monsterName}のターン！\n${enemy.monsterName}${commandResults.abilityMessage}\n${myMonster.monsterName}に${commandResults.damage}のダメージ！`;
          break;
        case 6://未使用
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

/**
 * 状態異常によってダメージを受ける場合の処理を行います。
 * @param {string} phase - "m","e","s"のいずれか。
 * @param {object} myMonster - 自分のモンスターの情報。
 * @param {object} enemy - 相手のモンスターの情報。
 * @param {string} conditionType - "poison"等の状態異常を指す文字列。
 */
function conditionDamage(phase,myMonster,enemy,conditionType) {
  let mParam = myMonster.param;
  let eParam = enemy.param;
  let mCondition = myMonster.condition;
  let eCondition = enemy.condition;
  let conditionName;
  if(phase === "m"){
    //攻撃者の設定
    attackerLife = mParam.life;
    attackerMaxLife = mParam.maxlife;
    //受け手の設定
    targetLife = eParam.life;
    targetMaxLife = eParam.maxlife;
    
  }else{
    //攻撃者の設定
    attackerLife = eParam.life;
    attackerMaxLife= eParam.maxlife;
    //受け手の設定
    targetLife = mParam.life;
    targetMaxLife = mParam.maxlife;
  }
  switch (conditionType){
    case "Poison":
      conditionName = "毒";
      if(phase === "m"){
        this.message = `${myMonster.monsterName}は毒のダメージを受けている`;
        attackerLife = attackerLife - Math.floor(attackerMaxLife / 10);
      }
      if(phase === "e"){
        this.message = `${enemy.monsterName}は毒のダメージを受けている`;
        attackerLife = attackerLife - Math.floor(attackerMaxLife / 10);
      }
      break;
    case "HighPoison":
      conditionName = "猛毒";
      if(phase === "m"){
        this.message = `${myMonster.monsterName}は猛毒のダメージを受けている`;
        attackerLife = attackerLife - (Math.floor(attackerMaxLife / 8));
      }
      if(phase === "e"){
        this.message = `${enemy.monsterName}は猛毒のダメージを受けている`;
        attackerLife = attackerLife - (Math.floor(attackerMaxLife / 8));
      }
      break;
    case "Burn":
      conditionName = "火傷";
      if(phase === "m"){
        this.message = `${myMonster.monsterName}は火傷のダメージを受けている`;
        attackerLife = attackerLife - Math.floor(attackerMaxLife / 9);
      }
      if(phase === "e"){
        this.message = `${enemy.monsterName}は火傷のダメージを受けている`;
        attackerLife = attackerLife - Math.floor(attackerMaxLife / 9);
      }
      break;
    case "Charm":
      conditionName = "魅了";
      if(phase === "m"){
        this.message = `${myMonster.monsterName}は${enemy.monsterName}に魅了されている`;
      }
      if(phase === "e"){
        this.message = `${enemy.monsterName}は${myMonster.monsterName}に魅了されている`;
      }
      break;
    case "Blind":
      conditionName = "暗闇";
      if(phase === "m"){
        this.message = `${myMonster.monsterName}は暗闇の中にいる`;
      }
      if(phase === "e"){
        this.message = `${enemy.monsterName}は暗闇の中にいる`;
      }
      break;
    default:
     this.message = `エラー：未知の状態異常が設定されています。`;
  }
  if(phase === "m"){
    if(getCountRandom(1, 4) == 1){
      mCondition = "normal"
    } 
    //攻撃者の設定
    mParam.life = attackerLife;
    //受け手の設定
    eParam.life = targetLife;
  }else{
    //敵のターンの場合
    if(getCountRandom(1, 4) == 1){
      eCondition = "normal"
    } 
    //攻撃者の設定
    mParam.life = targetLife;
    //受け手の設定
    eParam.life = attackerLife;
  }
    return {myMonsterParam:mParam, enemyParam:eParam, conditionName:conditionName,mCondition:mCondition,eCondition:eCondition, messageContent:this.message};
};