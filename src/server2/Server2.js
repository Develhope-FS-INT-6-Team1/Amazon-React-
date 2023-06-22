const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pool = new Pool({
  connectionString: 'postgres://lxsgynnf:qavuBKsGCqyUJo56TmQTL98Vk3rmsT3A@chunee.db.elephantsql.com/lxsgynnf',
  ssl: { rejectUnauthorized: false }
});



const insertProductsDataQuery = `
INSERT INTO Products (productId, productName, price, aboutThisItem, image) VALUES
  (1, 'Invicta Men''s Pro Diver Collection Coin-Edge Automatic Watch', '$85.03', '• Stainless steel case 40mm diameter x 14.1mm thick; Exhibition case back; Black dial; Luminous hands.Band Length: 205mm
  • NH35A Japanese Automatic movement, 24 jewel; Assembled in Malaysia; Watch weight 155 grams
  • Includes gift box, instructions and 3 year limited manufacturer warranty; Invicta Customer Service can be reached at 1-800-327-7682 for questions (re: Additional links, band replacement, band adjustment, warranty questions, etc.)', 'https://m.media-amazon.com/images/I/71RdP+pYfbL._AC_UY500_.jpg'),
  (2, 'Logitech G502 HERO High Performance Wired Gaming Mouse', '$34.00', 'Hero 25K sensor through a software update from G HUB, this upgrade is free to all players: Our most advanced, with 1:1 tracking, 400-plus ips, and 100 - 25,600 max dpi sensitivity plus zero smoothing, filtering, or acceleration
  11 customizable buttons and onboard memory: Assign custom commands to the buttons and save up to five ready to play profiles directly to the mouse
  Adjustable weight system: Arrange up to five removable 3.6 grams weights inside the mouse for personalized weight and balance tuning
  Programmable RGB Lighting and Lightsync technology: Customize lighting from nearly 16.8 million colors to match your team''s colors, sport your own or sync colors with other Logitech G gear
  Mechanical switch button tensioning: Metal spring tensioning system and pivot hinges are built into left and right gaming mouse buttons for a crisp, clean click feel with rapid click feedback
  1 year hardware limited warranty', 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg'),
  (3, 'Hot Wheels Fast and Furious 5-Pack of Toy Race and Drift Cars in 1:64 Scale with Exclusive Decos', '$6.25', 'Hit the accelerator on a Hot Wheels collection with this 5-Pack of Fast & Furious themed toy cars!
  The multipack includes 1:64 scale replicas of a Chevy Chevelle, Aston Martin 1963 DB5, 1967 Mustang, 1970 Dodge Charger R/T and the 1994 Toyota Supra.
  Fast fans will love 5 cool toy street racers from the blockbuster franchise for play or display.
  Each 1:64 scale vehicle is designed and inspired by models in the films.
  This themed set is a must-have for Hot Wheels and Fast & Furious fans.', 'https://m.media-amazon.com/images/I/619FxH4rtOL._AC_SL1500_.jpg'),
  (4, 'Xiaomi Redmi Buds 3 Pro Wireless in-Ear Headphones Bluetooth', '$47.50', '35dB deep noise cancellation. Allowing you to enjoy a world with less background noise: The earbuds adopt the dual active noise cancellation technology with feedback and feed-forward microphones. They effectively cancel ambient noise and reduce excess noise in the ear canal. Noise cancellation can be as deep as 35dB*.', 'https://m.media-amazon.com/images/I/719Te1m4qRL._AC_SL1500_.jpg'),
  (5, 'Skechers Women''s D''Lites Fresh Start Fashion Sneaker', '$48.56 - $49.99', '80% Leather, 20% Synthetic
  Imported
  Rubber sole
  Platform measures approximately 1 inches inches
  Lightweight ; 1 1/4 inch built in heel.
  Flexible sole', 'https://m.media-amazon.com/images/I/61bBZe-hCrL._AC_UX675_.jpg'),
  (6, 'Milwaukee 2953-20 18V Lithium-Ion Brushless Cordless 1/4\'\' Hex Impact Driver (Bare Tool), Red', '$104.35', 'Brand: Milwaukee
  Power Source: Battery Powered
  Maximum Rotational: Speed 3900 RPM
  Voltage: 18 Volts', 'https://m.media-amazon.com/images/I/61nNyksoKbL._AC_SL1500_.jpg'),
  (7, 'Philips Norelco Multigroomer All-in-One Trimmer Series 7000', '$58.49', 'The all in 1 trimmer for your choice of beard, head, body, and/or face hair styling with 23 pieces for all your trimming needs
  The DualCut technology offers maximum precision and includes 2x more self sharpening blades that last up to 5 years
  To deliver maximum torque and power, the all in 1 trimmer includes a full metal motor and a drive train that''s been reinforced with tempered steel
  Our unique cutting guards are reinforced with ultra strong fiberglass material to prevent bending and buckling, ensuring an even trim every time
  Lithium ion rechargeable battery delivers up to 5 hours of run time per charge', 'https://m.media-amazon.com/images/I/71YCllvavVL._SL1500_.jpg'),
  (8, 'A Single Shard Book', '$6.09', 'Tree-ear is fascinated by the celedon ware created in the village of Ch’ulp’o. He is determined to prove himself to the master potter, Min—even if it means making a solitary journey to present Min’s work in the hope of a royal commission . . . or arriving at the royal court with nothing but a single celadon shard.', 'https://m.media-amazon.com/images/I/51ZTziDmJeL._SX336_BO1,204,203,200_.jpg'),
  (9, 'Dove Body Wash with Pump Deep Moisture For Dry Skin Moisturizing', '$21.58', '24HR RENEWING MICROMOISTURE: Dove Deep Moisture Body Wash gently cleanses and deeply moisturizes the skin, leaving it renewed and healthy-looking for 24 hours
  FOR SOFT, SMOOTH SKIN: Our deeply moisturizing body wash, formulated with millions of MicroMoisture droplets, leaves skin soft as silk
  NOURISHES THE DRIEST SKIN: Dove Deep Moisture Body Wash for dry skin actively regenerates skin’s natural moisture and deeply nourishes the driest skin, leaving it soft and hydrated
  HOW TO USE: Squeeze a generous amount of Dove Deep Moisture Body Wash into your palms. Massage the moisturizing body wash onto your skin, taking a moment to enjoy the rich lather before rinsing off
  NO.1 DERMATOLOGIST-RECOMMENDED BODY WASH BRAND: From the No.1 dermatologist-recommended body wash brand, this body wash, made with plant-based moisturizers, gently cleanses your skin and nourishes its microbiome
  THOUGHTFULLY MADE: This sulfate-free body wash is vegan and Dove is PETA approved, meaning we do not test on animals, anywhere in the world. Our body wash is packaged in 100% recycled plastic bottles, so you can feel good about switching to Dove', 'https://m.media-amazon.com/images/I/71lPw5gA3-L._SL1500_.jpg'),
  (10, 'Mandy''s 28pcs Multicolor Artificial Tulip Silk Flowers', '$18.99', 'Materials: Flower is made of soft Polyurethane (PU), stem is made of Plastic.
  Size: Full height: 13.5”/35cm; Each flower head diameter:1.5”/3.8cm. Including 5pcs red, 5pcs white, 5pcs dark purple, 5pcs light purple, 4pcs yellow and 4pcs sunset tulips per pack and vase not included.
  Our designers used the color of real tulips as a reference to create variety of colors. hope they looks more like real flowers. In addition, the designers use their imagination to give this tulip more colors, symbolizing a colorful life. We hope to give people who like tulips a good life experience, and more colors are still being continuously updated.
  Our design concept is based on real tulips, and the table and popular vase size of many families. Under these conditions this mini tulip was born. It looks more real and more suitable as a centerpiece. Tulip has individual stem, they are soft and easy to bend or cut, it may DIY any of decorations you like.
  Different color can be used in different scenes. Such as sunset or orange can DIY to the carrot wreath in Easter. Green tulips can be used as decorations for St. Patrick''s Day. When Christmas day coming, red tulips will be a good choice. Another special color is black, use it for Halloween, make amazing decorations.', 'https://m.media-amazon.com/images/I/71wkTGNOn0L._AC_SL1500_.jpg');
`;


pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
})

 

// Function 1: Get all the products
function getAllProducts() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Products';

    pool.query(query, (error, results) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(results.rows);
    });
  });
}

// Endpoint to get all products
app.get('/products', (req, res) => {
  getAllProducts()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to retrieve products' });
    });
});

// Function 2: Login function
function login(username, password) {
  return new Promise((resolve, reject) => {
    const query = `SELECT userID FROM Users WHERE userName = '${username}' AND password = '${password}'`;

    pool.query(query, (error, results) => {
      if (error) {
        reject(error);
        return;
      }

      if (results.rows.length > 0) {
        resolve(results.rows[0].userid);
      } 
      else {
        reject(new Error('Invalid username or password'));
      }
    });
  });
}

// Endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  login(username, password)
    .then((userId) => {
      res.json({ userId });
    })
    .catch((error) => {
      res.status(401).json({ error: 'Invalid username or password' });
    });
});

// Function 3: Register function
function register(username, password) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO Users (totalmoney,userName, password,preferedlanguage,preferedcurrency) VALUES (0,'${username}', '${password}','En','$')`;
    const values = [username, password];
    console.log(query);
    pool.query(query, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      const query = `select userId from Users where username =  '${username}' AND password = '${password}' `;
      //create another query to get this userID
      pool.query(query, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        //create another query to get this userID
        console.log(results.rows[0].userid);
        resolve(results.rows[0].userid);
      });

      console.log(results);
    });
  });
}

// Endpoint for user registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  console.log(username,password);

  register(username, password)
    .then((userId) => {
      console.log("User Id:",userId);
      res.json({ userId });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to register user' });
    });
});

// Function 4: Get items by product ID
function getItemsByProductId(productId) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Products WHERE productId = ${productId} `;
    //const values = [productId];
    console.log(query);

    pool.query(query, (error, results) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(results.rows[0]);
    });
  });
}

// Endpoint to get items by product ID
app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  console.log(productId);

  getItemsByProductId(productId)
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to retrieve items' });
    });
});


app.listen(3000, () => {
  console.log(`Server started on port ${port}`);
});


/*
// Call the functions or perform other operations here
getAllProducts()
  .then((products) => {
    console.log('All products:', products);
  })
  .catch((error) => {
    console.error('Error retrieving products:', error);
  });

login('johndoe', 'abc123')
  .then((userId) => {
    console.log('Logged in successfully. User ID:', userId);
  })
  .catch((error) => {
    console.error('Error logging in:', error);
  });

register('newuser', 'newpassword')
  .then((userId) => {
    console.log('Registered successfully. User ID:', userId);
  })
  .catch((error) => {
    console.error('Error registering:', error);
  });

getItemsByProductId(1)
  .then((items) => {
    console.log('Items with product ID 1:', items);
  })
  .catch((error) => {
    console.error('Error retrieving items:', error);
  });

  */