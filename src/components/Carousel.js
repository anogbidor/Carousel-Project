import { useState } from "react";
import images from "./imageData";
import "./Carousel.css";

//The useState hook is imported from the react library to manage the state of the imageShow variable,
// which represents the index of the currently displayed image in the images array.

const Carousel = () => {
  const [imageShow, setImageShow] = useState(0); // i used the useState Hook to initialize the imageShow variable to o
  // This means that first image in the images array will be the first to be displayed

  const goToPreviousImage = () => {
    //The goToPreviousImage() function checks if the current image is the first image in the images array.
    // If it is, then it sets the imageShow state variable to the last index in the images array.
    // Otherwise, it decrements the imageShow state variable by 1.
    if (imageShow === 0) {
      setImageShow(images.length - 1);
    } else {
      setImageShow(imageShow - 1);
    }
  };

  const goToNextImage = () => {
    // The goToNextImage() function checks if the current image is the last image in the images array.
    // If it is, then it sets the imageShow state variable to 0, which means the first image will be displayed.
    // Otherwise, it increments the imageShow state variable by 1.
    if (imageShow === images.length - 1) {
      setImageShow(0);
    } else {
      setImageShow(imageShow + 1);
    }
  };

  // Nothing to see here in the jsx part as it's just Css and someone with an exceptional eye for design and simplicity (happy face!)

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          src={images[imageShow]}
          alt="carousel img"
          className="carousel-image"
        />
      </div>
      <div className="button-container">
        <div className="carousel-arrow" onClick={goToPreviousImage}>
          <i className="fas fa-chevron-left"> ← </i>
        </div>
        <div className="carousel-arrow" onClick={goToNextImage}>
          <i className="fas fa-chevron-right"> → </i>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
