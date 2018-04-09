const express = require('express');
const app = express();
const router=express.Router();
const path = __dirname+'/views/';
const request = require('request')
const requestIp = require('request-ip');

const port = process.env.PORT || 80;
/*
	Middleware to log the request method
*/
router.use((req,res,next)=>{
	console.log("/"+req.method);
	next();
});


router.use((req,res,next)=>{
	const clientIp = requestIp.getClientIp(req);
	//console.log(requestIp);
	console.log("Client ip address is: ");
	console.log(clientIp);
	//console.log(req.connection.remoteAddress);
   	next();
});

request('http://ipinfo.io', function(error, res, body) {
  console.log(JSON.parse(body))
})


/*
	Route for homepage

*/
router.get("/",(req,res)=>{
	res.sendFile(path+ "index.html");
});

/*
	Route for Mabus
*/

/*router.get("/Analysis", (req,res)=>{
	res.sendFile(path+"Analysis.html");
});*/

router.get("/Mabus",(req,res)=>{
	res.sendFile(path+"Mabus.html");
});

router.get("/Mabus/Profile",(req,res)=>{
	res.sendFile(path+"MabusProfile.html");
});

router.get("/Mabus/PsychologicalProfile",(req,res)=>{
	res.sendFile(path+"Mabus_PsychlogicalProfile.html");
});

router.get("/Mabus/Analysis",(req,res)=>{
	res.sendFile(path+"Mabus_Analysis.html");
});

router.get("/Mabus/InvestigationProcess",(req,res)=>{
	res.sendFile(path+"Mabus_InvestigationProcess.html");
});

/*
	Route for Bezelbulb
*/



/*router.get("/Profile",(req,res)=>{
	res.sendFile(path+"Profile.html");
});*/


router.get("/Bezelbulb",(req,res)=>{
	res.sendFile(path+"Bezelbulb.html");
});





/*router.get("/PsychologicalProfile",(req,res)=>{
	res.sendFile(path+"PsychologicalProfile.html");
});*/

app.use("/",router);

//app.use(express.static(__dirname+'/views/'));
//app.use(express.static(__dirname+'views/public'));

/*
	__dirname is the directory where the app resides in
	'/' is the root directory in our case it is the "views"
	directory
*/
app.use(express.static(__dirname+'/'));
//app.use(express.static(__dirname+'/views/public'));

app.use("*",(req,res)=>{
    res.sendFile(path+"404.html");
});


app.listen(port,()=>{
	console.log("Live at Port" + port);

});
