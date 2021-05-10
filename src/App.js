
import {Button, Channel} from './components';
import {signInWithGoogle, signOut} from './login';
import {useAuthState} from './hooks';
import { firebase } from './config/firebase';

function App() {
  //Entegracion del hook useAuthState
  const { user, initializing } = useAuthState(firebase.auth());
  //Renderezar en funcion de la existencia de un usuario con operador ternario.
  const renderLoding = () => {
    if (initializing) {
      return <div>
        <h1>Loading ...</h1>
        </div>
    }
  }
return (
  <div>
    { renderLoadiding()}
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

