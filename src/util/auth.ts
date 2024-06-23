import axios from 'axios';

const API_KEY = 'AIzaSyDTY3lTqamvjjSXhuPMAPz89WbVvIZQuXs';

type AuthenticateMode = 'signUp' | 'signInWithPassword';
type Email = string;
type Password = string;

async function authenticate(
  mode: AuthenticateMode,
  email: Email,
  password: Password,
) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email: Email, password: Password) {
  return authenticate('signUp', email, password);
}

export function login(email: Email, password: Password) {
  return authenticate('signInWithPassword', email, password);
}
