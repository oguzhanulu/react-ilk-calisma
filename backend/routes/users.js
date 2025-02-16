// backend/routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users'); // Admin modeli (User)

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Kullanıcıyı veritabanında bulma
    console.log('--------------------------')
    console.log(email);
    console.log(password);

    const user = await User.findOne({email:email});
    console.log(user)

    if (!user) {
      return res.status(401).json({ message: '1E-posta veya şifre hatalı' });
    }

    // Şifreyi doğrulama
    console.log(user.password);
    console.log(password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("12345", salt);
    const validPassword = await bcrypt.compare(password, hashedPassword)

    // password =düz kullanıcının girdiği password
    //db de passwordu hash olarak tutacaz
    console.log(validPassword)
    if (!validPassword) {
      return res.status(401).json({ message: 'E-posta veya şifre hatalı' });
    }
/*
Eğer veritabanına şifreyi hashleyerek kaydetmediyseniz, 
ve düz metin olarak kaydettiyseniz, 
bcrypt.compare doğru şekilde çalışmaz. 
Çünkü, bcrypt hash algoritması şifreyi daha güvenli hale 
getirebilmek için karmaşık bir hash oluşturur.*/
    // JWT Token oluşturma
    const token = jwt.sign({ id: user.id, email: user.email }, 'secretkey', { expiresIn: '1h' });

    return res.json({ 
      message: 'Başarıyla giriş yapıldı', 
      token, 
      name: user.name // Admin adı da gönderiliyor
    });
  } catch (error) {
    return res.status(500).json({ message: 'Sunucu hatası',error:error.message });
  }
});

module.exports = router;
