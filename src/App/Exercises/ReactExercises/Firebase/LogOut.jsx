import { logOut } from '../../../Firebase/logOut';

export const SingOutButton = () => {
  return (
    <button className="log-out-button" onClick={logOut}>
      Wyloguj
    </button>
  );
};
