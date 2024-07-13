// index.js
const express = require('express');
const path = require('path');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const fs = require('fs');
ffmpeg.setFfmpegPath(ffmpegPath);

const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/convert', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL is required');
    }
    try {
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title;
        const sanitizedTitle = Math.floor(new Date().getTime() / 1000);
        const outputFilePath = path.join(__dirname, 'public', 'audios', `${sanitizedTitle}.mp3`);

        if (!fs.existsSync(path.join(__dirname, 'public', 'audios',))) {
            fs.mkdirSync(path.join(__dirname, 'public', 'audios',));
        }

        const stream = ytdl(url, { filter: 'audioonly' });

        ffmpeg(stream)
            .audioBitrate(128)
            .save(outputFilePath)
            .on('end', (data) => {
                res.status(200).send({title: title, link: "/audios/"+sanitizedTitle+".mp3"});
            })
            .on('error', (err) => {
                console.error(`Error: ${err.message}`);
                res.status(500).send('Internal Server Error');
            });

    } catch (err) {
        console.error(`Error: ${err.message}`);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});