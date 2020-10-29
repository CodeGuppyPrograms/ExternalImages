function loadSprite(arUrl, onLoaded)
{
    let arImg = [];
    
    function onImageDownloaded(img)
    {
        arImg.push(img);
        
        if (arImg.length === arUrl.length)
        {
            let oSprite = sprite(arImg);
            oSprite.visible = false;
            
            onLoaded(oSprite);
        }
            
    }

    for(let url of arUrl)
    {
        loadImage(url, onImageDownloaded )
    }
}

loadSprite([
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
], spriteLoaded);

function spriteLoaded(oSprite)
{
    oSprite.visible = true;
}
