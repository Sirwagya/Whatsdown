
import { Routes, Route } from 'react-router-dom'
import Loginpage from './components/login page/loginpage'
import Homepage from './components/home/homepage'
import ChatInterface from './components/chat interface/chatInterface'
import Logoutpage from './components/logout page/logoutpage'
import Errorpage from './components/error page/errorpage'
import ReactRouter from './poc/reactrouter';

const App = () => {
  return (
    <>
    <h1>Whatsdown</h1>
    {/* <Routes>
      <Route path="/login" element={<Loginpage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/chat/:id" element={<ChatInterface />} />
      <Route path="/logout" element={<Logoutpage />} />
      <Route path="*" element={<Errorpage />} />
    </Routes> */}
    <ReactRouter />
    </>
  )
}

export default App