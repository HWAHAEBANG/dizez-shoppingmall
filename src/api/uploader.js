// 선택된 file을 전달해주면 업로드 해주고, 업로드 된 URL을 리턴해줄 것임.
export async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

  return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => data.url);
}
