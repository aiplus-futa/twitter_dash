import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './Layout/Layout';
import home from './Components/Pages/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <div className="App-header">
          <Switch>
              <Route path='/' exact component={home} />
          </Switch>
        </div>
          
      </Layout>
    </div>
  );
}

export default App;
