// External Packages
import http from 'http';

// Created Packages
import config from './utils/config';
import app from './app';

const server: http.Server = http.createServer(app);

server.listen([config.PORT,'0.0.0.0'], () =>
  console.info(`Server running on port ${config.PORT}`)
);
