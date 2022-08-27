# AdvMouseCoords-for-p5.js
A great, yet small  unofficial library for p5js debugging.

Need to debug your p5.js programs, but don't want to program a tool?
AdvMouseCoords is for you!

## Basic Syntax

Basic Syntax for the base command goes as follows:
```
MouseCoords(Fps Counter: "on / off", FPS counter on mouse: "on / off", cursorDot: "on / off", previous mouse positionDot: "on / off");
```
Example:
```
MouseCoords("on", "on", "on", "on");
```
Would execute:

![CoordsScreen](https://user-images.githubusercontent.com/112206126/186985947-874ddb2f-762c-4ae0-a168-60dcf683c659.PNG)

## Additional Syntax (not reqiured)

some other functions are included in the program.

**MAKE SURE** you put **ANY** Additional syntax **ABOVE** the base command, to avoid any issues. although this will look weird in the code, that is what I found kinks out most of the bugs.

### DebugColor

The DebugColor command changes the color of the text. more style-related commands will be coming soon.

Basic syntax goes as follows: 
```
DebugColor(r, g, b);
```
Pretty self-explanatory, if you ask me :)

### CoordsKey

the CoordsKey command changes the key to any NON-MODIFIER KEY (possibly a fix soon!).

Basic syntax goes as follows:

```
CoordsKey("key");
```
also self-explanatory.

## How To Begin

In the `head` of your document at the bottom, paste
`TO BE POSTED`
And use it!
