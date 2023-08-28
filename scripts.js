// Get elements from the HTML document
const selectFileButton = document.getElementById('selectFileButton');
const fileInput = document.getElementById('fileInput');
const selectedFileName = document.getElementById('selectedFileName');
const uploadButtonContainer = document.getElementById('uploadButtonContainer');
const fileInfoContainer = document.getElementById('fileInfoContainer');
const infoContainer = document.getElementById('infoContainer');
const originalName = document.getElementById('originalName');
const fileSize = document.getElementById('fileSize');
const mimeType = document.getElementById('mimeType');

// Listen for the "Select a file" button click
selectFileButton.addEventListener('click', () => {
  fileInput.click();
});

// Listen for file selection
fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    selectedFileName.textContent = fileInput.files[0].name;
    fileInfoContainer.style.display = 'block';
    uploadButtonContainer.style.display = 'block';
  }
});

// Listen for form submission
document.getElementById('uploadForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Create FormData and send request
  const formData = new FormData(document.getElementById('uploadForm'));
  const response = await fetch('https://rf-backend-production.up.railway.app/upload', {
    method: 'POST',
    body: formData
  });

  // Parse response JSON and display file details
  const data = await response.json();
  originalName.textContent = data.details.originalName;
  fileSize.textContent = data.details.size;
  mimeType.textContent = data.details.mimeType;
  infoContainer.style.display = 'block';
});
