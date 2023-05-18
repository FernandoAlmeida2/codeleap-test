import dayjs from "dayjs";

export function getTimePost(datetime) {
  const timeDiff = dayjs().diff(datetime, "second");

  if (timeDiff < 60) {
    return `${timeDiff} seconds ago`;
  }
  if (timeDiff < 120) {
    return `${Math.round(timeDiff / 60)} minute ago`;
  }
  if (timeDiff < 3600) {
    return `${Math.round(timeDiff / 60)} minutes ago`;
  }
  if (timeDiff < 7200) {
    return `${Math.round(timeDiff / 3600)} hour ago`;
  }
  if (timeDiff < 86400) {
    return `${Math.round(timeDiff / 3600)} hours ago`;
  }
  return dayjs(datetime).format("MM/DD/YYYY");
}
