import './App.css';

function App() {
  const title = "Welcome to Sabirah's React blog!";
  const github = "https://github.com/Sabirah42"

  // rendered JSX template is returned below
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>

        <p>My self-esteem rating today: { Math.floor(Math.random() * 10) }</p>

        <p>Please check out my Github account <a href={ github }>here</a>.</p>
      </div>
    </div>
  );
}

export default App;
