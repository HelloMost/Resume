import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/portfolio' element={<Portfolio />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
  )
}

function WrappedApp() {
  return(
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Nav />
      <App />
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default WrappedApp
