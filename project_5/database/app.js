const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 5000;
const Schema = mongoose.Schema;

const uri = "mongodb+srv://ganbold13:ganbold13@photoapp.rmdcv5t.mongodb.net/photoapp_db";
mongoose.connect(uri);

const photoSchema = new Schema({
  pid: String,
  uid: String,
  imageURL: String,
  date: String,
  likeCount: Number,
  caption: String,
});

const userSchema = new Schema({
  username: String,
  bio: String,
  nickname: String,
  profile_pic: String,
  comments: Array,
  photos: Array,
  uid: String
});

const commentSchema = new Schema({
  text: String,
  date: String,
  cid: String,
  pid: String,
  uid: String
});

const PhotoModel = mongoose.model('photos', photoSchema);
const UserModel = mongoose.model('users', userSchema);
const CommentModel = mongoose.model('comments', commentSchema);


app.get('/', (req, res) => {
  console.log("Heloo")
});

app.get('/getPhotos', async (req, res) => {
  const { uid } = req.query;

  if (!uid) {
    return await PhotoModel.find({})
      .then((users) => res.json(users))
      .catch((err) => console.log(err));
  }

  await PhotoModel.find({ uid })
    .then((photos) => res.json(photos))
    .catch((err) => console.log(err));
});

app.get('/getPhotoById', async (req, res) => {
  const { pid } = req.query;

  if (!pid) {
    return await PhotoModel.find({})
      .then((photos) => res.json(photos))
      .catch((err) => console.log(err));
  }

  await PhotoModel.find({ pid })
    .then((photos) => res.json(photos))
    .catch((err) => console.log(err));
});

app.get('/getUsers', async (req, res) => {
  const { uid } = req.query;

  if (!uid) {
    return await UserModel.find({})
      .then((users) => res.json(users))
      .catch((err) => console.log(err));
  }

  await UserModel.find({ uid })
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

app.get('/getUserByName', async (req, res) => {
  const { username } = req.query;

  if (!username) {
    return await UserModel.find({})
      .then((users) => res.json(users))
      .catch((err) => console.log(err));
  }

  await UserModel.find({ username })
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

app.get('/getComments', async (req, res) => {
  const { pid } = req.query;

  if (!pid) {
    return await CommentModel.find({})
      .then((comments) => res.json(comments))
      .catch((err) => console.log(err));
  }

  await CommentModel.find({ pid })
    .then((comments) => res.json(comments))
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});