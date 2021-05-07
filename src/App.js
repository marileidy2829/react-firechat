import { googleAuthProvider, firebase} from './config/firebase';
import Button from './components/Button';

function App(){
  const signInWithGoogle = async () =>{
    firebase.auth().useDeviceLanguage();
    try {
      await firebase.auth().signInWithPopup(googleAuthProvider);
    }catch (e){
      console.error(e.message);
    }
  };

return (
  <div>
    <Button onClick ={signInWithGoogle}> sing in with Google</Button>
  </div>
);
};
export default App;


