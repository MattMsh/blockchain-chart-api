import { z } from 'zod';
import { config } from 'dotenv-safe';
config();

const integer = z.coerce.number().int();

export default () => ({
  port: integer.parse(process.env['PORT'], { path: ['port'] }) || 3000,
});
