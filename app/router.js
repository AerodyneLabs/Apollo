import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('airspace', function() {
    this.route('centers', function() {
      this.route('detail', {path: ':id'});
    });
    this.route('airspaces', function() {
      this.route('detail', {path: ':id'});
    });
    this.route('navaids', function() {
      this.route('detail', {path: ':id'});
    });
    this.route('towers', function() {
      this.route('detail', {path: ':id'});
    });
  });
});

export default Router;
