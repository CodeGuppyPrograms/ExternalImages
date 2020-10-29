# Build games with sprites on codeguppy.com

Graphical assets / sprites are very important for any succesful game. 
At [codeguppy.com](https://codeguppy.com) you have different options for implementing graphics for your game.

1. Use the [built-in sprites](https://codeguppy.com/code.html?t=_sprites_builtin&list=coding) (recommended for majority of users)

2. Use [in-code defined sprites](https://codeguppy.com/code.html?t=_sprites_custom&list=coding) (recommended for people that like to draw their own sprites on paper)

3. Build sprites from images stored on an external server


# Using external images and sprites

This page describes briefly, how to use external images and sprites with [codeguppy.com](https://codeguppy.com)


## Step 1: Host images on an external server

It is important that each images gets its own unique url.

You can use:
-	Your own webserver
-	A github account (like this one. Make sure you turn on github pages option)
-	An image hosting service (example https://imgbb.com/)


## Step 2: Load the images in codeguppy.com

To display in codeguppy an image from an url, you can use `loadImage` function:

```javaScript
loadImage(url, onImageLoaded);
```

This function expects the Url of the image and will trigger the provided onImageLoaded function when the image finished loading.

Example:

https://codeguppy.com/code.html?AI2Gs8jAKHRHsVpWWCBl


## Step 3: Load multiple images

This example shows how to load multiple images, and trigger a function when all of them were loaded:

https://codeguppy.com/code.html?5lwOH4VAbjTfTBzEoLbr


## Step 4: Loading sprites

You can change the code above slightly to load images and create the sprite in the function itself:

https://codeguppy.com/code.html?TTcoHr5OVqJAAGlWQvV1


## Step 5: Loading multiple sprites

You can use the above function to load multiple sprites. 
Eventually, you can put the sprite loader functions in a “hidden” module:

https://codeguppy.com/code.html?NlZXS33bYvERs8Ry8UXt


## Note: 

If images are small, you can encode them MIME64 and store them directly in the code (no extra server involved):
https://codeguppy.com/code.html?e9A7z9A5PsebKlfFSc3I


---


## Credits:

- These sprites are from the excellent GameArt2D website:
https://www.gameart2d.com/license.html
