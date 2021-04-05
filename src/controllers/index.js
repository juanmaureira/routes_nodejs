  const packageJson = require('../../package.json');

  const indexRoute = async (req, res) => {
      return res.json({
        message: {
          version: packageJson.version
        }
      });
  };
  
  module.exports = {
    indexRoute
  };