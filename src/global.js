document.getElementById('colorToggleBtn').addEventListener('click', function() {
    var currentColor = document.body.style.backgroundColor;
    if (currentColor === 'rgb(17, 17, 17)') {
        document.body.style.backgroundColor = '#e3e7f0';
    } else {
        document.body.style.backgroundColor = '#111111ec';
    }
});