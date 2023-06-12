const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample users array
let users = [{
    id: "1",
    name: 'John Doe',
    age: 45,
    hairColor: 'black',
    hobbies: ['swimming', 'bicycle', 'video games'],
},
{
    id: "2",
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'brown',
    hobbies: ['gold', 'mathematics'],
},
{
    id: "3",
    name: 'Bahar Keshavarz',
    age: 25,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
}];

let products =  [{
    id: "1",
    name: 'Flat-screen TV',
    price: 1250,
    description: 'Get your new Smart TV at STEPHANIS. Amazing Prices. Free Home Delivery Wide range of top brands. Samsung, LG, SONY, Sharp, Metz, Tesla',
    rating: 4.5,
},
{
  id: "2",
  name: 'Running Shoes',
  price: 500,
  description: 'Run faster and further thanks to the high-quality Men\'s Running Shoes available at Sports Direct. Find the best brands to upgrade your running today!',
  rating: 3.8,
},
{
  id: "3",
  name: 'Fridge',
  price: 2000,
  description: 'Our wide range of refrigerators will help you take care of your family while making your kitchen shine. We can help you find the right fridge in no time.',
  rating: 5,
}];

// GET /users route to retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
   res.json(users.find(user => user.id === id));
  })

// GET /products route to retrieve all users
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(products.find(product => product.id === id));
});

// POST /users route to create a new user
app.post('/users/:id', (req, res) => {
  const { name, age, hairColor, id } = req.body.user;

  // Find the user with the given ID
  const userToUpdate = users.find(user => user.id === id);

  if (!userToUpdate) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update the user's name and email
  userToUpdate.name = name;
  userToUpdate.age = age;
  userToUpdate.hairColor = hairColor;

  res.json(userToUpdate);
});



// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
