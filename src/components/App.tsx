import Login from './pages/Login';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Public from './Routes/Public';
import { Header } from './Organismos/Header';
import Protected from './Routes/Protected';
import datosAuto from './pages/DatosAutos';
import ArmaTuPlan from './pages/ArmaTuPlan';
import Gracias from './pages/Gracias';

const App = () =>(

  <Router>
    <Header />    
      <Switch>
        <Route path="/" exact component={Login} />
        <Protected path="/datos-auto" exact component={datosAuto}/>
        <Protected path="/arma-tu-plan" exact component={ArmaTuPlan}/>
        <Protected path="/gracias" exact component={Gracias}/>
      </Switch>
  </Router>
);
export default App;
