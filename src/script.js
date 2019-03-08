const generate = (init) => {
    let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        color = document.getElementById("code").value;

    canvas.width = 2048;
    canvas.height = 2048;

    if(init) color = init;
    ctx.fillStyle = `#${color}`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    document.getElementById("result").src = document.getElementById("canvas").toDataURL("image/png");
}

document.getElementById("code").onkeydown = event => {
    console.log(event.keyCode);
    if(event.target.value.length >= 6 && (event.keyCode !== 8 && event.keyCode !== 9)) event.target.blur();
    if(event.keyCode !== 65 && event.keyCode !== 66 && event.keyCode !== 67 && event.keyCode !== 68 &&
        event.keyCode !== 69 && event.keyCode !== 70){
        return ( event.ctrlKey || event.altKey 
            || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) 
            || (95<event.keyCode && event.keyCode<106)
            || (event.keyCode==8) || (event.keyCode==9) 
            || (event.keyCode>34 && event.keyCode<40) 
            || (event.keyCode==46)
        )
    }
}

document.getElementById("code").onchange = evt => {
    generate();
}

generate("000000");