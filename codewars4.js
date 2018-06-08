function insertDash(num) {
  num = num.toString();
  var newArray = [];
  for (var i=0; i<num.length; i++){
    newArray.push(num[i]);
    if (num[i] % 2 && num[i+1] %2){
      newArray.push('-');
     }
   }
  return newArray.join('');
} 