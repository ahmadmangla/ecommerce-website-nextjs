
export const Constants: Constants = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};

interface Constants {
PORT: string | undefined;
  DB_URL: string | undefined;
  APP_SECRET: string | undefined;
  EXCHANGE_NAME: string | undefined;
  MSG_QUEUE_URL: string | undefined;
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
}