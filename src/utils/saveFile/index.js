function saveFile(filename, response) {
  const data = new Blob([response.data]);
  const url = window.URL.createObjectURL(data);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

export default saveFile;
