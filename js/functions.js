var navBar = document.getElementsByClassName('navBar'); // get all elements
Array.from(navBar).forEach((element, index) => {
    element.innerHTML =
        `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a onclick="closeModal()" class="navbar-brand">Cristovao Galambos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" accesskey="x" onclick="closeModal()">Home</a>
                </li>
                <li class="nav-item">
                    <a accesskey="q" class="nav-link" type="button" data-bs-toggle="modal" href="#aboutMe" role="button" 
                    aria-label="Close">About Me</a>
                </li>
                <li class="nav-item">
                    <a accesskey="w" class="nav-link" data-bs-toggle="modal" href="#skills" role="button" 
                    aria-label="Close">Skills</a>
                </li>
                <li class="nav-item">
                    <a accesskey="a" class="nav-link" data-bs-toggle="modal" href="#experiences" role="button">
                    Experiences</a>
                </li>
                <li class="nav-item">
                    <a accesskey="s" class="nav-link" data-bs-toggle="modal" href="#resume" role="button" 
                    aria-label="Close">Contact</a>
                </li>
            </ul>
            
        </div>
    </div>
    </nav>
    `
});

// Closing modal function
function closeModal() {
    document.body.removeAttribute('class');
    document.body.removeAttribute('style');
    const backdrop = document.querySelector('.modal-backdrop.show');
    var modal = document.getElementsByClassName('modal');
    for (var i = 0; i < modal.length; i++) {
        // Make modal hide
        modal[i].style.display = "none";
        // Remove the `modal-open` class from the body
        backdrop.remove();
    }
}

function getFocusFname() {
    document.getElementById("form_name").focus();
}

function getFocusLname() {
    document.getElementById("form_lastname").focus();
}

function getFocusEmail() {
    document.getElementById("form_email").focus();
}

function getFocusMessage() {
    document.getElementById("form_message").focus();
}