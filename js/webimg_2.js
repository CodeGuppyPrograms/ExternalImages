function loadImages(arUrl, onLoaded)
{
    let arImg = [];
    
    function onImageDownloaded(img)
    {
        arImg.push(img);
        
        if (arImg.length === arUrl.length)
        {
            onLoaded(arImg);
        }
            
    }

    for(let url of arUrl)
    {
        loadImage(url, onImageDownloaded )
    }
}

let arUrl = [
    "https://codeguppyprograms.github.io/ExternalImages/ninja/run0.png",
    "https://codeguppyprograms.github.io/ExternalImages/ninja/run1.png",
    "https://codeguppyprograms.github.io/ExternalImages/ninja/run2.png",
    "https://codeguppyprograms.github.io/ExternalImages/ninja/run3.png",
    "https://codeguppyprograms.github.io/ExternalImages/ninja/run4.png",
    "https://codeguppyprograms.github.io/ExternalImages/ninja/run5.png",
    "https://codeguppyprograms.github.io/ExternalImages/ninja/run6.png",
    "https://codeguppyprograms.github.io/ExternalImages/ninja/run7.png",
    "https://codeguppyprograms.github.io/ExternalImages/ninja/run8.png",
    "https://codeguppyprograms.github.io/ExternalImages/ninja/run9.png",
];

loadImages(arUrl, start);

function start(arImg)
{
    sprite(arImg);
}
