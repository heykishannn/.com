const downloadButton = document.querySelector('.download-button');

downloadButton.addEventListener('click', function(event) {
    event.preventDefault(); // डिफ़ॉल्ट क्रिया को रोकें
    alert('डाउनलोड शुरू हो रहा है...');
    // यहाँ आप अपने ऐप के डाउनलोड लिंक पर रीडायरेक्ट कर सकते हैं:
    // window.location.href = 'YOUR_APP_DOWNLOAD_LINK';
});
