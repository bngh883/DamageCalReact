import Comp01 from "./Comp01.jsx"
import Comp02 from "./Comp02.jsx"
import Comp03 from "./Comp03.jsx";

function App() {
  return (
    <div className="App">
      <h2>Reactサンプルコード</h2>
      <h3>#1 HTML出力</h3>
      <Comp01></Comp01>
      <h3>#2 データバインド</h3>
      <Comp02></Comp02>
      <h3>#3 プロパティバインド</h3>
      <Comp03></Comp03>
      <hr/>
    </div>
  );
}

export default App;
