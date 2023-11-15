import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App