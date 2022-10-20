const number = 15;

let isGreaterThanTen = new Promise((resolve, reject) => {
  if (number > 10) {
    return resolve(number);
  }
  return reject("ERROR! The number is less than or equal to 10");
});

isGreaterThanTen
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
