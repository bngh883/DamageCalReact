function Comp04() {
    const clickHandler = ($event) =>{
        alert("[" + $event.type + "]イベントを検出！");
    };

    return(
        <button onClick={clickHandler}>ここをクリック！</button>
    );
}
export default Comp04;