export default function() {
  this.get('/bands');
  this.get('/bands/:id');
  this.post('/bands');
  this.post('/songs');
}
