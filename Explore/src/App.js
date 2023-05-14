import SignIn from './components/SignIn'
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from './components/ButtonAppBar';
import Assessment from './components/Assessment';
function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      
        <div className="App">
        <Routes>
        <Route path="/" exact element={<SignIn />}></Route>
            <Route path="/home" exact element={<ButtonAppBar />}></Route>
            <Route path="/assessment" exact element={< Assessment/>}></Route>
          </Routes>
      </div>
      
    </Provider>
    </BrowserRouter>
    
  );
}

export default App;
