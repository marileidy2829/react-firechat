import { signInWithGoogle, signOut} from './login';
import Button from './components/Button';

function App(){
  
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

