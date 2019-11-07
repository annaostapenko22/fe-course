const calculateEngravingPrice = (message, pricePerWord) => {
  message = message.split(" ").length;
  return pricePerWord * message;
};

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20));
