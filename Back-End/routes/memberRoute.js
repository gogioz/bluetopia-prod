import express from "express";
import { Member } from "../models/memberModel.js";
import multer from "multer";
import { MongoClient, ObjectId } from "mongodb";
import { mongoDBURL } from "../config.js";
const client = new MongoClient(mongoDBURL);
const router = express.Router();

// Set up Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Front-End/public/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadImages = upload.array("images", 2);
// const uploadXsImages = upload.single("xsimage");

// post new Article
router.post("/team", uploadImages, async (req, res) => {
  try {
    const {
      title,
      titleTrans,
      about1,
      about1Trans,
      about2,
      about2Trans,
      name,
      nameTrans,
      link,
    } = req.body;
    const imageNames = req.files.map((image) => `${image.filename}`);

    const newMember = {
      title: title,
      titleTrans: titleTrans,
      about1: about1,
      about1Trans: about1Trans,
      about2: about2,
      about2Trans: about2Trans,
      name: name,
      nameTrans: nameTrans,
      link: link,
      images: imageNames,
    };

    // create the new member
    const member = await Member.create(newMember);

    // if success send the member
    return res.status(201).send(member);
    // if not handle the error
  } catch (err) {
    console.log(err.message);
    console.log(req.body);
    res.status(500).send({ message: err.message });
  }
});

// get all articles in database
router.get("/team", async (req, res) => {
  try {
    const articles = await Member.find({});
    return res.status(200).json({
      count: articles.length,
      data: articles,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// get one article in database by id
router.get("/team/:id", async (req, res) => {
  try {
    // Get the database and collection on which to run the operation
    const database = client.db("test");
    const member = database.collection("members");
    // Query for a movie that has the title 'The Room'

    const { id } = req.params;
    // Execute query
    const article = await member.findOne({ _id: id });
    // Print the document returned by findOne()
    return res.status(200).json(article);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});
router.put("/team/:id", uploadImages, async (req, res) => {
  try {
    const database = client.db("test");
    const member = database.collection("members");
    const {
      title,
      titleTrans,
      name,
      nameTrans,
      about1,
      about1Trans,
      about2,
      about2Trans,
      link,
    } = req.body;

    const imageNames = req.files.map((image) => `${image.filename}`);

    const update = {
      $set: {
        title: title,
        titleTrans: titleTrans,
        about1: about1,
        about1Trans: about1Trans,
        about2: about2,
        about2Trans: about2Trans,
        name: name,
        link: link,
        nameTrans: nameTrans,
        images: imageNames,
      },
      $inc: {
        views: 1,
      },
    };

    const { id } = req.params;

    const filter = { _id: id };

    const result = await member.updateOne(filter, update);
    return res.send(result);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// delete Member from the database
router.delete("/team/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Member.findByIdAndDelete(id);
    if (result === false) {
      return res.status(404).send({ message: "Member not found" });
    }
    return res.status(200).send({ message: "Member deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "Member not found" });
  }
});

export default router;
