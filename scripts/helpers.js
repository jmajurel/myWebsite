function ajaxCall(url, method, contentType, body) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.send(body);
}