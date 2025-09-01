# Etch-a-sketch
Part of The Odin Project JS foundations course. Built as per task requirements, with additional functionality.

[Live version](https://al-moreton.github.io/etch-a-sketch/)

## How it's made
**Tech used:** HTML, CSS, JavaScript

CSS flex was used for the first time, numerous event listeners (including my first look at touch events), template literals were used to better add in JS variables to strings.

## Optimisation and improvements
I added `touchstart` and `touchmove` event listeners to get it working on mobile devices. X and Y coordinates of the touch events had to be compared to the `grid-elements` using `getClientBoundingRect()` where I could then change the background colour of the square.

I think the way I implemented `buildGrid()` is quite efficient from looking at other examples on TOP, using a simple for loop.

Realised that `querySelector` creates a Node list, which isn't live, compared to the arrays built by `getElementsByClassName`, which was needed to add the grid-elements to an array before the grid was built.

CSS added so that it looks good on both mobile and desktop.

Added event listeners for active and hover styling for buttons, instead of using CSS.

Added an HTML colour picker to choose the default colour.

## Things I would like to add
- A better way to change the colour of the squares - at the moment I've written an if statement to split out if an event was `mouseover` or a touch event - but they are effectively doing the same thing - it seems innefficient
- Grid squares lose aspect ratio when screen size changes - would be nice to not have to reload after changing screen size




