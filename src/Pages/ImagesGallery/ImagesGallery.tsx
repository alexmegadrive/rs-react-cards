import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ImagesList from "../../components/ImagesList";
import { imageSearchApiCall } from "../../api/imageSearchApi";
import { useQuery } from "react-query";
import LoadingIndicator from "../../components/LoadingIndicator";

const ImagesGallery = () => {
  const [imageQuery, setImageQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery(
    ["images", imageQuery],
    () => imageSearchApiCall(imageQuery)
    // { keepPreviousData: true }
  );

  return (
    <>
      <Header />
      <main className="main">
        <SearchBar callback={setImageQuery} queryKey="imagesQuery" />
        {isError ? (
          <div>There is an error</div>
        ) : isLoading ? (
          <LoadingIndicator />
        ) : !data || (data.images && data.images.length === 0) ? (
          <div>No images found</div>
        ) : (
          <ImagesList images={data.images} loading={loading} />
        )}
      </main>
    </>
  );
};

export default ImagesGallery;
