import express from "express";
import { Sponser } from "../models/sponserModel.js";
import multer from "multer";
import { MongoClient } from "mongodb";
import { mongoDBURL } from "../config.js";
const client = new MongoClient(mongoDBURL);

const router = express.Router();

// Set up Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Front-End/src/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadLogo = upload.single("logo");

router.post("/sponsers", uploadLogo, async (req, res) => {
  try {
    await client.connect();
    // Get the database and collection on which to run the operation
    const db = client.db("test");
    const col = db.collection("sponsers");
    const imageName = `/src/assets/${req.file.filename}`;
    const newSponser = {
      logo: imageName,
    };

    const p = await col.insertOne(newSponser);

    return res.send(p);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: err.message });
  }
});

// get all articles in database
router.get("/sponsers", async (req, res) => {
  try {
    const sponsers = await Sponser.find({});
    return res.status(200).json({
      count: sponsers.length,
      data: sponsers,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

export default router;
