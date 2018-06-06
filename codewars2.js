function abbrevName(name){
  var shortName = name.split(' ')
  return shortName[0].charAt(0).toUpperCase()+'.'+shortName[1].charAt(0).toUpperCase();
}