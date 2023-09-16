import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';

import AccountPage from "./pages/AccountPage/AccountPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/customer" element={<AccountPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
