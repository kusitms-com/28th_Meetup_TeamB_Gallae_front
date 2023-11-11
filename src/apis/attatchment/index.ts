export const handleDownload = async (fileSrc: string, fileName: string) => {
  const response = await fetch(fileSrc);
  const file = await response.blob();
  const downloadUrl = window.URL.createObjectURL(file);

  const anchorElement = document.createElement('a');
  document.body.appendChild(anchorElement);
  anchorElement.download = fileName;
  anchorElement.href = downloadUrl;

  anchorElement.click();

  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(downloadUrl);
};
