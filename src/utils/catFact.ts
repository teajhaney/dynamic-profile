import axios, { AxiosError } from 'axios';

import logger from './logger.ts';
import { CAT_FACT_API_URL, CAT_FACT_TIMEOUT } from '../config/index.ts';
import type { CatFactResponse } from '../types.ts';

export const fetchCatFact = async (): Promise<string> => {
  logger.info('Fetching cat fact end...');

  const url = CAT_FACT_API_URL;
  const timeout = parseInt(CAT_FACT_TIMEOUT || '5000', 10);

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
