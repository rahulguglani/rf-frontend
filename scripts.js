const uploadForm = document.getElementById('uploadForm');
const responseInfo = document.getElementById('responseInfo');
const originalName = document.getElementById('originalName');
const fileSize = document.getElementById('fileSize');
const mimeType = document.getElementById('mimeType');
const filePath = document.getElementById('filePath');
const fileInput = document.getElementById('fileInput');
const noFileMessage = document.querySelector('.no-file');

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    noFileMessage.textContent = fileInput.files[0].name;
  } else {
    noFileMessage.textContent = 'No file chosen';
  }
});

uploadForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(uploadForm);
  const response = await fetch('https://rf-backend-production.up.railway.app/upload', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();

  originalName.textContent = data.fileInfo.originalName;
  fileSize.textContent = data.fileInfo.size;
  mimeType.textContent = data.fileInfo.mimeType;
  filePath.textContent = data.fileInfo.filePath;

  responseInfo.style.display = 'block';
});