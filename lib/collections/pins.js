Pins = new Mongo.Collection('pins');

var schema = new SimpleSchema({
  text: {
    type: String
  },
  imageUrl: {
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
  }
});

Pins.attachSchema(schema);
