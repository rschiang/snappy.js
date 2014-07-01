html2canvas(document.body, {
    logging: true,
    timeout: 3000,
    proxy: "http://yes.we.do", // We modified the proxy code
    onrendered: function(canvas) {
        var parent = document.body;
        var img = document.createElement('img');
        img.src = canvas.toDataURL();

        while (parent.firstChild)
            parent.removeChild(parent.firstChild);

        parent.appendChild(img);
    }
});
