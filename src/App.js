import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EntryDetails from './EntryDetails';
import NotFound from './NotFound';



// App is the root application rendered first. Future components should
// be nested wthin this to make a component tree
function App() {

  // rendered JSX template is returned below
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Switch makes sure only one route shows at any given time */}
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>

            <Route exact path="/create"> 
              <Create />
            </Route>

            <Route path="/entries/:id"> 
              <EntryDetails />
            </Route>

            {/* an asterisk will catch all non-defined routes. Must go at the bottom of all other
                routes, or they will all redirect to the error page */}
            <Route path="*"> 
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
