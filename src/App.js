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
import Carousel , {CarouselItem} from './Carousel';
import ReleaseBar from './Components/Release/ReleaseBar';

function App() {
  return (
    <>
  

        <ReleaseBar/>
    </>
  );
}


export default App;


/*
  {/* <Header/> }
    {/* <TabExampleColoredInverted/> }
    {/* <MenuExampleSecondary/> }
    <Header/>
    <Carousel>
      <CarouselItem>Item1</CarouselItem>
      <CarouselItem>Item2</CarouselItem>
      <CarouselItem>Item3</CarouselItem>
    </Carousel>
    <MainForm />  
    <AgridTable />
    <FooterBottom/>
  */