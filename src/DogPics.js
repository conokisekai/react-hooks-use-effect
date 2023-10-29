import React, { useState, useEffect } from "react";

function DogPics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        setImages(data.message);
      });
  }, []);

  console.log("DogPics component rendering");

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} alt="Dog" />
      ))}
    </div>
  );
}

export default DogPics;
