const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json());


const pool = new Pool({
  connectionString: 'postgres://lxsgynnf:qavuBKsGCqyUJo56TmQTL98Vk3rmsT3A@chunee.db.elephantsql.com/lxsgynnf',
  ssl: { rejectUnauthorized: false }
});




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
    const query = `SELECT * FROM Users WHERE userName = '${username}' AND password = '${password}'`;
    console.log(query);
    pool.query(query, (error, results) => {
      console.log(results);
      if (error) {
        reject(error);
        return;
      }

      if (results.rows.length > 0) {
        resolve(results.rows[0]);
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
      res.json( userId );//return also preferd currency and prefered language. 
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
        console.log("error Message" + error);
        return;
      }
      const query = `select userId from Users where username =  '${username}' AND password = '${password}' `;
      console.log(query);
      
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


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


  // Function to update user details
function updateUserDetails( username, password) {

  return new Promise((resolve, reject) => {
    const query = 'UPDATE Users SET password = $2 WHERE username = $1';
    const values = [username, password];

    pool.query(query, values, (error, results) => {
      if (error) {
        reject(error);
        console.log(error);
        return;
      }

      console.log("Updated Succesfully");

      resolve();
    });
  });
}

// Endpoint to update user details
app.put('/api/users/update', (req, res) => {
  const { username, password } = req.body;

  updateUserDetails(username, password)
    .then(() => {
      res.status(200).json({ message: 'User details updated successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to update user details' });
    });
});