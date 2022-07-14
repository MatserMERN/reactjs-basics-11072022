import Scott from "./1.components/1.function/Greet";
import GreetFatArrow from "./1.components/1.function/GreetFatArrow";
import { GreetNamed as Desatnick } from "./1.components/1.function/GreetNamed";

function App() {
  return (
    <div className="container">
      <Scott />
      <Desatnick />
      <GreetFatArrow />
    </div>
  );
}

export default App;
