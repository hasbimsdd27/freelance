const LoopAngka = (angka) => {
  for (let i = 1; i <= angka; i++) {
    if (i % 3 === 0 && i % 5 !== 0 && i % 15 !== 0) {
      console.log("fish");
    } else if (i % 5 === 0 && i % 3 !== 0 && i % 15 !== 0) {
      console.log("bash");
    } else if (i % 15 === 0) {
      console.log("fish bash");
    } else {
      console.log(i);
    }
  }
};

LoopAngka(30);
