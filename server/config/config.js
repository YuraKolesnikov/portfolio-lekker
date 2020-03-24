const config = {
  /* Delete second option when deploying! */
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/lekker-africa',
  port: process.env.PORT || 3000
}

module.exports = config