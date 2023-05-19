import Comp01 from "./Comp01.jsx"
import Comp02 from "./Comp02.jsx"
import Comp03 from "./Comp03.jsx"
import Comp04 from "./Comp04.jsx"
import Comp05 from "./Comp05.jsx"

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
      <h3>#4 イベント処理</h3>
      <Comp04></Comp04>
      <h3>#5 表示切替え</h3>
      <Comp05></Comp05>
      <hr/>
    </div>
  );
}

export default App;
