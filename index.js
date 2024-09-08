var express = require('express');
var cors = require('cors');
require('dotenv').config()
const fileUpload = require('express-fileupload');

var app = express();

app.use(cors());
app.use(fileUpload());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
////////////////
app.post('/api/fileanalyse',(req,res,next)=>{
  const {upfile} =req.files
 
  res.json({name:upfile.name,type:upfile.mimetype,size:upfile.size})
  next()
})

////////////////
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
