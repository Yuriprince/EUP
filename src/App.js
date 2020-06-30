import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Theory from './layouts/Theory';
import Main from './layouts/Main';
import Practice from './layouts/Practice';
import Dictionary from './layouts/Dictionary';
import Tests from './layouts/Tests';
import Module from './layouts/Module';

const BaseLayout = () => (
  <div className="container-fluid">
    <div className="content">
      <Route path="/" exact component={Main} />
      <Route path="/theory" component={Theory} />
      <Route path="/practice" component={Practice} />
      <Route path="/module" component={Module} />
      <Route path="/tests" component={Tests} />
      <Route path="/dictionary" component={Dictionary} />
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <BaseLayout/>
    </BrowserRouter>
  );
}

export default App;
