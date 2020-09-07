const button = document.getElementById('button');
const videoElement  = document.getElementById('video');

async function selectMediastream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
    }catch(error){
        console.log(error);
    }
}

button.addEventListener('click', async ()=>{
    // disable button
    button.disabled = true;
    //start pic in pic
    await videoElement.requestPictureInPicture();
    // reset
    button.disabled = false;
});
console.log("arjun");
// onLoad
selectMediastream();