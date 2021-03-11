//Author: Nicolas Allard
//Date: 2021-03-11
//Github: https://github.com/NicolasAllard/ZoomBox.js

class ZoomBox
{
    //Params:
    //@image {object} : image element to zoom on
    //@posX {string} : X position where to put the Zoom box
    //@posY {string} : Y position where to put the Zoom box
    //@width {string} : width of the ZoomBox
    //@height {string} : height of the ZoomBox
    //@regionWidth {string} : Zoom lens width
    //@regionHeight {string} : Zoom lens height
    //@zoomBoxWrapper {object} : Wrapper element in which the zoom box with be created
    constructor(image, posX, posY, width, height, regionWidth, regionHeight, zoomBoxWrapper)
    {
        //Verify the image exists
        if (image != undefined)
        {
            this.imageEle = image;
            this.posY = posY;
            this.posX = posX;
            this.width = width;
            this.height = height;
            this.regionWidth = regionWidth;
            this.regionHeight = regionHeight;
            this.zoomBoxWrapper = zoomBoxWrapper;
            this.isReady = true;
        }
        else
        {
            console.error("Image not found.");
            this.isReady = false;
        }
    }

    //Set all event listeners
    setEventListeners = () =>
    {
        //On mouse enter
        this.imageEle.addEventListener("mouseenter", () =>
        {
            this.zoomBox.style.display = "block";
            this.lens.style.display = "block";
        });

        //On mouse movement
        this.imageEle.addEventListener("mousemove", (e) =>
        {
            let currPos = this.getPos(e);
            let x;
            let y;

            e.preventDefault();

            //Lens position
            x = currPos.x - (this.regionWidth / 2);
            y = currPos.y - (this.regionHeight / 2);

            //Lens position limits
            if (x > this.imageEle.width - this.regionWidth)
            {
                x = this.imageEle.width - this.regionWidth;
            }

            if (x < 0)
            {
                x = 0;
            }

            if (y > this.imageEle.height - this.regionHeight)
            {
                y = this.imageEle.height - this.regionHeight;
            }

            if (y < 0)
            {
                y = 0;
            }

            //Set lens pos.
            this.lens.style.left = x + "px";
            this.lens.style.top = y + "px";

            //Display zoom
            this.zoomBox.style.backgroundPosition = "-" + (x * this.ratioX) + "px -" + (y * this.ratioY) + "px";

        });

        //On mouse leave
        this.imageEle.addEventListener("mouseout", (e) =>
        {
            this.zoomBox.style.display = "none";
            this.lens.style.display = "none";
        });
    }

    //Init zoom box
    init = () =>
    {

        //if zoombox not ready, exit.
        if (!this.isReady)
        {
            console.error("Not image set.");
            return;
        }

        //Create lens
        this.lens = document.createElement("div");
        this.lens.style.position = "absolute";
        this.lens.style.width = this.regionWidth.toString() + "px";
        this.lens.style.height = this.regionHeight.toString() + "px";
        //this.lens.style.border = "1px dashed black";
        this.lens.style.zIndex = "9999";
        this.lens.style.pointerEvents = "none";
        this.lens.style.visibility = "hidden";

        //Create zoom box
        this.zoomBox = document.createElement("div");

        //Set style
        this.zoomBox.style.position = "absolute";
        this.zoomBox.style.top = this.posY.toString() + "px";
        this.zoomBox.style.left = this.posX.toString() + "px";
        this.zoomBox.style.width = this.width.toString() + "px";
        this.zoomBox.style.height = this.height.toString() + "px";
        this.zoomBox.style.zIndex = "9000";
        this.zoomBox.style.border = "1px dashed black"
        this.zoomBox.style.pointerEvents = "none";
        this.zoomBox.style.visibility = "hidden";
        this.zoomBox.style.cursor = "zoom-in";

        //Set event listeners to image
        this.setEventListeners();

        //Append zoom box on the DOM's body
        this.zoomBoxWrapper.appendChild(this.zoomBox);
        this.imageEle.parentElement.appendChild(this.lens);

        this.ratioX = this.zoomBox.offsetWidth / this.lens.offsetWidth;
        this.ratioY = this.zoomBox.offsetHeight / this.lens.offsetHeight;

        //Set zoomBox background image
        this.zoomBox.style.backgroundSize = (this.imageEle.width * this.ratioX).toString() + "px " + (this.imageEle.height * this.ratioY).toString() + "px";
        this.zoomBox.style.backgroundImage = "url('" + this.imageEle.src + "')";

        //Hide lens and zoomBox
        this.lens.style.display = "none";
        this.lens.style.visibility = "visible";
        this.zoomBox.style.display = "none";
        this.zoomBox.style.visibility = "visible";
    }

    //Get cursor position from event object
    //Params:
    //@e {object} = event object
    //Returns Object { x: mouse position in image, y: mouse y position in image, pageX: mous x position in page, pageY: mouse y position in page}
    getPos(e)
    {
        let rect;
        let x = 0;
        let y = 0;

        e = e || window.event;

        rect = this.imageEle.getBoundingClientRect();

        x = e.pageX - rect.left;
        y = e.pageY - rect.top;

        x = x - window.pageXOffset;
        y = y - window.pageYOffset;

        return { x: x, y: y, pageX: e.pageX, pageY: e.pageY };
    }


    //Destroy zoomBox instance
    destroy()
    {
        this.zoomBox.remove();
        this.lens.remove();

        delete this;
    }

}
