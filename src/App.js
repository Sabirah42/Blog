import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



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
            <Route path="/"> 
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
