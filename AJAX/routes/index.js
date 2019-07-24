const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile('C:\\Users\\dlaxo\\OneDrive\\바탕 화면\\git\\javascript 연습장\\AJAX\\views\\fetch API.html');
});

module.exports = router;