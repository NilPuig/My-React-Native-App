import createDataContext from './createDataContext';
import { accessKeyUnsplash, baseUrlUnsplash } from '../config/unsplash';

const initialState = {
  images: [],
  refreshing: false,
  page: 1,
};

const CALL_API = 'call_api';
const FETCHED_IMAGES = 'fetched_images';
const REFRESHED_IMAGES = 'refreshed_images';

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_IMAGES: {
      return {
        ...state,
        images: [...state.images, ...action.payload],
        refreshing: false,
        page: state.page + 1,
      };
    }
    case REFRESHED_IMAGES: {
      const newImages = [];
      const existingImages = state.images;
      const existingImagesIds = existingImages.map(({ id }) => id);

      action.payload.forEach((img) => {
        if (existingImagesIds.includes(img.id)) {
          return;
        }
        newImages.push(img);
      });

      return {
        ...state,
        images: [...newImages, ...existingImages],
        refreshing: false,
      };
    }
    case CALL_API: {
      return {
        ...state,
        refreshing: true,
      };
    }
    default:
      return state;
  }
};

const callImagesApi = async (page) => {
  let images = [];

  try {
    const imagesUrl = `https://${baseUrlUnsplash}/photos?client_id=${accessKeyUnsplash}&page=${page}`;
    const data = await fetch(imagesUrl);

    if (data && Array.isArray(data)) {
      images = data;
    }
  } catch (error) {
    console.log('Error at callImagesApi:', error);
  }

  return images;
};

const fetchImages = (dispatch) => async (page = 1) => {
  dispatch({
    type: CALL_API,
  });

  const images = await callImagesApi(page);

  dispatch({
    type: FETCHED_IMAGES,
    payload: images,
  });
};

const onRefreshImages = (dispatch) => async () => {
  dispatch({
    type: CALL_API,
  });

  const page = 1;
  const images = await callImagesApi(page);

  dispatch({
    type: REFRESHED_IMAGES,
    payload: images,
  });
};

const actions = {
  fetchImages,
  onRefreshImages,
};

export const { Context, Provider } = createDataContext(
  apiReducer,
  actions,
  initialState,
);
