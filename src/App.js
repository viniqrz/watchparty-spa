import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Room from './pages/Room';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/room/:roomId' exact>
          <Room />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
