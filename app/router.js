import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('bands', function () {
    this.route('band', { path: ':id' }, function () {
      this.route('songs');
      this.route('details');
    });
  });
});

export default Router;
