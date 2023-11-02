import {useState} from 'react';
import './App.css';
import{colors, CssBaseline} from '@mui/material';
//import {MuiTypography} from './components/MuiTypography'; // For debugging and testing my fonts
import {LandingPage} from './components/LandingPage';
import {Dashboard} from './components/Dashboard';
import DevPage from './components/DevPage';
import { ThemeContextProvider, useThemeContext } from './themes/ThemeContextProvider';
import ThemeSwapButton from './components/subcomponents/ThemeSwapButton';
import ParallaxComponent from './components/ParallaxComponent';





function App() {
    const [currentPage, setCurrentPage] = useState('LandingPage');
    // The master hook for managing what state the entire application will be in. By default users should pass verifications via login on the landing page.
    const {theme} = useThemeContext();
    
    // Function called when user passes validation upon log in.
    const changePageToDashboard = () => {
        setCurrentPage('Dashboard');
        console.log("User accesses the applications main functionality because page state was changed and changePagetoDashboard() was called from App(). ")
    }
    const logout = () =>{
      setCurrentPage('LandingPage');
      console.log("User has logged out because logout() was called!");
    }

    const goToDevPage = () =>{
      setCurrentPage('DevPage');
      console.log("Going to my dev page");

    }

    // Rendering is on the condition that state === 'name of state'
    return (      
      <>
        <ThemeContextProvider>
          <CssBaseline/>
          
          
            <div className="App" style={{ backgroundColor: theme.palette.background.default}}>              
                {
                currentPage === 'LandingPage' && <LandingPage changePageToDashboard={changePageToDashboard}/>}
                {
                currentPage === 'Dashboard' && <Dashboard prop2={goToDevPage} logout={logout}/>}
                {
                currentPage === 'DevPage' && <DevPage prop={logout}/>}              
            </div>            
         
         </ThemeContextProvider>
                  
      </>   
      
    );
}

export default App;
