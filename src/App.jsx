import "./App.css";
import Wordle from "./components/Wordle";

function App() {
  return (
    <>
      <section className="bg-zinc-900 h-screen flex flex-col items-center justify-center text-center gap-8">
        <h1 className="font-bold text-white uppercase tracking-wide text-2xl">
          Wordle
        </h1>
        <Wordle />
      </section>
    </>
  );
}

export default App;
