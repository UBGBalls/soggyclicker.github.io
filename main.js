let clicks = 0;

document.getElementById('cat').addEventListener('click', function() {
    clicks++;
    document.getElementById('clicks').innerText = clicks;
});
