export default function trackQueryString() {
  const urlSearchObj = new URL(window.location.href);
  const urlParams = new URLSearchParams(urlSearchObj.search);
  return urlParams.get("brand");
}
