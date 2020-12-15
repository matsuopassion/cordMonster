// This is a JavaScript file
function battle(myMonster,enemyMonster,master){
  let count = 0;
  this.myMonster = myMonster;
  this.enemy = enemyMonster;
  let battleEndFlag = false;
  let side = 0;
  while(battleEndFlag === false){
    battleLabel(side,myMonster,enemy,master);
    if(side === 0){
      side = 1;
    }else{
      side = 0;
    }count++;
    if(count === 5){
      battleEndFlag = true;
    }
  }
}
