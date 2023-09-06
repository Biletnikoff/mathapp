export const calculateWholeNumberArray = (number) => {
  const numberString =  String(number);
 const lengthOfNumber = numberString.length;
 const arrayOffNumbers = []
  for (let index = 0; index < lengthOfNumber; index++) {
    if ( index < lengthOfNumber - 1 && numberString[index] !== '0') {
      arrayOffNumbers.push(numberString[index] + Array(lengthOfNumber-index).join("0"))
    } else if( numberString[index] !== '0') {
      arrayOffNumbers.push(numberString[index])
    }
  }
return arrayOffNumbers
}

export const generate = (length) => {
  var text = "";
  var possible = "123456789";
  for (var i = 0; i < length; i++) {
    var sup = Math.floor(Math.random() * possible.length);
    text += i > 0 && sup == i ? "0" : possible.charAt(sup);
  }
  return Number(text);
}

export const calculateMathType = (topNumber, botNumber, equation) => {
  if (equation === '/') {
    return (topNumber / botNumber)
  }

  if (equation === '-') {
    return (topNumber - botNumber)
  }

  if (equation === '+') {
    return (topNumber + botNumber)
  }

  if (equation === '*') {
    return (topNumber * botNumber)
  }

}
