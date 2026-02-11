const express = require('express');
const app = express();
app.use(express.json());

app.get('/cart/items', (req, res) => {
    res.json([{ id: 1, qty: 2 }]);
});

app.post('/cart/add', (req, res) => {
    res.json({ message: 'Added to cart' });
});

app.delete('/cart/remove', (req, res) => {
    res.json({ message: 'Removed from cart' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
