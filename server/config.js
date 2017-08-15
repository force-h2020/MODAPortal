const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/moda',
  port: process.env.PORT || 8000,
  wordpress: process.env.WP || 'https://emmc.info' // Wordpress with JSON API Auth support
}

export default config
