import mongoose from 'mongoose';

mongoose.connect(process.env.DB_HOST, () => {
   console.log('connection established')
});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
