import "./App.css";
import { Greet } from "./Greet";

function App() {
  return (
    <>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        React + Shadcn + Rust
      </h2>
      <br />
      <p className="flex justify-center">
        <Greet />
      </p>
    </>
  );
}

export default App;
