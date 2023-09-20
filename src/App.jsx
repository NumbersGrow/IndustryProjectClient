import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';

import CashierPage from "./pages/CashierPage/CashierPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import CustomerCartPage from './pages/CustomerCartPage/CustomerCartPage';
import CustomerPaymentPage from "./pages/CustomerPaymentPage/CustomerPaymentPage";
import CustomerProductsPage from './pages/CustomerProductsPage/CustomerProductsPage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/cashier" element={<CashierPage />} />
          <Route path="/customer" element={<AccountPage />} />
          <Route path="/customer/products" element={<CustomerProductsPage />} />
          <Route path="/customer/cart" element={<CustomerCartPage />} />
          <Route path="/customer/cart/payment" element={<CustomerPaymentPage />} />


        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
