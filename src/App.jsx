import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './Components/page/loginpage/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Authcontext.jsx';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </>

  )
}

export default App
