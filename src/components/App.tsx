import Login from './pages/Login';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Public from './Routes/Public';
import { Header } from './Organismos/Header';
import Protected from './Routes/Protected';
import datosAuto from './pages/DatosAutos';

const App = () =>(

  <Router>
    <Header />
    
      <Switch>
        <Route path="/" exact component={Login} />
        <Protected path="/datos-auto" exact component={datosAuto}/>
      </Switch>
  </Router>
);
export default App;
