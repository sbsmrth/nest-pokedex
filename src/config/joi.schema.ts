import * as Joi from 'joi';

// Will check the environment variables
// and validate them against the schema defined here.
// This "executes" first than the env.config.ts
// The default values defined here will be used as the env values there (if applicable).

export const JoiValidationSchema = Joi.object({
  MONGO_URI: Joi.required(),
  PORT: Joi.number().default(3000),
  DEFAULT_DATA_LIMIT: Joi.number().default(6),
});
