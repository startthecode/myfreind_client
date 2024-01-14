export const useFileExtentionChecker = (filename) => {
  // Array of common video file extensions
  const videoExtensions = [
    "mp4",
    "mov",
    "avi",
    "mkv",
    "wmv",
    "flv",
    "webm",
    "m4v",
    "mpeg",
    "mpg",
    "3gp",
  ];

  // Array of common image file extensions
  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "tiff",
    "webp",
    "svg",
    "ico",
  ];

  // Example: Checking if a file has a video extension
  const fileExtension = filename.split(".").pop().toLowerCase();

  if (videoExtensions.includes(fileExtension)) {
    return "video";
  } else if (imageExtensions.includes(fileExtension)) {
    return "image";
  } else {
    return "unrecognised file extension";
  }
};
