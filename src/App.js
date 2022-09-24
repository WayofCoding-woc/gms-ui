import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './page/Layout';
import Home from './page/Home';
import Error from './page/Error';
import ViewAllPlans from './page/ViewAllPlans';
import ViewSubscribedPlans from './page/ViewSubscribedPlans';
import CreateCustomer from './page/CreateCustomer';
import ViewProfile from './page/ViewProfile';
import SubscribePlan from './page/SubscribePlan';

function App() {
  
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="viewAllPlans" element={<ViewAllPlans />} />
          <Route path="createCustomer" element={<CreateCustomer />} />
          <Route path="viewSubscribedPlans" element={<ViewSubscribedPlans />} />
          <Route path="viewProfile" element={<ViewProfile />} />
          <Route path="subscribePlan" element={<SubscribePlan />} />
          <Route path="*" element={<Error />} />
        </Route>

     </Routes>
    </BrowserRouter>
  );
}

export default App;
