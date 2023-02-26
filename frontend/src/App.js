import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import { User } from './Pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/users"} element={<User/>} />
      </Routes>
    </div>
  );
}

export default App;
