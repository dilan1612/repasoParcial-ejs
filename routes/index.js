const routes = require('express').Router();
const guitars = require('../data/guitars');  // Asegúrate de que 'guitars' sea un 'Map' o una estructura mutable

routes.get('/', (req, res) => {
  return res.render('index', { 'title': 'Página Inicial', 'data': guitars });
});

routes.get('/new-record', (req, res) => {
  return res.render('new-record', { 'title': 'Agregar Guitarra' });
});

routes.post('/new-record', (req, res) => {
  const { id, name } = req.body;
  console.log(`Se recibieron id=${id} name=${name}`);

  // Asegúrate de que `guitars` sea accesible y modificable
  if (guitars instanceof Map) {
    guitars.set(Number(id), { name });
  }

  console.log('Se ha agregado el nuevo registro y se redireccionará a la página principal');
  res.redirect('/');
});

module.exports = routes;
