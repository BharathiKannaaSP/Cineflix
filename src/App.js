import './App.css';
import Header from "./component/header/Header"
import SimpleBottomNavigation from './component/navbar/Navbar';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Trending from './component/pages/Trending/Trending';
import Movies from './component/pages/Movies/Movies';
import Series from './component/pages/Series/Series';
import Search from './component/pages/Search/Search';
import { Container } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
      <Container>
        <Switch>
          <Route path='/' component={Trending} exact/>
          <Route path='/movies' component={Movies}/>
          <Route path='/series' component={Series}/>
          <Route path='/search' component={Search}/>
        </Switch>
      </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
