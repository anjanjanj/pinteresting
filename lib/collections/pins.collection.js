Pins = new Mongo.Collection('pins');

var schema = new SimpleSchema({
  text: {
    type: String,
    max: 40
  },
  imageUrl: {
    type: String
  },
  authorName: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  likes: {
    type: [String],
    optional: true
  }
});

Pins.attachSchema(schema);
