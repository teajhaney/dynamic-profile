import type { Response, Request } from 'express';
import { handleError } from '../middleware/handleError.ts';
import { fetchCatFact } from '../utils/catFact.ts';
import type { ProfileResponse, UserProfile } from '../types.ts';
import { MY_EMAIL, MY_NAME, MY_STACK } from '../config/index.ts';

export const fetchDynamicProfileInfo = async (req: Request, res: Response) => {
  try {
    // fetch dynamic cat fact
    const fact = await fetchCatFact();

    //static user data
    const user: UserProfile = {
      email: MY_EMAIL,
      name: MY_NAME,
      stack: MY_STACK,
    };

    //Generate the dynamic timestamp in ISO 8601 format
    const timestamp = new Date().toISOString();

    //response object
    const responseData: ProfileResponse = {
      status: 'success',
      user: user,
      timestamp: timestamp,
      fact: fact,
    };

    // Send the response
    res.status(200).json(responseData);
  } catch (error) {
    handleError(res, error, 'Fetch dynamic');
  }
};
