//====================================alert===========================

export function alertButton() {


    const arrayalertButton = document.querySelectorAll("#portfolio");
    //console.log(arrayalertButton);

    arrayalertButton.forEach(alertButton => {
        if (alertButton) {
            // console.log('aler1')
            const alert = document.querySelector('.alert');
            alertButton.addEventListener("click", function () {
                alert.classList.add("_open-alert");
            });
        };

    });


    const alertCancel = document.querySelector('.alert__cancel');

    if (alertCancel) {
        // console.log('aler2')

        alertCancel.addEventListener("click", function () {
            const alert = document.querySelector('.alert');
            alert.classList.remove("_open-alert");
        });
    }

    try {
        alert.addEventListener("click", function (e) {
            if (!e.target.closest(".alert__content")) {
                const alert = document.querySelector('.alert');
                alert.classList.remove("_open-alert");
            };
        })
    } catch (error) {

    }
}