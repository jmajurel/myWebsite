var NB_OF_PAGE = 5; 
var EMAIL_SERVICE_URL = "https://mymailer-api.herokuapp.com/";

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

    var body = {
        from : email.value,
        message: message.value
    };
    ajaxCall(EMAIL_SERVICE_URL, "POST", "application/json", JSON.stringify(body));
});