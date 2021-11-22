import './App.css';
// Import models
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Client from './pages/client.module';
import Admin from './admin/admin.page';
import LoginAdmin from './admin/login/loginadmin.component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={() => {
          return localStorage.getItem("admin") ? <Admin/> : <Redirect to="/loginadmin"/>
        }}/>
        <Route path="/loginadmin" exact component={LoginAdmin}/>
        <Route path="" exact>
          <Client />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;