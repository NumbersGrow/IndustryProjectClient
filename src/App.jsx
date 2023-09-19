import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';

import CashierPage from "./pages/CashierPage/CashierPage";
import CashierCartPage from "./pages/CashierCartPage/CashierCartPage";
import CashierReceiptPage from "./pages/CashierReceiptPage/CashierReceiptPage";

import AccountPage from "./pages/AccountPage/AccountPage";
import CustomerCartPage from './pages/CustomerCartPage/CustomerCartPage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/cashier" element={<CashierPage />} />
          <Route path="/cashier/cart" element={<CashierCartPage />} />
          <Route path="/cashier/receipt" element={<CashierReceiptPage />} />
          {/* <Route path="/cashier/thank-you" element={<CashierCartPage />} /> */}
          
          <Route path="/customer" element={<AccountPage />} />
          <Route path="/customer/cart" element={<CustomerCartPage />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
