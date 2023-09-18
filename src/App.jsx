import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';

import CashierPage from "./pages/CashierPage/CashierPage";

import AccountPage from "./pages/AccountPage/AccountPage";
import CustomerCartPage from './pages/CustomerCartPage/CustomerCartPage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/cashier" element={<CashierPage />} />
          <Route path="/customer" element={<AccountPage />} />
          <Route path="/customer/cart" element={<CustomerCartPage />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
