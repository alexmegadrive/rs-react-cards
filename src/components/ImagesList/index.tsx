import React, { useState } from "react";

import styles from "./ImagesGallery.module.scss";
import { IImageResponseItem } from "../../types/pixabayAPI";
import ImageModal from "./ImageModal/ImageModal";

type ImagesGalleryProps = {
  images: IImageResponseItem[];
  loading?: boolean;
};
const ImagesList: React.FC<ImagesGalleryProps> = ({ images }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [currentImage, setCurrentImage] = useState<IImageResponseItem>();

  return (
    <div className={styles.container}>
      {images.length > 0 &&
        images.map((image: IImageResponseItem, index) => (
          <div
            key={index}
            data-testid={"image-card"}
            className={styles.imageCardWrapper}
            onClick={() => {
              setCurrentImage(image);
              setModalOpened(true);
            }}
          >
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                alt={image.tags}
                src={image.largeImageURL}
              />
            </div>
          </div>
        ))}
      {modalOpened ? (
        <ImageModal
          image={currentImage}
          closeModal={() => setModalOpened(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ImagesList;
