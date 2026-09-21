const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cloud Computing</title>
    </head>
    <body>
      <h1>Halo dari Render! 🚀</h1>
      <p>Website ini berhasil di-deploy menggunakan cloud computing.</p>
      <p>Nama: Dhika Haykal Hildan</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
