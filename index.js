const express = require('express');
const clientRouter = require('./routes/client.routes');
const projectRouter = require('./routes/project.routes');
const articleRouter = require('./routes/article.routes');
const betRouter = require('./routes/bet.routes');
const instructionRouter = require('./routes/instruction.routes');
const workerRouter = require('./routes/worker.routes');
const shiftRouter = require('./routes/shift.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Middleware для настройки заголовков CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', clientRouter);
app.use('/api', projectRouter);
app.use('/api', articleRouter);
app.use('/api', betRouter);
app.use('/api', instructionRouter);
app.use('/api', workerRouter);
app.use('/api', shiftRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
