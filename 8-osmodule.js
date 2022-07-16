const os=require('os');
//info about current user
const user=os.userInfo();
//method returns sys uptime in sec
console.log(`${os.uptime()} seconds`)


const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);