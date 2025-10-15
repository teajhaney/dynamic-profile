import type { Response, Request } from 'express';
import { handleError } from '../middleware/handleError.ts';
import { fetchCatFact } from '../utils/catFact.ts';
import type { ProfileResponse, UserProfile } from '../types.ts';


export const fetchDynamicProfileInfo = async (req: Request, res: Response) => {
  try {
    // fetch dynamic cat fact
    const fact = await fetchCatFact();

    //static user data
    const user: UserProfile = {
      email: 'teajhaney@gmail.com',
      name: 'Yusuf Tijani Olatunde',
      stack: 'Node.js/Express/JavaScript/TypeScript',
    };

    //Generate the dynamic timestamp in ISO 8601 format
    const timestamp = new Date().toISOString();

    //response object
    const responseData: ProfileResponse = {
      status: 'success',
      user,
      timestamp,
      fact,
    };

    // Send the response
    res.status(200).json(responseData);
  } catch (error) {
    handleError(res, error, 'Fetch dynamic');
  }
};
