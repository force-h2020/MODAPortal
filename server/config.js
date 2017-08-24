const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/moda',
  port: process.env.PORT || 8000,
  wordpress: process.env.WP || 'https://emmc.info', // Wordpress with JSON API Auth support
  /* If the session secret is known (commited to Github) every body can decrypt the app's cookies */
  sessionSecret: process.env.SESSION_SECRET || "replacewitharandomstring"
}

export default config
