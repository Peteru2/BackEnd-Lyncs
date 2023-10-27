

import Dashboard from './Dashboard';
// import Login from './Login'; 
import PendOrder from './PendOrder';
import PendDeliveries from './PendDeliveries';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './SearchContext'; 
import "./style.css"
import AwaitingFeed from './AwaitingFeed';
import { AuthProvider } from './AuthContext';
import ClosedDelivery from './ClosedDelivery';
import Staff from './Staff';
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
