// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Brand } = initSchema(schema);

export {
  Brand
};