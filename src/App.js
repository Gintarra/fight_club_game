import './App.css';
import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import ShopPage from './pages/ShopPage';
import ArenaPage from './pages/ArenaPage';


function App() {

  return (
    <div >
      <HashRouter>

        <Routes>
          <Route path="/"  element={<StartPage />} />
          <Route path="/main"  element={<MainPage />} />
          <Route path="/shop"  element={<ShopPage />} />
          <Route path="/arena"  element={<ArenaPage />} />
        </Routes>

      </HashRouter>
    </div>

  );
}

export default App;


