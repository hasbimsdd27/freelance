const StringCheck = (string) => {
  let newdata = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newdata += string.split("")[i];
  }
  return newdata === string;
};

console.log(StringCheck("siang"));
