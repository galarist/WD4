var navBar = document.getElementsByClassName('navBar'); // get all elements
Array.from(navBar).forEach((element, index) => {
    element.innerHTML = 
    `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" data-bs-dismiss="modal">Cristovao Galambos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-bs-dismiss="modal">Home</a>
                </li>
                <li class="nav-item">
                    <a accesskey="q" class="nav-link" type="button" data-bs-toggle="modal" href="#aboutMe" role="button" 
                    aria-label="Close">About Me</a>
                </li>
                <li class="nav-item">
                    <a accesskey="w" class="nav-link" data-bs-toggle="modal" href="#certs" role="button" 
                    aria-label="Close">Certificates</a>
                </li>
                <li class="nav-item">
                    <a accesskey="a" class="nav-link" data-bs-toggle="modal" href="#skillEx" role="button">
                    Skills & Experiences</a>
                </li>
                <li class="nav-item">
                    <a accesskey="s" class="nav-link" data-bs-toggle="modal" href="#resume" role="button" 
                    aria-label="Close">Resume</a>
                </li>
            </ul>
            
        </div>
    </div>
    </nav>
    `
});