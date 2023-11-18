import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const singIn = async (login, password) => {
  const auth = getAuth();
  //   signInWithEmailAndPassword(auth, login, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log('login successfull', user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log('login failed', errorMessage);
  //     });
  return signInWithEmailAndPassword(auth, login, password);
};
