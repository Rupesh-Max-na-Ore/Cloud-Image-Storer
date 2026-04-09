const express = require('express');
const multer = require('multer');

const uploadImage = require('./services/storage.service');
const Post = require('./models/post.model');

const app = express();

app.use(express.json());

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
});

app.post('/create-post', upload.single('image'), async (req, res) => {
    try {
        console.log("1. Route hit");

        const result = await uploadImage(
            req.file.buffer,
            req.file.originalname
        );

        console.log("2. Image uploaded");

        const post = await Post.create({
            image: result.url,
            caption: req.body.caption
        });

        console.log("3. Mongo saved");

        res.status(201).json({
            message: "Post created successfully",
            post
        });

        console.log("4. Response sent");

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Something went wrong",
            details: err.message
        });
    }
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        return res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Something went wrong",
            details: err.message
        });
    }
});

module.exports = app;