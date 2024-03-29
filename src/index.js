/* eslint-disable no-console */

import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on PORT: ${PORT}, ENV: ${process.env.NODE_ENV}`);
  }
});
