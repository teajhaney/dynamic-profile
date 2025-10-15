// The structure of the Cat Facts API response
export interface CatFactResponse {
  fact: string;
  length: number;
}

// The structure of the user object in the final response
export interface UserProfile {
  email: string;
  name: string;
  stack: string;
}

// The structure of the final required /me endpoint response
export interface ProfileResponse {
  status: 'success';
  user: UserProfile;
  timestamp: string; 
  fact: string;
}
