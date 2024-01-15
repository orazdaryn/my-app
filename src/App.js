import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './Friends';
import Profile from './profile';
import data from './data';


function App() {
  return (
    <BrowserRouter >
      <div className="App">

        <Header />
<Routes>
  <Route path='/' element={<Main data={data.PostPage.posts} />}></Route>
  <Route path='/Profile' element={<Profile />}></Route>
  <Route path='/Friends' element={<Friends/>}></Route>
</Routes>
       

      </div>
    </BrowserRouter>
  );
}

export default App;
