import { config } from 'dotenv';
config(); // setup env variables

const PORT = process.env.PORT || 5001;
// const MONGODB_URI =
//   process.env.NODE_ENV === 'test'
//     ? process.env.MONGODB_TEST_URI
//     : process.env.MONGODB_URI;

export default {
  PORT,
};
