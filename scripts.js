function applyFilter(filter) {

    const filters = ['repair', 'diagnostics', 'cleaning'];


    for (let iterableFilter of filters) {
        const classList = document.getElementById('filter-' + iterableFilter).classList;

        if (iterableFilter === filter) {
            classList.add('d-flex');
            classList.remove('d-none');
        } else {
            classList.add('d-none');
            classList.remove('d-flex');
        }
    }
}


function validateForm(event) {

    const form = event.target;


    event.preventDefault();


    if (!form.checkValidity()) {

        form.classList.add('was-validated');
    } else {
        form.reset();
        form.classList.remove('was-validated');
    }
}