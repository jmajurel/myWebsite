var thresholdValue = 0.3;

var options = {
    rootMargin: "0px",
    threshold: thresholdValue
};

function handleInViewPort(entries) {
    if(!entries || entries.length <= 0) return;
    var currEntry;
    for(var i = 0; i < entries.length; i++){
        currEntry = entries[i];
        if(currEntry.intersectionRatio > thresholdValue){
            console.log("in viewport");
            currEntry.target.style.animation = 'popup-anim 1s forwards ease-out'
        } else {
            currEntry.target.style.animation = 'none';
        }
    }
}

var observer = new IntersectionObserver(handleInViewPort, options);

var elements = document.getElementsByClassName("popup-onscroll");

for(var i = 0; i <elements.length; i++)
    observer.observe(elements[i]);


