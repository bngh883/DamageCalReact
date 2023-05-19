import { useState } from "react";

function Comp05() {
    const photo = {
        src: "./logo192.png",
        alt: "Reactアイコン",
    };

    const [isShow, setShow] = useState(true);

    return(
        <div>
            <button onClick={() => setShow(true)}>表示</button>
            <button onClick={() => setShow(false)}>非表示</button>
            {isShow ? 
                (<p>
                    <img src={photo.src} alt={photo.alt}/>
                </p>)
                : ""
            }
        </div>
    );
}
export default Comp05