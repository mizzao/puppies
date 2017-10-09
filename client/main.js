import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './main.html';

Session.setDefault("showAll", true);

Template.hello.helpers({
  showAll() {
    return Session.equals("showAll", true);
  },
  text() {
    if (Session.equals("showAll", true)) {
      return "Favorites";
    }
    else {
      return "All";
    }
  }
});

Template.hello.events({
  'click button'(event, instance) {
    Session.set("showAll", !Session.get("showAll"));
  },
});

Template.info.helpers({
  images: function() {
    if (Session.equals("showAll", true)) {
      return Pictures.find({});
    }
    else {
      return Pictures.find({fav: true});
    }
  }
});

Template.image.helpers({
  favClass: function() {
    if (this.fav) {
      return "favorite";
    }
    return "";
  }
});

Template.image.events({
  "click img"(e, i) {
    Pictures.update(this._id, {$set: {fav: !this.fav}});
  }
})