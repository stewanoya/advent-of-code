const fs = require("fs");
const path = "./input.txt";

fs.readFile(path, "utf-8", (err, data) => {
  let dataArray = data.split(",");
  let totalFuel = 0;
  let lowestFuel = 0;
  let index = null;
  console.log(dataArray);
  for (let i = 0; i < dataArray.length; i++) {
    let currentPosition = dataArray[i];
    for (let j = 0; j < dataArray.length; j++) {
      let difference = Number(currentPosition) - Number(dataArray[j]);
      i === 0
        ? (totalFuel += Math.abs(difference))
        : (totalFuel += Math.abs(difference) * (j + 1));
    }

    if (i === 0) {
      lowestFuel = totalFuel;
      index = 0;
    }

    if (totalFuel < lowestFuel) {
      lowestFuel = totalFuel;
      index = i;
    }
    totalFuel = 0;
  }
  console.log("LOWEST FUEL", lowestFuel);
  console.log("INDEX", index);
  console.log("Number", dataArray[index]);
});
