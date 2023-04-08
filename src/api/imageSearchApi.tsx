const baseURL = "https://pixabay.com/api/";
const APIKey = "24848647-9c50e0191dab5764d68291abd";

interface IImageResponseItem {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}

interface IImageResponseResult {
  hits: IImageResponseItem[];
  total: number;
  totalHits: number;
}

export interface IImageItem {
  url: string;
  id: number;
  alt: string;
  author: string;
}

export interface IImageSearchReturn {
  images: IImageItem[];
  total: number;
  error?: boolean;
}

export const imageSearchApiCall = async (query: string, page = 1) => {
  const response = await fetch(
    `${baseURL}?key=${APIKey}&q=${query}&per_page=10&page=${page}`
  )
    .then(async (response) => {
      const result: IImageResponseResult = await response.json();
      const images = result.hits.map((image: IImageResponseItem) => ({
        url: image.largeImageURL || "",
        id: image.id || -1,
        alt: image.tags || "",
        author: image.user || "",
      }));
      const total = result.total || 0;
      return { images, total };
    })
    .catch((error) => {
      console.log("error", error);
      return { images: [], total: 0, error: true };
    });

  return response;
};
