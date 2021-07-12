const btn = document.getElementById("record_button"),
  chunks = [];

function record() {
  chunks.length = 0;
  let stream = document.querySelector('canvas').captureStream(120),
    recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => {
    if (e.data.size) {
      chunks.push(e.data);
    }
  };
  recorder.onstop = exportVideo;
  btn.onclick = e => {
    recorder.stop();
    btn.textContent = 'start recording';
    btn.onclick = record;
  };
  recorder.start();
  btn.textContent = 'stop recording';
}

function exportVideo(e) {
  var blob = new Blob(chunks);
  var vid = document.createElement('video');
  vid.id = 'recorded'
  vid.controls = true;
  vid.src = URL.createObjectURL(blob);
  document.body.appendChild(vid);
  vid.play();
}
btn.onclick = record;


//HTML code

/* #record_button {
  display: none;
  position: absolute;
  bottom: 50px;
  right: 50px;
  margin-top: 12px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
}

<div id="record_button">Record</div> */