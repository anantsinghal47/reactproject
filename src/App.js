//import logo from './logo.svg';
import './App.css';
import AgridTable from './Components/AgridTable'
import ButtonExampleEmphasis from './Components/Buttons/buttons';
import Footer from './Components/Footer.js'
import MainForm from './Components/Forms/MainForm';
import FormExampleFieldControlId from './Components/Forms/MainForm';
import MenuExampleSecondary from './Components/NavBar/Menu';
import TabExampleColoredInverted from './Components/tabbar';

function App() {
  return (
    <>
    <TabExampleColoredInverted/>
    {/* <MenuExampleSecondary/> */}
    <MainForm />  
    <AgridTable />
    <Footer/>
    
    </>
  );
}


export default App;
