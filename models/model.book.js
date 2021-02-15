const settings = require("../config/db.settings");

// Declare the Schema of the Mongo model
var BookSchema = new settings.mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    published_date: {
      type: Date,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    quantity: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);
BookSchema.index({ name: 1 });

exports.BookSchema = settings.mongoose.model(
  "bookinfo",
  BookSchema,
  "bookinfo"
);
