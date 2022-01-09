const Activity = require("./src/activity"),
Storage = require('./src/storage'),
configuration = require('./config'),
App = {
    activity: new Activity( configuration),
    storage: new Storage( configuration)
};