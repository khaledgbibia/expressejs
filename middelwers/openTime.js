const path = require("path");

function openTime (req, res, next){

let currentDate= new Date();
console.log(currentDate);
if (currentDate.getHours()>9 
&& currentDate.getHours()<17
 && currentDate.getDate()>0 
 && currentDate.getDate()<6) {
    next();
}else{
    res.sendFile(path.join(__dirname, "../", "views","open.html"));
}
};

module.exports= {openTime};