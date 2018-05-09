import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'yoga',
      title: 'Yoga',
      image: "assets/images/yoga.jpeg",
      description: 'I have been doing yoga for 1 year, doing it both in studio and workplace. Absolutely LOVE it!'
    }, {
      id: 'swimming',
      title: 'Swimming',
      image: 'assets/images/swimming.jpeg',
      description: 'Enjoy places with water around, love diving too!'
    }, {
      id: 'travel',
      title: 'Travel',
      image: 'assets/images/travel.jpeg',
      description: 'Love travel around the world. Went Japan and Fiji. Really want to go again!'
    }];
  }
});
