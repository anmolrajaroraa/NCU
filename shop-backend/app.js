const express = require('express');
const multer = require('multer');
const app = express();
const mycors = require('./cors');
const bodyParser = require('body-parser');

//const cors = require('cors');
//app.use(cors());
app.use(mycors);
app.use(bodyParser.json());
const fileStorage = multer.diskStorage({
    destination:(req,file,next)=>{
        console.log("File Destination ",file);
        next(null,'./fileUploads');
    },
    filename:(req,file,next)=>{
        console.log("File  is ",file);
        next(null, 'Sample'+".xlsx");
    }

});
const fileFilterFn = (req,file,next)=>{
    console.log("FILE IS ",file);
    console.log('im here on line 24');
    let error = null;
    let isMimeMatch ;
    if(file.mimetype=='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.mimetype=='application/msexcel' || file.mimetype=='application/vnd.ms-excel'){
        isMimeMatch = true;

        next(error,isMimeMatch);
    }
    else{
        isMimeMatch = false;
        
        console.log("Mime not Match ",error, " isMimeMatch ",isMimeMatch);
        next(error,isMimeMatch);
    }
}


app.use(multer({storage:fileStorage,limits:{fileSize:5*1024*1024

},fileFilter:fileFilterFn}).single('productfile'));




app.use('/',require('./routes/home'));
app.use('/',require('./routes/user'));
console.log('Im here on line 49');
app.use('/',require('./routes/upload'));
app.use('/',require('./api/categoryapi'));
app.use('/',require('./api/productapi'));
app.use('/',require('./api/subcategoryapi'));

app.use(function (err, req, res, next) {
    console.log('In function after routes', err);
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.send({ result: 'fail', error: { code: 1001, message: 'File is too big' } })
       
    }
  
    // Handle any other errors
  });


app.listen(1234,()=>{
    const userOperation = require('./db/helpers/useroperations');
    userOperation.readAdminUser();
    console.log('Server Start');
})