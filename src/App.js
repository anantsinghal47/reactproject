//import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import AgridTable from './Components/AgridTable'
import ButtonExampleEmphasis from './Components/Buttons/buttons';
import MainForm from './Components/Forms/MainForm';
import FormExampleFieldControlId from './Components/Forms/MainForm';
import MenuExampleSecondary from './Components/NavBar/Menu';
import TabExampleColoredInverted from './Components/tabbar';
import Header from './Header.js';
import FooterBottom from './FooterBottom.js';

function App() {
  return (
    <>
    {/* <Header/> */}
    {/* <TabExampleColoredInverted/> */}
    {/* <MenuExampleSecondary/> */}
    <Header/>
    <MainForm />  
    <AgridTable />
    <FooterBottom/>
    </>
  );
}


export default App;
