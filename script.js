function ipToInt(ip){
return ip.split('.').reduce((acc,oct)=> (acc<<8)+parseInt(oct),0)>>>0;
}

function intToIp(int){
return [
(int>>>24)&255,
(int>>>16)&255,
(int>>>8)&255,
int&255
].join('.');
}

function cidrToMask(cidr){
return (0xffffffff << (32-cidr)) >>>0;
}

function calculateSubnet(){

const ip = document.getElementById("ip").value;
const cidr = parseInt(document.getElementById("cidr").value);

if(!ip || isNaN(cidr)){
alert("Enter valid IP and CIDR");
return;
}

const ipInt = ipToInt(ip);
const mask = cidrToMask(cidr);

const network = ipInt & mask;
const broadcast = network | (~mask >>>0);

const firstHost = network + 1;
const lastHost = broadcast - 1;

const totalHosts = Math.pow(2,32-cidr)-2;

document.getElementById("network").innerText = intToIp(network);
document.getElementById("broadcast").innerText = intToIp(broadcast);
document.getElementById("firstHost").innerText = intToIp(firstHost);
document.getElementById("lastHost").innerText = intToIp(lastHost);
document.getElementById("totalHosts").innerText = totalHosts;

}
