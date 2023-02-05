export async function uploadImage(files) {
  let temp = [];
  const url = process.env.REACT_APP_CLOUDINARY_URL;

  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        temp.push(data.url);
      });
  }
  return temp;
}
