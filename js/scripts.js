function showDetails(album) {
    const overlay = album.querySelector('.overlay');
    overlay.style.opacity = (overlay.style.opacity === "1") ? "0" : "1";
}

function hideDetails(album) {
    const overlay = album.querySelector('.overlay');
    overlay.style.opacity = "0";
}

function toggleDetails(album) {
    const overlay = album.querySelector('.overlay');
    overlay.style.opacity = (overlay.style.opacity === "1") ? "0" : "1";
}