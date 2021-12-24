const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  const parsed = data.split("\n").map((line) => line.split("->"));
  let biggestY = 0;
  let biggestX = 0;
  console.log(parsed);

  for (const row of parsed) {
    let firstSet = row[0].split(",");
    let secondSet = row[1].split(",");

    let x1 = Number(firstSet[0].trim());
    let y1 = Number(firstSet[1].trim());

    let x2 = Number(secondSet[0].trim());
    let y2 = Number(secondSet[1].trim());

    if (x2 > biggestX) {
      biggestX = x2;
    } else if (x1 > biggestX) {
      biggestX = x1;
    }
    if (y2 > biggestY) {
      biggestY = y2;
    } else if (y1 > biggestY) {
      biggestY = y1;
    }
  }
  let matrix = Array(biggestX + 1)
    .fill(null)
    .map(() => Array(biggestY + 1).fill(0));

  for (const row of parsed) {
    let firstSet = row[0].split(",");
    let secondSet = row[1].split(",");

    let x1 = Number(firstSet[0].trim());
    let y1 = Number(firstSet[1].trim());

    let x2 = Number(secondSet[0].trim());
    let y2 = Number(secondSet[1].trim());

    if (x1 === x2) {
      if (y1 < y2) {
        for (let i = y1; i < y2 + 1; i++) {
          matrix[i][x1] += 1;
        }
      } else {
        for (let i = y2; i < y1 + 1; i++) {
          matrix[i][x1] += 1;
        }
      }
    }
    if (y1 === y2) {
      if (x1 < x2) {
        for (let i = x1; i < x2 + 1; i++) {
          matrix[y1][i] += 1;
        }
      } else {
        for (let i = x2; i < x1 + 1; i++) {
          matrix[y1][i] += 1;
        }
      }
    }
  }
  let points = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] >= 2) {
        points += 1;
      }
    }
  }
  console.log("Here is the total spots with more than 2 occurances", points);
});
