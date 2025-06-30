const { NODE_ENV, MONGO_URI, PORT, DEFAULT_DATA_LIMIT } = process.env;

export const EnvConfiguration = () => ({
  environment: NODE_ENV || 'dev',
  mongodb: MONGO_URI,
  port: PORT || 3000,
  defaultDataLimit: DEFAULT_DATA_LIMIT || 7,
});
