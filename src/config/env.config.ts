// Transform environment variables into a configuration object
// Will be injected into the ConfigService
// and used throughout the application.

export const EnvConfiguration = () => {
  const { NODE_ENV, MONGO_URI, PORT, DEFAULT_DATA_LIMIT } = process.env;

  return {
    environment: NODE_ENV || 'dev',
    mongodb: MONGO_URI,
    port: +PORT! || 3000,
    defaultDataLimit: +DEFAULT_DATA_LIMIT! || 7,
  };
};
