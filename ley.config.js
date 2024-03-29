import { setEnvironmentVariables } from './app/util/config.js';

setEnvironmentVariables();

const options = {
  ssl: Boolean(process.env.POSTGRES_URL),
};

export default options;
