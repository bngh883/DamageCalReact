function Comp03() {
    const photo = {
        src: "./logo192.png",
        alt: "Reactアイコン",
        width: "100"
    };

    return(
        <img src={photo.src} alt={photo.alt} width={photo.width}/>
    );
}

export default Comp03;