
import { signInWithGoogle, signOut} from './login';
import Button from './components/Button';
import { useAuthState } from './hooks';

function App() {
  //Entegracion del hook useAuthState
  const { user, initializing } = useAuthState(firebase.auth());
  //Renderezar en funcion de la existencia de un usuario con operador ternario.
return (
  <div>
    {
      user ? (
        <>
        <Button onClick={signOut} > Sing in with Google</Button>
      <p> Bienvenidos al CHAT!</p>
      </>
        ) : <Button onClick={signInWithGoogle} > Sing in with  Google </Button>
    }

  </div>
);
  }  
  
export default App;

