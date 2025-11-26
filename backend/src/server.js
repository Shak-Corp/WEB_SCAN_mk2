const http = require('http');
const app = require('./app').default;
const { initRealtimeLogs } = require('./realtime/socket');
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);
initRealtimeLogs(server);
server.listen(PORT, () => {
  console.log(`SecScan backend running on port ${PORT}`);
});
