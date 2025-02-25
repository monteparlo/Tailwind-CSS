function applyStyle(styleNumber) {
    const content = document.getElementById('s');
    content.className = ''; 
    document.querySelectorAll('style[data-dynamic]').forEach(el => el.remove());
    document.querySelectorAll("body").className = '';
    document.querySelector("nav").className = '';
    document.querySelectorAll("nav button").forEach(button => button.className = '');
    document.querySelector("h1").className = '';
    document.querySelector("h3").className = '';
    document.querySelectorAll("div").className = '';
    document.querySelectorAll("p").forEach(paragraph => paragraph.className = '');
    document.getElementById("txt").className = ""; 

    const existingVideo = document.getElementById('video-bg');
    if (existingVideo) existingVideo.remove();
    
    const existingOverlay = document.getElementById('overlay-bg');
    if (existingOverlay) existingOverlay.remove();

    switch(styleNumber) {
        case 0: 
            content.className = 's0 p-10 m-10';
            break;

        case 1: //matrix style compeleted *do not edit*
            content.className = 's1 p-10 m-10 bg-black m-6 text-[#20d500] text-[2vw] box-border font-mono text-center';
            document.querySelector("nav").className = 'flex justify-center space-x-[3%] p-[2%] bg-gray-900';
            document.querySelectorAll("nav button").forEach(button => {
                button.className = 'p-[1%] bg-gray-800 rounded-[30px] text-[#20d500] text-[1vw] font-mono text-nowrap hover:bg-[#00322c] hover:text-white transition duration-300 hover:rounded-[5px]';
            });
            document.querySelector("h1").className = 'text-[4vw] font-bold text-[#20d500] drop-shadow-lg p-10 animate-pulse';
            document.querySelectorAll("p").forEach(paragraph => {
                paragraph.className = 'p-10 m-10 bg-[#061c00] text-[#20d500] rounded-[10px] text-left text-[1vw]';
            });

            const style1 = document.createElement('style');
                style1.setAttribute('data-dynamic', '');
                style1.innerHTML = `        
                .s1 p:hover, .s1 button:hover {
                    background-color: rgb(0, 50, 44) !important;
                    color: white !important;
                    animation: glow 3.5s ease-in-out infinite alternate !important;
                }
                @keyframes glow {
                    0% { box-shadow: 0 0 10px rgba(32, 213, 0, 0.6), 0 0 20px rgba(32, 213, 0, 0.8); }
                    100% { box-shadow: 0 0 10px rgba(0, 50, 44, 0.6), 0 0 20px rgba(0, 50, 44, 0.8); }
                }
                `;

            document.head.appendChild(style1);

      
            var video = document.createElement('video');  
            video.setAttribute('id', 'video-bg');  
            video.setAttribute('autoplay', '');  
            video.setAttribute('loop', '');     
            video.setAttribute('muted', '');    
            video.setAttribute('playsinline', ''); 
            video.style.position = 'fixed';  
            video.style.top = '0';
            video.style.left = '0';
            video.style.width = '100vw';
            video.style.height = '100vh';
            video.style.objectFit = 'cover';  
            video.style.zIndex = '-3';  

            var source = document.createElement('source');  
            source.setAttribute('src', './assets/style1.mp4');  
            source.setAttribute('type', 'video/mp4');  

            video.appendChild(source);  
            document.body.prepend(video); 

         
            var overlay = document.createElement('div');
            overlay.setAttribute('id', 'overlay-bg'); 
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(0, 0, 0, 0.5)'; 
            overlay.style.zIndex = '-2'; 

            document.body.prepend(overlay);
            break;

        case 2: // Rainbow style
    
            var image = document.createElement('img');  
            image.setAttribute('id', 'image-bg');  
            //image.setAttribute('src', './assets/style2.gif');  
            image.style.position = 'fixed';  
            image.style.top = '0';
            image.style.left = '0';
            image.style.width = '100vw';
            image.style.height = '100vh';
            image.style.objectFit = 'repeat';  
            image.style.zIndex = '-1';
    
            document.body.prepend(image); 

            content.className = 's2 m-4 text-center font-sans bg-[rgb(176,252,255)] text-[rgb(34,2,108)] bg-gradient-to-br from-[rgb(134,192,255)] via-[rgb(255,255,129)] to-[rgb(255,158,205)] p-6';
        
            document.querySelector("nav").className = 's2 flex flex-col space-y-[3vh] max-w-fit float-left z-3';
        
            document.querySelectorAll("nav button").forEach(button => {
                button.className = 's2 text-nowrap';
            });
        
            document.querySelector("h1").className = 's2 m-3 text-[6vh] align-center font-bold italic text-center';
        
            document.querySelector("h3").className = 's2 m-3 text-[3vh] align-center font-semibold text-center';
        
            document.getElementById("txt").className = "s2 grid grid-cols-3 gap-5";
        
            document.querySelectorAll("p").forEach(paragraph => {
                paragraph.className = 's2 gap-5 p-4 bg-white shadow-lg text-[1vw] text-justify';
            });
        
            const style2 = document.createElement('style');
            style2.setAttribute('data-dynamic', '');
            style2.innerHTML = `
                .s2 p:hover {
                    color: rgb(136, 29, 47);
                    background-image: linear-gradient(to bottom right, rgb(255, 213, 252), rgb(193, 255, 190), rgb(255, 243, 204));
                    box-shadow: 10px 10px 22px white;
                    border-radius: 10px 5px;
                }
                .s2 button {
                    background-color: rgb(255, 230, 161);
                    border-radius: 17px;
                    font-size: 22px;
                    padding: 10px;
                    width: fit-content;
                    height: fit-content;
                    color: rgb(37, 0, 42);
                }
                .s2 p:hover, .s2 button:hover {
                    background-color: white !important;
                    color: purple !important;
                    box-shadow: 5px 5px 15px rgb(255, 239, 174);
                    animation: glow2 3.5s ease-in-out infinite alternate !important;
                }
                @keyframes glow2 {
                    0% {
                        box-shadow: 0 0 10px rgb(255, 255, 255), 
                                    0 0 20px rgb(255, 100, 61),
                                    0 0 30px rgb(255, 203, 61),
                                    0 0 40px rgb(101, 255, 74),
                                    0 0 50px rgb(137, 220, 255),
                                    0 0 60px #3878ef,
                                    0 0 70px rgb(255, 110, 216);
                    }
                    100% {
                        box-shadow: 0 0 20px rgb(255, 255, 255),
                                    0 0 30px rgb(255, 71, 61),
                                    0 0 40px rgb(255, 203, 61),
                                    0 0 50px rgb(135, 255, 61),
                                    0 0 60px rgb(118, 237, 255),
                                    0 0 70px rgb(71, 61, 255),
                                    0 0 80px rgb(255, 120, 174);
                    }
                }`;
        
            document.head.appendChild(style2);
            break;
        
            case 3: //black bg
                content.className = 's3 bg-[rgb(11,18,18)] w-full p-9 text-white text-[35px] box-border font-serif text-center';
                document.querySelectorAll("p").forEach(paragraph => {
                    paragraph.className = ' s3 bg-indigo-600 p-4 m-9 rounded shadow-lg text-[1.2vw] hover:font-bold';
                });
                document.querySelector("h1").className = 's3 m-3 text-[6vh] align-center font-bold text-center';
                document.querySelector("h3").className = 's3 m-3 text-[3vh] align-center font-semibold italic text-center';
                document.querySelector("nav").className = 's3 m-3 bg-indigo-600 text-[6vh] align-center text-center';
                document.querySelectorAll("nav button").forEach(button => {
                    button.className = 's3 text-nowrap hover:font-bold';
                });
            break;

        case 4: //pink bg
            content.className = 's4 w-full p-11 bg-[rgb(255,207,225)] text-[rgb(48,0,0)] text-[45px] box-border font-impact text-right';
            document.querySelectorAll("p").forEach(paragraph => {
            paragraph.className = 's4 p-4 rounded shadow-lg text-[1.2vw] hover:font-bold';
            });
            document.querySelector("h1").className = 's4 m-3 text-[6vh] align-center font-bold text-center';
            document.querySelector("nav").className = 's4 m-3 text-[6vh] align-center text-center';
            document.querySelectorAll("nav button").forEach(button => {
                button.className = 's4 text-nowrap hover:font-bold p-5';
            });
            document.querySelector("h3").className = 's4 m-3 text-[3vh] align-center font-semibold italic text-center';
            break;

        case 5: //gradient purple
           content.className = 's5 bg-black w-fit p-6 text-white text-2xl font-sans text-left grid grid-cols-[1fr_auto] gap-5 bg-gradient-to-bl from-[rgb(42,0,33)] via-[rgb(55,0,22)] via-[rgb(47,0,67)] to-[rgb(17,0,84)]';
           document.querySelector("h1").className = 's5 m-5 p-6 text-[7vh] align-right font-semibold text-center';
           document.querySelector("h3").className = 's5 m-5 p-6 text-[4vh] align-center font-thin text-center';
           document.querySelector("nav").className = 's5 m-3 text-[3vh] text-center';
           document.querySelectorAll("nav button").forEach(button => {
            button.className = 's5 text-nowrap hover:font-bold p-5';
        });
            document.querySelectorAll("p").forEach(paragraph => {
                paragraph.className = ' s5 bg-purple-800 p-4 m-5 rounded shadow-lg text-[1.2vw] hover:bg-pink-900';
            });
            break;
    }
};


function s0() { applyStyle(0); }
function s1() { applyStyle(1); }
function s2() { applyStyle(2); }
function s3() { applyStyle(3); }
function s4() { applyStyle(4); }
function s5() { applyStyle(5); }

const colorPicker = document.getElementById('color-picker');
const contentDiv = document.getElementById('content');
const colorClasses = {
    white: 'bg-white-300',
    pink: 'bg-pink-300',
    amber: 'bg-amber-300',
    purple: 'bg-purple-300',
    blue: 'bg-blue-300',
    cyan: 'bg-cyan-300'
};

colorPicker.addEventListener('change', (e) => {
    const selectedColor = e.target.value;
    contentDiv.classList.remove('bg-white-300', 'bg-pink-300', 'bg-amber-300', 'bg-purple-300', 'bg-blue-300', 'bg-cyan-300');
    if (selectedColor && colorClasses[selectedColor]) {
        contentDiv.classList.add(colorClasses[selectedColor]);
    }
});