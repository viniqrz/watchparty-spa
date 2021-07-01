import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Room from './pages/Room';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/room/:roomId' exact component={Room}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
