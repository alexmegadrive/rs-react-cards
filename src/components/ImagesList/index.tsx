import React, { useState } from "react";

import styles from "./ImagesGallery.module.scss";
import { IImageItem } from "../../api/imageSearchApi";
import ImageModal from "./ImageModal/ImageModal";

type ImagesGalleryProps = {
  images: IImageItem[];
  loading?: boolean;
};
const ImagesList: React.FC<ImagesGalleryProps> = ({ images, loading }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [currentImage, setCurrentImage] = useState<IImageItem>();

  return (
    <div className={styles.container}>
      {images.length > 0 &&
        images.map((image: IImageItem, index) => (
          <div
            key={index}
            className={styles.imageCardWrapper}
            onClick={() => {
              setCurrentImage(image);
              setModalOpened(true);
            }}
          >
            <div className={styles.imageWrapper}>
              <img className={styles.image} alt={image.alt} src={image.url} />
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
