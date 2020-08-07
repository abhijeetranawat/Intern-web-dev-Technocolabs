let raceNumber=Math.floor(Math.random()*1000);
let regEarly=true;
let runnerAge=20;

if(runnerAge>18 && regEarly)
{
  raceNumber+=1000;
  console.log(`Runner:${raceNumber}: Your race starts at 9:30AM`);
}
else if(runnerAge>18 && regEarly=="false")
{
  console.log(`Runner:${raceNumber}: Your race starts at 11:00AM`);
}
else if(runnerAge<18)
{
  console.log(`Runner:${raceNumber}: Your race starts at 12:30PM`);
}
else{
  console.log(`Runner:${raceNumber}: Please contact registration desk for race timings`);
}

