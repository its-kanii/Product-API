const Item = require('../models/Item');

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.addItem = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const newItem = new Item({ name, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const updated = await Item.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndDelete(id);
  res.json({ message: 'Item deleted successfully' });
};
