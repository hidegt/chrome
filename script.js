function countdown(due){
  const now = new Date();
  const rest = due.getTime() - now.getTime();
  const days = Math.floor(rest/1000/60/60/24);
  const count = days;
  return count;
}

let goal = new Date(2021,1,6);

function recalc(){
  const counter = countdown(goal);
  let day = counter;
  window.alert("FE午前まであと" + day + "日");
}

recalc();

