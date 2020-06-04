
module.exports = plugin;

function plugin(config){
    return function(files, metalsmith, done) {
        setImmediate(done);
        Object.keys(files).forEach(function(file) {
            const data = files[file];
            const path = data.path;
           if (path in config) {
               Object.keys(config[path]).forEach(configKey => {
                   if (configKey in data) {
                       data[configKey] = config[path][configKey] || data[configKey];
                   }
               });
           }
        });
    };
};

