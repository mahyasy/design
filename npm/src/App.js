import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Topbar from './Topbar';
import Button from './Button';
import Middle from './Middle';
import Room from './Room';
import Plug from './Plug';
import { IconBar } from './IconBar';




function App() {
  return (
    <div >
       <Topbar></Topbar>
        <Button></Button>
        <Middle></Middle>
        <Room></Room>
        <Plug></Plug>
        <IconBar></IconBar>
  
        <script src='./bootstrap.bundle.min.js'></script>
        
    </div>
   
  );
}

export default App;
