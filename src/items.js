const items = [
  {id: 1, name: 'Omena'},
  {id: 2, name: 'Appelsiini'},
  {id: 3, name: 'Porkkana'},
  {id: 4, name: 'Mandariini'},
];

const getItems = (req, res) => {
  res.json(items);
};

// TODO: add getById, post, put & delete

export {getItems};
