import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ImagesList from "../../components/ImagesList";
import { imageSearchApiCall } from "../../api/imageSearchApi";
import { useQuery } from "react-query";
import LoadingIndicator from "../../components/LoadingIndicator";
import { IQueryParams } from "../../api/imageSearchApi";
import Pagination from "../../components/Pagination/Pagination";

const ImagesGallery = () => {
  const [imageQuery, setImageQuery] = useState<IQueryParams>({
    query: "",
    page: 1,
  });

  const handleChangeImageQuery = (value: string) => {
    setImageQuery({ page: 1, query: value });
  };
  const { data, isLoading, isError } = useQuery(
    ["images", imageQuery],
    () => imageSearchApiCall(imageQuery),
    { refetchOnMount: false }
  );
  const itemsPerPage = 10;
  const pageCount = Math.ceil(
    (data && data.total ? data.total : 0) / itemsPerPage
  );

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected + 1;
    setImageQuery((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <>
      <Header />
      <main className="main">
        <SearchBar callback={handleChangeImageQuery} queryKey="imagesQuery" />
        {isError ? (
          <div>There is an error</div>
        ) : isLoading ? (
          <LoadingIndicator />
        ) : !data || (data.images && data.images.length === 0) ? (
          <div>No images found</div>
        ) : (
          <ImagesList images={data.images} />
        )}
      </main>
      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
    </>
  );
};

export default ImagesGallery;
