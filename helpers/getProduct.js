import { readItem } from '@directus/sdk';
import {client}  from '../config/directus.js';

const directus_url = process.env.DIRECTUS_URL



export const getProduct = (async (product_id) => {
    try {
      // Fetch product details and get the image file product_ID
      const result = await client.request(readItem('product', product_id));
      const fileId = result.image;
  
      // Construct the image URL
      const finalresult = {
        ...result,
        image:`${directus_url}/assets/${fileId}`
      }
      return finalresult;
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  })

