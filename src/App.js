import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './page/Layout';
import Home from './page/Home';
import Error from './page/Error';
import ViewAllPlans from './page/ViewAllPlans';
import ViewSubscribedPlans from './page/ViewSubscribedPlans';

function App() {
  
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="viewAllPlans" element={<ViewAllPlans />} />
          <Route path="viewSubscribedPlans" element={<ViewSubscribedPlans />} />
          <Route path="*" element={<Error />} />
        </Route>

     </Routes>
    </BrowserRouter>
  );
}

export default App;
