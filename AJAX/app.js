const express = require('express');
const path = require('path');
const logger = require('morgan');
const indexRouter = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(logger('dev'));

app.use('/',indexRouter);

app.listen(8000,()=>{
    console.log('8000번 포트에서 서버 대기중입니다!');
});