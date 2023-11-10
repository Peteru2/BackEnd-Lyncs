

import Dashboard from './views/Dashboard';
// import Login from './Login'; 
import PendOrder from './views/PendOrder';
import PendDeliveries from './views/PendDeliveries';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './components/SearchContext'; 
import "./style.css"
import AwaitingFeed from './views/AwaitingFeed';
import { AuthProvider } from './components/AuthContext';
import ClosedDelivery from './views/ClosedDelivery';
import Staff from './views/Staff';
import "./index.css"

function App() {
  return (
    < >
   <AuthProvider>
    <SearchProvider>
      <Router>
       <Routes>
        {/* <Route path={'/Login'} element={<Login />} /> */}
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/Pending'} element={<PendOrder />} />
        <Route path={'/Pend-Deliveries'} element={<PendDeliveries />} />
        <Route path={'/Awaiting-Feedback'} element={<AwaitingFeed />} />
        <Route path={'/Closed-Deliveries'} element={<ClosedDelivery />} /> 
        <Route path={'/Staff'} element={<Staff />} />
        </Routes>
        </Router>
        </SearchProvider>
     </AuthProvider> 
      </>
  );
}

export default App;
