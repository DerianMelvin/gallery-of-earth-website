import { useState } from "react";
import { imageListData } from "../data/ImageListData";
import { ImageCard } from "./ImageCard";

export const ImageList = () => {
  const [image, setImage] = useState(imageListData);

  return (
    <main className="w-full grow px-10 py-10 mx-auto flex flex-wrap gap-4 justify-center items-center place-content-start backdrop-blur-md backdrop-brightness-90">
      {image.map((img) => (
        <ImageCard imgName={img.imgName} imgLink={img.imgLink} />
      ))}
    </main>
  );
};
