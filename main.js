document.getElementById('clicker-image').addEventListener('click', function () {
    let clickCount = parseInt(document.getElementById('click-count').innerText.split(': ')[1]);
    clickCount++;
    document.getElementById('click-count').innerText = 'Click count: ' + clickCount;
});
