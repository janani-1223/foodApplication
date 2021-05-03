import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/Admin';
import Customer from './components/Customer';
import Register from './components/Register';
import ViewAdmin from './components/ViewAdmin';
import ListAdmin from './components/ListAdmin';
import ForgetPassword from './components/ForgetPassword';



function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" exact component={Home }/>
      <Route path="/login" component={Login}/>
      <Route path="/sign-up" component={Register} />
      <Route path="/view-admin/:mailId" component={ViewAdmin} />

      <Route path="/admin/:mailId" component={Admin} />
      <Route path="/customer/:mailId" component={Customer} />
      <Route path="/list-customer" component={ListAdmin} />
      <Route path="/forgotPassword" component={ForgetPassword} />
      
      </Switch>
      </Router>
  );
}

export default App;
