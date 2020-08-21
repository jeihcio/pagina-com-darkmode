window.onload = function() {
    let root = document.getElementById("darkmode");
    root.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode-root');
    });
}