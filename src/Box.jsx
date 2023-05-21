
function Box({color, height, width, id, handleDeleteBox}) {

    const handleClick = (e) => {
        e.preventDefault();
        handleDeleteBox(id);
    }

    return(
        <>
            <div style={{height: `${height}px`, backgroundColor: color, width: `${width}px`, margin: '10px'}}></div>
            <button onClick={handleClick}>X</button>
        </>
    )
}

export default Box