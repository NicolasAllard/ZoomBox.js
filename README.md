# ZoomBox.js

ZoomBox.js is a small JavaScript library that turns a user's cursor into a magnifying glass that works on any images.

## Implementation

Simply import the following line:

   `<script src="zoombox.js"></script>`

in head of the HTML document.


## How to use

1. Create a new instance of the ZoomBox
`let zoomBox = new ZoomBox(image, posX, posY, width, height, regionWidth, regionHeight, zoomBoxWrapper);`

| Parameter | Type | Description |
|--|--|--|
| image | Object | DOM element of the targeted image. The parent of this DOM must have its position set as relative. |
| posX | String | X position for the ZoomBox |
| posY | String | Y position for the ZoomBox |
| width | String | Width for the ZoomBox |
| height | String | Height for the ZoomBox |
| regionWidth | String | Magnifying glass lens width |
| regionHeight | String | Magnifying glass lens Height |
| zoomBoxWrapper | Object | DOM element in which the ZoomBox should be created |
