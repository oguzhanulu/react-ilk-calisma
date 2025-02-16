const mongoose = require('mongoose');
require('dotenv').config();  // .env dosyasını kullanabilmek için

// Veritabanı bağlantısı
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/react-ilk-calisma-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB bağlantısı başarılı'))
.catch((err) => console.error('MongoDB bağlantısı başarısız:', err));

// Bağlantıyı dışarıya aktarma
module.exports = mongoose;
