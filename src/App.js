import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';
function App() {
  //   let Component;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Header />
            <Main />
            <Gallery />
            <Footer /> */}
    </>
  );
}

export default App;
