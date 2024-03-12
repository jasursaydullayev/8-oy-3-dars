import BigModal from "./BigModal";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <BigModal />
        <img className="map" src="/map.png" alt="" width={1835} height={540} />
      </main>
    </div>
  );
}

export default App;
