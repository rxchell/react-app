import './App.css';

function MyButton() {
  return (
    <button>
      Login
    </button>
  );
}

export function MyApp() {
  return (
    <div>
      <h1>e-commerce</h1>
      <MyButton />
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <h2> Welcome to </h2>
      <MyApp />
    </div>
  );
}

export default App;
