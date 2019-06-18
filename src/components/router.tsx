import * as React from 'react';
import Home from './Home';
import Layout from './Layout';
import { Router, Route, hashHistory, IndexRoute  } from 'react-router';


class AppRouter extends React.Component {
  render(){
    return (
    <Router history={ hashHistory }>
      <Route path="/" component={ Layout }>
        <IndexRoute component={ Home } />
      </Route>
      {/* <Route path="/:id" component={ Layout }/> */}
    </Router>
    )
  }
}
export default AppRouter;