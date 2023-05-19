function Comp06() {
    const rankingData = [
        {rank: 1, name: "北海道", value: "83,424"},
        {rank: 2, name: "岩手県", value: "15,275"},
        {rank: 3, name: "福島県", value: "13,784"},
        {rank: 4, name: "長野県", value: "13,562"},
        {rank: 5, name: "新潟県", value: "12,584"}
    ];

    return(
        <div>
            <p>面積ランキング</p>
            {rankingData.map(item => {
                return (
                    <p key={item.name}>
                        {item.rank}位 {item.name} {item.value}(平方km)
                    </p>
                );
            })}
        </div>
    );
}

export default Comp06;