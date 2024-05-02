document.getElementById('cat').addEventListener('click', function() {
    let clicks = parseInt(document.getElementById('clicks').innerText);
    clicks++;
    document.getElementById('clicks').innerText = clicks;
});
