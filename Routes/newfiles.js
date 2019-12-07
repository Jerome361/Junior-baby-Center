const express = require('express');

const router = express.Router();
var multer  = require('multer')

var upload = multer({ dest: './uploads' })


router.get('/', (req, res)=>{
    res.render('photofile')
})
//Upload a single file
router.post('/', upload.single('myFile'), (req, res, next) => {
    const file = req.file
 
    if(!file){
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file);
  }) 

//Upload multiple files
router.post('/', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files

  if(!files){
    const error = new Error('Please upload a files')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(files);
}) 



    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './uploads')
        },
        filename: function (req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now() + Path.extname(file.originalname))
        }
      })
       
      var upload = multer({ storage: storage })
    
 

  

  module.exports = router;