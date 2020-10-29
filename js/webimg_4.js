#BEGINSCENE Game
let spriteLoader = require("SpriteLoader");

let oSprites = {
    
    ninja : [
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
    ],
    
    robot : [
        "https://codeguppyprograms.github.io/ExternalImages/robot/run1.png",
        "https://codeguppyprograms.github.io/ExternalImages/robot/run2.png",
        "https://codeguppyprograms.github.io/ExternalImages/robot/run3.png",
        "https://codeguppyprograms.github.io/ExternalImages/robot/run4.png",
        "https://codeguppyprograms.github.io/ExternalImages/robot/run5.png",
        "https://codeguppyprograms.github.io/ExternalImages/robot/run6.png",
        "https://codeguppyprograms.github.io/ExternalImages/robot/run7.png",
        "https://codeguppyprograms.github.io/ExternalImages/robot/run8.png",
    ]
    
}

background('Road');
spriteLoader.loadSprites(oSprites, startGame);

function startGame(oLoadedSprites)
{
    let ninja = oLoadedSprites.ninja;
    let robot = oLoadedSprites.robot;
    
    ninja.visible = true;
    ninja.scale = 0.75;
    ninja.x = 175;
    ninja.y = 370;
    
    robot.mirrorX(-1);
    robot.scale = 0.75;
    robot.x = 600;
    robot.y = 340;
    robot.visible = true;
}
#BEGINSCENE SpriteLoader
function loadSprites(oSprites, onLoaded)
{
    let spritesToLoad = 0;
    let spritesLoaded = 0;
    
    let oLoadedSprites = {};
    
    function spriteLoaded(oSprite)
    {
        spritesLoaded++;
        
        let spriteName = oSprite.name;
        oLoadedSprites[spriteName] = oSprite;
        
        if (spritesToLoad === spritesLoaded)
            onLoaded(oLoadedSprites);
    }

    for(let spriteName in oSprites)
    {
        spritesToLoad++;
        
        let arUrl = oSprites[spriteName];
        
        loadSprite(arUrl, spriteName, spriteLoaded);
    }
}

function loadSprite(arUrl, spriteName, onLoaded)
{
    let arImg = [];

    function onImageDownloaded(img)
    {
        arImg.push(img);
        
        if (arImg.length === arUrl.length)
        {
            let oSprite = sprite(arImg);
            oSprite.name = spriteName;
            oSprite.visible = false;

            onLoaded(oSprite);
        }
            
    }

    for(let url of arUrl)
    {
        loadImage(url, onImageDownloaded )
    }
}
