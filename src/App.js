import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="music-app-header">
        <h1>Music Player</h1>
        <audio controls>
          <source src="https://examples.devmastery.pl/assets/audio/deadfro5h.mp3" />
        </audio>
      </header>
    </div>
  );
}

export default App;
