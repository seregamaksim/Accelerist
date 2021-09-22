import { Link } from 'react-router-dom';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Routes />
    </>
  );
}

export default App;
