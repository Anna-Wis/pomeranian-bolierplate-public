import { AuthenticateUser } from './autenticateUser';
import { app } from '../../../Firebase/firebaseConfig';
import { useAuthStatus } from '../../../Firebase/useAuthStatus';
import { SingOutButton } from './LogOut';
import { Posts } from './Posts';
import './styles.css';

export const Firebase = () => {
  console.log('firebase: ', app.options.projectId);
  const [isLogged, user] = useAuthStatus();

  return (
    <div>
      <h1>Uwierzytelnianie Firebase</h1>
      {/* mozna przerobić na 3 ststusy isLogged */}
      {isLogged === undefined ? null : (
        <div>
          {isLogged ? (
            <div>
              `Jesteś zalogowany jako ${user?.uid}`
              <SingOutButton /> <Posts />
            </div>
          ) : (
            <AuthenticateUser />
          )}
        </div>
      )}
    </div>
  );
};
