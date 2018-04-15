import mongodb from 'mongodb';

export default {
  // "port": 3005,
  "mongoUrl": "mongodb://oliver:oliver@ds129156.mlab.com:29156/smack",
  "port": process.env.PORT,
  //"mongoUrl": process.env.MONGODB_URI,
  "bodyLimit": "100kb"
}
