import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';




import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import reduxStore from './store/reduxStore';
import reducers from './reducers/index';
//import KanbanBoardContainer from './components/KanbanBoardContainer';
//import KanbanBoard from './components/KanbanBoard';
//import EditCard from './components/EditCard';
//import NewCard from './components/NewCard';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const App = () => (
  <MuiThemeProvider>    
    <MyAwesomeReactComponent />

  </MuiThemeProvider>
);


    render(
      <App />,
      document.getElementById('root')
    );

//render((
//  <Provider store={reduxStore}>
//    <Router history={browserHistory}>
//      <Route component={KanbanBoardContainer}>
//        <Route path="/" component={KanbanBoard}>
//          <Route path="new" component={NewCard} />
//          <Route path="edit/:card_id" component={EditCard} />
//        </Route>
//      </Route>
//    </Router>
//  </Provider>
//), document.getElementById('root')); 
