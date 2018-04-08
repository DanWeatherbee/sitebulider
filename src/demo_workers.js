var i = 0;

function timedCount() {
    if (i === 3) {
        i = 0;

    }
     i = i + 1;

    var image = '<img src="img/bg' + i + '.jpg" class="img-thumbnail z-depth-5 zoom worker-img">';
    postMessage(image);
    setTimeout("timedCount()", 1);
}

timedCount();