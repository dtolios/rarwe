import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('band');
  },

  actions: {
    didTransition() {
      document.title = 'Bands - Rock & Roll';
    }
  }
});
