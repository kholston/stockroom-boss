// External Packages
import http from 'http';

// Created Packages
import config from './utils/config';
import app from './app';

const server: http.Server = http.createServer(app);

server.listen(config.PORT, () =>
  console.info(`Server running on port ${config.PORT}`)
);
