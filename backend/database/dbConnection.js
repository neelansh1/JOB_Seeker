import mongoose from "mongoose";

const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL, {
    dbName: 'JOB_SEEKER',
   // useNewUrlParser: true,
   // useUnifiedTopology: true,
    //useCreateIndex: true
  })
  .then(() => {
    console.log(`Connected to database`);
  })
  .catch((err) => {
    console.log(`Some error occurred while connecting to database: ${err}`);
  });
};

export default dbConnection;
