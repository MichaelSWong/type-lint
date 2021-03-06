import express, { Application, Request, Response } from 'express';

// Boot Express
const app: Application = express();
const port = 5000;

// Application routing
app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'Hello from Pittsburgh, USA' });
});

// Start server
app.listen(port, () => 
console.log(`Server is listening on port ${port}!`));
