import "./App.css";

function Heading() {
  return (
    <header className="music-app-header">
      <h1>Music Player</h1>
    </header>
  );
}

function SongPlayer() {
  return (
    <>
      <Heading />
      <audio controls={true}>
        <source src="https://examples.devmastery.pl/assets/audio/deadfro5h.mp3" />
      </audio>
    </>
  );
}

function App() {
  const isLoading = false;
  const hasErrors = false;
  const showPlayer = !isLoading && !hasErrors;
  let message = null;
  if (isLoading) {
    message = "Loading...";
  }
  if (hasErrors) {
    message = "Error occured...";
  }

  return (
    <div className="App">
      <section>{showPlayer ? <SongPlayer /> : message}</section>
    </div>
  );
  
}

export default App;
