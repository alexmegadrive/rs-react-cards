import React from "react";
import { IImageItem, IImageResponseItem } from "../../../api/imageSearchApi";
import styles from "../ImagesGallery.module.scss";

type ImageModalProps = {
  image?: IImageResponseItem;
  closeModal: () => void;
};

const ImageModal = ({ image, closeModal }: ImageModalProps) => {
  return (
    <div
      className={styles.modalOverlay}
      onClick={closeModal}
      data-testid="modal"
    >
      <div
        className={styles.modal}
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
      >
        <div className={styles.modal__imageWrapper}>
          <img
            className={styles.modal__image}
            src={image?.largeImageURL}
            alt={image?.tags}
          />
        </div>
        <div className={styles.tags__container}>
          {image &&
            image.tags.split(",").map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
        </div>
        <div>Author: {image?.user}</div>
      </div>
    </div>
  );
};

export default ImageModal;
