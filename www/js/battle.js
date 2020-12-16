// This is a JavaScript file
function battle(myMonster,enemyMonster,master){
  let count = 0;
  this.myMonster = myMonster;
  this.enemy = enemyMonster;
  let battleEndFlag = false;
  let phase = s;
  while(battleEndFlag === false){
    setBattleLabel(phase,myMonster,enemy,master);
    count++;
    if(count === 5){
      battleEndFlag = true;
    }
  }
}
