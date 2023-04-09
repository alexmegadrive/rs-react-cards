import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ImagesList from "../../components/ImagesList";
import { imageSearchApiCall } from "../../api/imageSearchApi";
import { useQuery } from "react-query";
import LoadingIndicator from "../../components/LoadingIndicator";
import ReactPaginate from "react-paginate";
import { IQueryParams } from "../../api/imageSearchApi";
import Pagination from "../../components/Pagination/Pagination";
import { preview } from "vite";

interface ISelectPage extends React.SyntheticEvent {
  selectedItem: { selected: number };
}
const ImagesGallery = () => {
  const [imageQuery, setImageQuery] = useState<IQueryParams>({
    query: "",
    page: 1,
  });
  // const [loading, setLoading] = useState(false);
  // const [imageTextQuery, setImageTextQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleChangeImageQuery = (value: string) => {
    console.log("value :", value);
    setImageQuery((prev) => ({ page: 1, query: value }));
  };
  const { data, isLoading, isError } = useQuery(
    ["images", imageQuery],
    () => imageSearchApiCall(imageQuery)
    // { refetchOnMount: true }
    // { keepPreviousData: true }
  );
  const itemsPerPage = 10;
  const pageCount = Math.ceil(
    (data && data.total ? data.total : 0) / itemsPerPage
  );
  // console.log("data :", data);
  // console.log("pageCount :", pageCount);
  const handlePageClick = (selectedItem: { selected: number }) => {
    // console.log("event :", event);
    const newPage = selectedItem.selected + 1;
    setImageQuery((prev) => ({ ...prev, page: newPage }));

    // console.log("newPage :", newPage);
    setPage(newPage);
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log("page", page);
    // console.log(
    //   `User requested page number ${event.selected}, which is offset `
    // );
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    // setItemOffset(newOffset);
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
