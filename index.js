document.getElementById('is_student').addEventListener('change', function() {
    const universityField = document.getElementById('university_name');
    if (this.checked) {
        universityField.setAttribute('required', 'required');
    } else {
        universityField.removeAttribute('required');
    }
});