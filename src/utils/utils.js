// Generates URL for image assets
// Returns the URL for an image in the public directory
export const getImageUrl = (path) => {
  return `/${path}`; // Directly return the path as a root-relative URL
};
