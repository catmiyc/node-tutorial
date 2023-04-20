const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

// default buffer size 64kb
// last buffer - reminder
// highWaterMark - control size
// const streamReadStream('./content/big.txt', {highWaterMark:90000})
// const streamReadStream('./content/big.txt', {encoding: 'utf8})

stream.on("error", (err) => {
  console.log(err);
});
