mutateMyStrings = (stringOne, stringTwo) => stringOne.split("").map((el, index) => el = stringTwo.substring(0,index).concat(stringOne.substring(index))).concat(stringTwo).filter((item, index, arr) => arr.indexOf(item) == index).join("\n").concat("\n")