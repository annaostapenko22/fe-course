const countProps = obj => {
  const values = Object.values(obj);
  console.log(values);
  let count = 0;
  for (value of values) {
    count += 1;
  }
  return count;
};
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
