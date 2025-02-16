// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { swaggerUi, swaggerDocs } = require('./swagger');
// .env dosyasını kullanabilmek için
dotenv.config();

// Express app oluştur
const app = express();

// VS Code react debug etmek nasıl yapabilirim için bana bir promt önerirmisin anlayacağın şekilde 
// CORS ayarları
app.use(cors());



// JSON verisini işleyebilmek için middleware
app.use(express.json());

// Database bağlantısını kur
const db = require('./config/db');

// Rotaları dahil et
const categoryRoutes = require('./routes/category');
const notificationRoutes = require('./routes/notification');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

// Rotaları kullanmaya başla
app.use('/api/categories', categoryRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



// Sunucuyu başlat
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});
