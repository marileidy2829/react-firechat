import {
  db,
  googleAuthProvider,
  firebase
} from './config/firebase';
import Button from './components/Button';

function App() {

  const signInWithGoogle = async () => {
    // coloca el lenguaje de preferencia del dispositiovo
    firebase.auth().useDeviceLanguage();
    //inicio el proceso de login dentro de un try... catch
   try{
    await firebase.auth().signInWithPopup(googleAuthprovider); 
    } catch (e) {
      console.error (e.message);
    } 
  };

  //realiza el componente button
  return (
    <div> 
      <Button onclick={singInWithGoogle}> sing in with Google</Button>
    </div>
  );
}

export default App;
