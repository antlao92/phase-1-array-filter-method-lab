// Code your solution here
function findMatching(drivers, name){
  const filteredNames = drivers.filter((newName)=>newName.toLowerCase()===(name.toLowerCase()));
  return filteredNames;
}

function fuzzyMatch(drivers, letter){
  const filteredNames = drivers.filter((newName)=>newName.startsWith(letter));
  return filteredNames;
}

function matchName(drivers, home){
  const nameMatch = drivers.filter((newHome)=>newHome.name === home)
  return nameMatch;
}