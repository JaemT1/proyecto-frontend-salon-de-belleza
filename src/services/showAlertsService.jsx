import Swal from "sweetalert2";

const showAlertsService = {
    showSuccessAlert : (title, text, showConfirmButton, timer) => {
        Swal.fire({
            icon: 'success',
            title: title,
            text: text,
            showConfirmButton: showConfirmButton,
            timer: timer
        });
    },

    showErrorAlert : (title, text, showConfirmButton, timer) => {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text,
            showConfirmButton: showConfirmButton,
            timer: timer
        });
    },

    showLoadingAlert : (title, html, timer, timerProgressBar) => {
        let timerInterval;
        Swal.fire({
            title: title,
            html: html,
            timer: timer,
            timerProgressBar: timerProgressBar,
            didOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    },

};

export default showAlertsService;