import "./App.css";
import SearchParams from "./components/searchparams/SearchParams";

function App() {
  return (
    <div className="p-4 text-center container mx-auto">
      <h1 className="text-center text-4xl font-bold mb-8">Cat Friends</h1>
      <SearchParams />
    </div>
  );
}

export default App;
