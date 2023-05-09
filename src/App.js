import Navbar from './Navbar';
import Home from './Home';



// App is the root application rendered first. Future components should
// be nested wthin this to make a component tree
function App() {
  const github = "https://github.com/Sabirah42"

  const handleClick = () => {
        console.log('Hello!');
    }

  // rendered JSX template is returned below
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
          <p>My self-esteem rating today: { Math.floor(Math.random() * 10) }</p>

          <p>Please check out my Github account <a href={ github }>here</a>.</p>

          <div>Or <button onClick={handleClick}>click me</button> to log something useless to the console!</div>
      </div>
    </div>
  );
}

export default App;
