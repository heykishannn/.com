const downloadButton = document.querySelector('.download-button');

downloadButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('डाउनलोड शुरू हो रहा है...');
    // window.location.href = 'YOUR_APP_DOWNLOAD_LINK';
});
