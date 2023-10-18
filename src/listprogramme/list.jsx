
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import InscriptionForm from './InscriptionForm';
import ListeInscriptions from './ListeInscriptions';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/inscription">Formulaire d'Inscription</Link>
          </li>
          <li>
            <Link to="/list-inscriptions">Liste des Inscriptions</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/inscription" component={InscriptionForm} />
        <Route path="/list-inscriptions" component={ListeInscriptions} />
      </Switch>
    </Router>
  );
};

export default App;





