$(document).ready(function () {

    $('#signInForm').validate({
        rules: {
            username: {
                required: true,
                minlength: 5,
                maxlength: 30,
            },
            password: {
                required: true,
                minlength: 8,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
            }
        },
    });

    $('#registerForm').validate({
        rules: {
            username: {
                required: true,
                minlength: 5,
                maxlength: 30,
            },
            password: {
                required: true,
                minlength: 8,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
            },
            repassword: {
                required: true,
                equalTo: '#password-field',
            },
            identityNumber: {
                required: true,
            }
        },
    });

    $.validator.addMethod("regex", function (value, element, regularExpression) {
        var re = new RegExp(regularExpression);
        return this.optional(element) || re.test(value);
    }, "Please follow the true format");

});