import './App.css';
// Import models
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Client from './pages/client.module';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Admin page */}
        {/*  */}
        <Route path="" exact>
          <Client />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;