var NB_OF_PAGE = 5; 
var EMAIL_SERVICE_URL = "https://localhost:8080/email";

var nextArrow = document.getElementById("next-arrow");

nextArrow.addEventListener('click', () => window.scrollTo({
    top: document.body.scrollHeight/NB_OF_PAGE,
    behavior: 'smooth',
}));

var contactFrom = document.getElementById("contact-form");

contactFrom.addEventListener("submit", function(evt) {
    console.log("submit event received");
    evt.preventDefault();

    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var body = encodeURI('email=' + email.value + '&message=' + message.value );
    ajaxCall(EMAIL_SERVICE_URL, "POST", "application/x-www-form-urlencoded", body);
});