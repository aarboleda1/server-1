import { mongoURI } from '../config';
import mongoose from 'mongoose';

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', console.log.bind(this, 'Connected to db'));
