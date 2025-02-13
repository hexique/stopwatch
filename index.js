
let timeoutId;
let start_time = 0;
let elapsed_time = 0;
let mark_count = 0;
let canPause = false;
let timer = null;
let isActive = false;
let h;
let m;
let s;
let ms;

function reset_marks(){
    document.getElementById("marks").innerHTML = "";
    mark_count = 0;
}

function add_mark(){
    mark_count++;
    console.log(`<p>Mark ${mark_count}: ${String(h).padStart(2, '0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}:${String(ms).padStart(3,'0')}<br></p>`);
    document.getElementById("marks").innerHTML += `<p>Mark ${mark_count}: ${String(h).padStart(2, '0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}:${String(ms).padStart(3,'0')}<br></p>`;
}

function switch_func(){
    if(canPause){
        canPause = false;
        document.getElementById("startBtn").textContent = "Resume"
        stop()
    }
    else{
        document.getElementById("startBtn").textContent = "Pause"
        canPause = true;
        start()
    }
}

function start(){
    if(!isActive){
        start_time = Date.now() - elapsed_time;
        timer = setInterval(update, 10);
        isActive = true;
    }
}

function reset(){
    clearInterval(timer);
    start_time = Date.now();
    elapsed_time = 0;
    isActive = false;
    timer = null;
    canPause = false;
    document.getElementById("time").innerHTML = "00:00:00:000";
    document.getElementById("startBtn").textContent = "Start"
    stop();
 
}

function stop(){
    clearInterval(timer);
    elapsed_time = Date.now() - start_time;
    isActive = false;
}

function update(){
    console.log(start_time)
    const current_time = Date.now()
    elapsed_time = current_time - start_time;
    h = Math.floor(elapsed_time / (1000 * 60 * 60));
    m = Math.floor(elapsed_time / (1000 * 60) % 60);
    s = Math.floor(elapsed_time / 1000 % 60);
    ms = Math.floor(elapsed_time % 1000 / 10);
    document.getElementById("time").innerHTML = `${String(h).padStart(2, '0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}:${String(ms).padStart(3,'0')}`
}

// ${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')}:${String(date.getMilliseconds()).padStart(3,'0')}</h2>`
