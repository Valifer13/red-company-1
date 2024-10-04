function loadFile(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text)
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

loadFile('navbar', '/includes/header.html');
loadFile('subscribe', '../../includes/subscribe.html');
loadFile('footer', '../../includes/footer.html');