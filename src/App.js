
import './App.css';
import HomePage from './Pages/HomePage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PostPage from './Pages/PostPage';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPage from './Pages/ListPage'


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/Post" component={PostPage}/>
          <Route exact path="/List" component={ListPage}/>
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
