// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://hieuhmle:240294hieu@reactreserve.qmzas.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/hieuhmle/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
