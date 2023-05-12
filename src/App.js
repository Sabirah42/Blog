import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EntryDetails from './EntryDetails';



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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
