import {useState} from 'react';
import './App.css';
import {MuiTypography} from './components/MuiTypography'; // For debugging and testing my fonts
import {LandingPage} from './components/LandingPage';
import {Dashboard} from './components/Dashboard';

function App() {
    const [currentPage, setCurrentPage] = useState('LandingPage');
    // The master hook for managing what state the entire application will be in. By default users should pass verifications via login on the landing page.

    // Function called when user passes validation upon log in.
    const changePageToDashboard = () => {
        setCurrentPage('Dashboard');
    }

    // Rendering is on the condition that state === 'name of state'
    return (
        <div className="App">
            {
            currentPage === 'LandingPage' && <LandingPage changePageToDashboard={changePageToDashboard}/>}
            {
            currentPage === 'Dashboard' && <Dashboard/>
        } </div>
    );
}

export default App;
