require('dotenv').config();
const fs = require('fs');
const axios = require('axios');
const sendMail = require('./sendMail');
console.log('process.env', process.env);
const sendIpRequest = async () => {

  const result = await axios({
    method: 'get',
    url: `http://ipinfo.io?token=${process.env.IPINFO_TOKEN}`
  });
  const ip = result.data.ip;
  console.log(ip, 'Ip from request');
  if (!fs.existsSync(filePath)) {
    writeRequest(ip);
    await sendMail(ip);
  } else {
    const ipFromFile = readIp();
    console.log('read ip!', ip)
    if (ipFromFile !== ip) {
      console.log('Ips do not match, writing to file', ipFromFile, ip);
      writeRequest(ip);
      await sendMail();
    }
  }


};

const filePath = `${__dirname}/ip.txt`;
const writeRequest = (ip) => {
  fs.writeFileSync(filePath, ip, 'utf-8');
}

const readIp = () => {
 
    const file = fs.readFileSync(filePath, 'utf-8');
    console.log(file, 'FILE');
    const ip = file.split('\n')[0].trim();
    return ip || '';

}


sendIpRequest();