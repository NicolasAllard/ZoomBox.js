

# ZoomBox.js

ZoomBox.js is a small JavaScript library that turns a user's cursor into a magnifying glass that works on any images.

## Implementation

Simply import the following line:

   `<script src="zoombox.js"></script>`

in head of the HTML document.


## How to use

1. Create a new instance of the ZoomBox <br>
`let zoomBox = new ZoomBox(image, posX, posY, width, height, regionWidth, regionHeight, zoomBoxWrapper);`

| Parameter | Type | Description |
|--|--|--|
| image | Object | DOM element of the targeted image. The parent of this DOM must have its position set as relative. Finally, make sure the image is correctly loaded before creating the ZoomBox instance |
| posX | String | X position for the ZoomBox |
| posY | String | Y position for the ZoomBox |
| width | String | Width for the ZoomBox |
| height | String | Height for the ZoomBox |
| regionWidth | String | Magnifying glass lens width |
| regionHeight | String | Magnifying glass lens height |
| zoomBoxWrapper | Object | DOM element in which the ZoomBox should be created |
<br>
2. Initiate the ZoomBox using the Init() method.<br>

   `zoomBox.init()`

## Other method(s)



| Method | Usage | Description |
|--|--|--|
| Destroy | ` zoomBox.destroy(); ` | Destroy the instance of the ZoomBox and the element it generated |


## TODO

 - [ ] Add a example project
 - [ ] Add parameters to add custom classes for a ZoomBox instance and the lens.

