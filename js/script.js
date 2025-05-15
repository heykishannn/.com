// आप यहाँ अपनी आवश्यकताओं के अनुसार जावास्क्रिप्ट जोड़ सकते हैं,
// जैसे कि डाउनलोड बटन पर क्लिक करने पर कुछ क्रियाएँ करना।
const androidButton = document.querySelector('.android-button');
const iosButton = document.querySelector('.ios-button');

androidButton.addEventListener('click', function(event) {
    event.preventDefault(); // डिफ़ॉल्ट क्रिया को रोकें
    alert('Android डाउनलोड लिंक अभी उपलब्ध नहीं है।');
    // यहाँ आप Android ऐप के डाउनलोड लिंक पर रीडायरेक्ट कर सकते हैं:
    // window.location.href = 'YOUR_ANDROID_DOWNLOAD_LINK';
});

iosButton.addEventListener('click', function(event) {
    event.preventDefault(); // डिफ़ॉल्ट क्रिया को रोकें
    alert('iOS डाउनलोड लिंक अभी उपलब्ध नहीं है।');
    // यहाँ आप iOS ऐप के डाउनलोड लिंक पर रीडायरेक्ट कर सकते हैं:
    // window.location.href = 'YOUR_IOS_DOWNLOAD_LINK';
});
