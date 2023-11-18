import { getAuth, signOut } from 'firebase/auth';
export const logOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log('wylogowywanie błędne', error);
    });

  console.log('wylogowywanie');
};
