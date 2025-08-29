const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fetch = require('node-fetch');
const FormData = require('form-data');

const app = express();
const upload = multer();

app.use(cors());

// Proxy endpoint for Google Apps Script
app.post('/submit-merch', upload.any(), async (req, res) => {
  try {
    const form = new FormData();
    // Append text fields
    Object.keys(req.body).forEach((key) => {
      form.append(key, req.body[key]);
    });
    // Append files
    req.files.forEach((file) => {
      form.append(file.fieldname, file.buffer, file.originalname);
    });

    // Google Apps Script endpoint
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxm00d8wdRwX_LqEptIlzcyA0xx2zTOn6eHWRg7XMmwFpgB71Ja7UJQ-6scVfXBCfE/exec';
    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: form,
    });
    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch (err) {
      return res.status(500).json({ status: 'error', message: 'Invalid response from Apps Script', raw: text });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Node.js backend running on port ${PORT}`);
});
