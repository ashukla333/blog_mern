import api from "./config";


// GET METHOD
export const customAxiosGET = async ( url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    return {
      message: "Something Went Wrong: " + error.message,
      error: error,
    };
  }
};

// POST METHOD
export const customAxiosPOST = async ( url, data, config) => {
  try {
    const body = data;
    const response = await api.post(url, body, config);
    return response.data;
  } catch (error) {
    return {
      message: "Something Went Wrong: " + error.message,
      error: error,
    };
  }
};

// PUT METHOD
export const customAxiosPUT = async ( url, data, config) => {
  try {
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    return {
      message: "Something Went Wrong:" + error.message,
      error: error,
    };
  }
};

// DELETE METHOD
export const customAxiosDELETE = async ( url, data, config) => {
  try {
    const response = await api.delete(url, { data, ...config });
    return response.data;
  } catch (error) {
    return {
      message: "Something Went Wrong: " + error.message,
      error: error,
    };
  }
};