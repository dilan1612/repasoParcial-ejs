const routes = require('express').Router();
const guitars = require('../data/guitars');  // Asegúrate de que 'guitars' sea un 'Map' o una estructura mutable

routes.get('/', (req, res) => {
  return res.render('index', { 'title': 'Página Inicial', 'data': guitars });
});

routes.get('/new-record', (req, res) => {
  return res.render('new-record', { 'title': 'Agregar Guitarra' });
});

routes.get('/edit/:id', (req, res) => {
    const guitarId = parseInt(req.params.id, 10);
    const guitar = guitars.get(guitarId);  // Obtener la guitarra por ID
    
    if (!guitar) {
      return res.status(404).send('Guitarra no encontrada');
    }
  
    return res.render('edit', { title: 'Editar Guitarra', id: guitarId, name: guitar.name });
  });

  routes.post('/edit/:id', (req, res) => {
    const guitarId = parseInt(req.params.id, 10);
    const { name } = req.body;
  
    // Verifica que la guitarra existe en el mapa
    if (guitars.has(guitarId)) {
      guitars.set(guitarId, { name });  // Actualiza el nombre de la guitarra
      console.log(`Guitarra actualizada: id=${guitarId}, name=${name}`);
      return res.redirect('/');
    } else {
      return res.status(404).send('Guitarra no encontrada');
    }
  });

  routes.get('/delete/:id', (req, res) => {
    const guitarId = parseInt(req.params.id, 10);
  
    if (guitars.has(guitarId)) {
      guitars.delete(guitarId);
      console.log(`Guitarra eliminada: id=${guitarId}`);
      return res.redirect('/');
    } else {
      return res.status(404).send('Guitarra no encontrada');
    }
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
