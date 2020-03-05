
const validator = {
  isValid: (numCard) => {
    const creditNumber = numCard.split('').reverse(); 
    for (let i = 0; i < creditNumber.length; i++) {
        if (i % 2 == 1) {
            creditNumber[i] = creditNumber[i] * 2;
        }
    }
    let newCreditNumber = creditNumber.join('').split('');
    let counter = 0;
    for (let i = 0; i < newCreditNumber.length; i++) {
        counter += parseInt(newCreditNumber[i]);
    }
    if (counter % 10 == 0) {
        return true;
    } else {
        return false;
    }
},

maskify:(numCard) => {
  let d = numCard.split("");
  for (let i = 0; i < d.length -4; i++) {
    d[i] = '#';
  }
    return d.join("");
  }

};

export default validator;