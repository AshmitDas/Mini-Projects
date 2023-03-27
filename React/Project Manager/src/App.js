import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './components/Header';
import CreatePrjctPage from './Pages/CreatePrjctPage';
import AddUser from './Pages/AddUser';
import ProjectPage from './Pages/ProjectPage';
import EditProject from './Pages/EditProject';
import EditUser from './Pages/EditUser';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Routes >
        
        <Route path="/" element={<HomePage />} />
        <Route path="/create-project" element={<CreatePrjctPage />} />
        <Route path='/user' element={<AddUser />} />
        <Route path='/project/:id' element={<ProjectPage />} />
        <Route path='/edit-project/:id' element={<EditProject />} />
        <Route path='/edit-user/:id' element={<EditUser />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
