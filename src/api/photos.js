import axios from "axios";

function getPhotos() {
  return axios
    .get("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(({ data }) => data)
    .catch((e) => console.log(e));
}

function postPhotos() {
  return axios
    .get("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(({ data }) => data)
    .catch((e) => console.log(e));
}

export const photosApi = {
  getPhotos,
  postPhotos,
};
