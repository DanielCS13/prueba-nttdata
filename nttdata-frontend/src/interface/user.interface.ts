export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  email: string;
  dob: {
    date: string; // formato ISO
  };
  picture: {
    large: string;
  };
}
