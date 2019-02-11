import Route from '@ember/routing/route';

export default Route.extend({
  resetController(controller) {
    controller.set('showErrors', false);
  },

  actions: {
    willTransition(transition) {
      if (this.controller.isEditing) {
        let leave = window.confirm('Are you sure?');
        if (!leave) {
          transition.abort();
        } else {
          this.controller.set('isEditing', false);
        }
      }
    }
  }
});
