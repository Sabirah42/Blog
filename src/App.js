import Navbar from './Navbar';
import Home from './Home';



// App is the root application rendered first. Future components should
// be nested wthin this to make a component tree
function App() {
  const title = "Welcome to Sabirah's React blog!";
  const github = "https://github.com/Sabirah42"

  // rendered JSX template is returned below
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
          <p>My self-esteem rating today: { Math.floor(Math.random() * 10) }</p>

          <p>Please check out my Github account <a href={ github }>here</a>.</p>
      </div>
    </div>
  );
}

export default App;
