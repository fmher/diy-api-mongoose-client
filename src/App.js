import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NewBlog from './components/pages/NewBlog';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/newblog' element={ <NewBlog /> } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
