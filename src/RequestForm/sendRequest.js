import axios from "axios";

export const sendRequest = async (requestData) => {
  try {
    console.log("input", requestData);
    const cleanedRequestData = cleanUpRequest(requestData);
    console.log("cleaned", cleanedRequestData);
    const response = await axios.request(cleanedRequestData);
    console.log(response.data); // Set data to the response data
    return response;
  } catch (err) {
    console.log(err); // Handle error if request fails
  }
};

// Helper function to clean an array by filtering out invalid elements
const cleanArray = (arr) => {
  if (!arr) return null; // Return empty object if array is not present
  return arr
    .filter((item) => item.enabled && item.key && item.value) // Keep only items where enabled is true and both key and value exist
    .reduce((acc, curr) => {
      acc[curr.key] = curr.value; // Convert array of key-value pairs into an object
      return acc;
    }, null);
};

export const cleanUpRequest = (requestData) => {
  // Clean up the params, headers, and data arrays
  const cleanedParams = cleanArray(requestData?.params);
  const cleanedHeaders = cleanArray(requestData?.headers);
  const cleanedData = cleanArray(requestData?.data);

  // Return cleaned-up Axios request configuration
  return {
    method: requestData.method,
    baseURL: requestData.baseURL,
    params: cleanedParams,
    headers: cleanedHeaders,
    data: cleanedData,
  };
};
