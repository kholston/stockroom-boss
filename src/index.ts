// External Packages
import http from 'http';
import { config } from 'dotenv';
config();

// Created Packages
import app from './app';

const server: http.Server = http.createServer(app);

server.listen(process.env.PORT, () =>
  console.info(`Server running on port ${process.env.PORT}`)
);
