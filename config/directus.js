import { createDirectus, staticToken, rest, } from '@directus/sdk';

const directus_api_key = process.env.DIRECTUS_API_KEY
const directus_url = process.env.DIRECTUS_URL

export const client = createDirectus(directus_url)
  .with(staticToken(`${directus_api_key}`))
  .with(rest());

// module.exports = {
//     client
// }