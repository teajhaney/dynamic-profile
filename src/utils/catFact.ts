import axios, { AxiosError } from 'axios';

import logger from './logger.ts';
import type { CatFactResponse } from '../types.ts';

export const fetchCatFact = async (): Promise<string> => {
  logger.info('Fetching cat fact end...');

  const url = 'https://catfact.ninja/fact';
  const timeout = parseInt('5000', 10);

  if (!url) return 'Could not fetch a fact due to missing API URL in config.';

  try {
    const response = await axios.get<CatFactResponse>(url, {
      timeout,
    });
    return response.data.fact;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.code === 'ECONNABORTED') {
        // Timeout error
        console.error('Cat Facts API call timed out:', axiosError.message);
        return 'Cat fact service is currently unavailable (timeout).';
      }
    }
    //  network or API-side error
    console.error('Failed to fetch cat fact:', (error as Error).message);
    //  fallback message
    return 'Failed to fetch a cat fact due to an external API error.';
  }
};
