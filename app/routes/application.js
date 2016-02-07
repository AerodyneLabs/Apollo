import Ember from 'ember';

export default Ember.Route.extend({
  title(tokens) {
    let base = 'Apollo';
    let separator = ' - ';

    let title = base;

    if (tokens && tokens.length) {
      title += ' | ' + tokens.join(separator);
    }

    return title;
  }
});
