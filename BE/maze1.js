const Maze1 = (number) => {
  for (let i = 1; i <= number; i++) {
    string = "";
    if (i % 3 === 0 && i % 2 !== 0) {
      for (let j = 1; j <= number; j++) {
        if (j === number - 1) {
          string += " ";
        } else {
          string += "@";
        }
      }
    } else if (i % 2 === 0) {
      for (let j = 1; j <= number; j++) {
        if (j === number || j === 1) {
          string += "@";
        } else {
          string += " ";
        }
      }
    } else {
      for (let j = 1; j <= number; j++) {
        if (j === 2) {
          string += " ";
        } else {
          string += "@";
        }
      }
    }
    console.log(string);
  }
};

Maze1(35);
