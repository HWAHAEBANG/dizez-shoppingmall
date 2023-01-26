// 선택된 file을 전달해주면 업로드 해주고, 업로드 된 URL을 리턴해줄 것임.
// export async function uploadImage(file) {
//   const data = new FormData();
//   data.append("file", file);
//   data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

//   return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
//     method: "POST",
//     body: data,
//   })
//     .then((response) => response.json())
//     .then((data) => data.url);
// }

export async function uploadImage(files) {
  let temp = [];
  const url = process.env.REACT_APP_CLOUDINARY_URL;
  // const form = document.querySelector("form");

  // const files = document.querySelector("[type=file]").files;
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

    // 리턴을 걸면 값이 왜 하나만 넘어갈까...
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => data.url);
  }
}
