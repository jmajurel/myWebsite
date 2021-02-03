var thresholdValue = 0.3;

var options = {
    rootMargin: "0px",
    threshold: thresholdValue
};

function handleInViewPort(entries) {
    if(!entries || entries.length <= 0) return;
    var currEntry;
    var animationType;
    for(var i = 0; i < entries.length; i++){
        currEntry = entries[i];
        if(currEntry.intersectionRatio > thresholdValue){
            animationType = currEntry.target.getAttribute("anim");
            currEntry.target.style.animation = animationType + ' 1s forwards ease-out'
        } else {
            currEntry.target.style.animation = 'none';
        }
    }
}

var windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var isMobile = windowWidth < 991.98;

if(!isMobile){
    var observer = new IntersectionObserver(handleInViewPort, options);

    var animatedElements = document.getElementsByClassName("animated");
    
    for(var i = 0; i <animatedElements.length; i++)
        observer.observe(animatedElements[i]);
}