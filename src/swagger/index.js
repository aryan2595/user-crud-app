const options = require("./options");
const components = require("./components");
const userDoc = require("./modules/userDoc");

module.exports = {
  ...userDoc,
  ...options,
  ...components,
};
