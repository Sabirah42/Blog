import Navbar from './Navbar';
import Home from './Home';



// App is the root application rendered first. Future components should
// be nested wthin this to make a component tree
function App() {

  // rendered JSX template is returned below
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
