import React from "react";
import { IImageItem } from "../../../api/imageSearchApi";
import styles from "../ImagesGallery.module.scss";

type ImageModalProps = {
  image?: IImageItem;
  closeModal: () => void;
};

const ImageModal = ({ image, closeModal }: ImageModalProps) => {
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div
        className={styles.modal}
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
      >
        <div className={styles.modal__imageWrapper}>
          <img
            className={styles.modal__image}
            src={image?.url}
            alt={image?.alt}
          />
        </div>
        <div className={styles.tags__container}>
          {image &&
            image.alt.split(",").map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
        </div>
        <div>Author: {image?.author}</div>
      </div>
    </div>
  );
};

export default ImageModal;
