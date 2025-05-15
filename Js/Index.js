const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

app.post('/upload', upload.single('apk'), (req, res) => {
  const fileUrl = `https://${req.headers.host}/${req.file.filename}`;
  res.json({ message: 'Upload successful', url: fileUrl });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
