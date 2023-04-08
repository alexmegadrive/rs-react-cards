import React, { useState } from "react";
import { QueryClient } from "react-query";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ImagesList from "../../components/ImagesList";
import { imageSearchApiCall, IImageItem } from "../../api/imageSearchApi";

const ImagesGallery = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState<IImageItem[]>([]);

  const getImages = async (imageName: string) => {
    setLoading(true);
    imageSearchApiCall(imageName)
      .then((res) => setImages(res.images))
      .catch((e: Error) => {
        setError(true);
        console.log("error", e);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />
      <main className="main">
        <SearchBar callback={getImages} queryKey="imagesQuery" />
        {error ? (
          <div>There is an error</div>
        ) : images.length === 0 ? (
          <div>No images found</div>
        ) : (
          <ImagesList images={images} loading={loading} />
        )}
      </main>
    </>
  );
};

export default ImagesGallery;
