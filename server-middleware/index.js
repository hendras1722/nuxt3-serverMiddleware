import bodyParser from 'body-parser';
import createApp from 'express';
const app = createApp();
app.use(bodyParser.json());
app.all('/server-middleware/getJSON', (req, res) => {
  res.json({ data: 'data' });
});
export default app;
