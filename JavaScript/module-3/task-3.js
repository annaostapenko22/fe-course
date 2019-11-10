const findBestEmployee = employees => {
  const values = Object.values(employees);
  console.log(values);

  let bestEmployeeResult = Math.max(...values);
  console.log(bestEmployeeResult);
  const entries = Object.entries(employees);
  for (entry of entries) {
    for (one of entry) {
      if (one === bestEmployeeResult) {
        return entry[0];
      }
    }
  }
};

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango
