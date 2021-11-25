function validateEmail() {
    console.log("i am called");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var element = document.getElementById("email").value;

    if (element.match(validRegex)) {
        document.getElementById("email-error").style.opacity="0";
        document.getElementById("email").style.borderColor="hsl(223, 100%, 88%)";
    } else {
        document.getElementById("email-error").style.opacity="1";
        document.getElementById("email").style.borderColor="hsl(354, 100%, 66%)"
    }
}

function iconHover(obj) {
    var icon = document.getElementById(obj);
    var wrapper = "icon-wrapper-" + obj;
    var wrapper_obj = document.getElementById(wrapper)

    icon.style.color="#fff";
    wrapper_obj.style.backgroundColor="hsl(223, 87%, 63%)";
    wrapper_obj.style.cursor="pointer";

    icon.style.transitionDuration="0.3s";
    wrapper_obj.style.transitionDuration="0.3s"
}

function returnToDefault(obj) {
    var icon = document.getElementById(obj);
    var wrapper = "icon-wrapper-" + obj;
    var wrapper_obj = document.getElementById(wrapper)

    icon.style.color="hsl(223, 87%, 63%)";
    wrapper_obj.style.backgroundColor="#fff";

    icon.style.transitionDuration="0.3s";
    wrapper_obj.style.transitionDuration="0.3s"
}