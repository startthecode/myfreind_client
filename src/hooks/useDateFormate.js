const useDateFormate = (date) => {
  const now = new Date();
  const timestamp = new Date(date);

  if (date?.toString()?.includes(" ") || date?.toString()?.includes("India")) {
    const differenceInMilliseconds = now - timestamp;

    // Convert milliseconds to seconds
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

    // Generate the "time ago" string based on the calculated minutes
    let timeAgoString = "";

    if (differenceInSeconds < 60) {
      // Less than a minute
      if (differenceInSeconds === 0) return "just now";
      timeAgoString = `${differenceInSeconds} ${
        differenceInSeconds === 1 ? "second" : "seconds"
      } ago`;
    } else if (differenceInSeconds < 3600) {
      // Less than an hour
      const minutes = Math.floor(differenceInSeconds / 60);
      timeAgoString = `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (differenceInSeconds < 86400) {
      // Less than a day
      const hours = Math.floor(differenceInSeconds / 3600);
      timeAgoString = `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else {
      // More than a day
      const days = Math.floor(differenceInSeconds / 86400);
      timeAgoString = `${days} ${days === 1 ? "day" : "days"} ago`;
    }

    return timeAgoString;
  }

  const seconds = Math.floor((now - timestamp) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (seconds > 0) {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else {
    return 'just now';
  }
};

export default useDateFormate;
