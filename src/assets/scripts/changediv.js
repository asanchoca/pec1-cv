
$(document).ready(function () {
    if (window.innerWidth <= 600) {
        $('#experience-title').addClass('cv--container-blue');
        $('#experience-info').removeClass('cv--container-blue');

        $('#certs-title').addClass('cv--container-blue');
        $('#certs-info').removeClass('cv--container-blue');
    } else {
        $('#experience-title').removeClass('cv--container-blue');
        $('#experience-info').addClass('cv--container-blue');

        $('#certs-title').removeClass('cv--container-blue');
        $('#certs-info').addClass('cv--container-blue');
    }
});