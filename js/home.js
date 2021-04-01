function loadRoomlist(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<h1>Loading...</h1>';
    setTimeout(() => {
        child.innerHTML = '<h1>Success...</h1>';
        $('#child').load("roomlistView.html #load", function () {
            $('#extable').DataTable();
            $('[data-toggle="tooltip"]').tooltip();

            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function () {
                if (this.checked) {
                    checkbox.each(function () {
                        this.checked = true;
                    });
                }
                else {
                    checkbox.each(function () {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function () {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });
        });
    }, 500);

}

function loadBooked(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<h1>Loading...</h1>';
    setTimeout(() => {
        child.innerHTML = '<h1>Success...</h1>';
        $('#child').load("bookedView.html #load", function () {
            $('#bookedTable').DataTable();
            $('[data-toggle="tooltip"]').tooltip();
            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function () {
                if (this.checked) {
                    checkbox.each(function () {
                        this.checked = true;
                    });
                }
                else {
                    checkbox.each(function () {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function () {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });
        });
    }, 500);
}
function loadCheckin(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<h1>Loading...</h1>';
    setTimeout(() => {
        child.innerHTML = '<h1>Success...</h1>';
        $('#child').load("checkinView.html #load", function () {
            $('#checkinTable').DataTable();
            $('[data-toggle="tooltip"]').tooltip();
            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function () {
                if (this.checked) {
                    checkbox.each(function () {
                        this.checked = true;
                    });
                }
                else {
                    checkbox.each(function () {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function () {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });
        });
    }, 500);
}
function loadCheckout(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<h1>Loading...</h1>';
    setTimeout(() => {
        child.innerHTML = '<h1>Success...</h1>';
        $('#child').load("checkoutView.html #load", function () {
            $('#checkoutTable').DataTable();
        });
    }, 500);
}
function loadService(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<h1>Loading...</h1>';
    setTimeout(() => {
        child.innerHTML = '<h1>Success...</h1>';
        $('#child').load("serviceView.html #load", function () {
            $('#serviceTable').DataTable();
            $('[data-toggle="tooltip"]').tooltip();

            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function () {
                if (this.checked) {
                    checkbox.each(function () {
                        this.checked = true;
                    });
                }
                else {
                    checkbox.each(function () {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function () {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });

        });
    }, 500);
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// function loadService(id) {
//     var child = document.getElementById("child");
//     child.innerHTML = '<h1>Loading...</h1>';
//     setTimeout(() => {
//         child.innerHTML = '<h1>Success...</h1>';
//         $('#child').load("serviceView.html #load");
//     }, 500);
// }
function loadRoomcategory(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<h1>Loading...</h1>';
    setTimeout(() => {
        child.innerHTML = '<h1>Success...</h1>';
        $('#child').load("roomcateView.html #load");
    }, 500);
}
// function loadRevenue(id) {
//     var child = document.getElementById("child");
//     child.innerHTML = '<h1>Loading...</h1>';
//     setTimeout(() => {
//         child.innerHTML = '<h1>Success...</h1>';
//         $('#child').load("revenueView.html #load");
//     }, 500);
// }
// function loadUser(id) {
//     var child = document.getElementById("child");
//     child.innerHTML = '<h1>Loading...</h1>';
//     setTimeout(() => {
//         child.innerHTML = '<h1>Success...</h1>';
//         $('#child').load("loaduserView.html #load");
//     }, 500);
// }

$(document).ready(function () {
    $.validator.addMethod("regex", function (value, element, regularExpression) {
        var re = new RegExp(regularExpression);
        return this.optional(element) || re.test(value);
    }, "Please follow the true format");

    $.validator.addMethod("greaterThan", function (value, element, greater) {
        return value >= greater;
    });

    $.validator.addMethod("lesserThan", function (value, element, lesser) {
        return value <= lesser;
    });

    $('#edit-room').validate({
        rules: {
            roomNumber: {
                regex: /^(A|B|C)[0-9]{4}$/,
                required: true,
            },
            roomCapacity: {
                regex: /^[0-9]$/,
                greaterThan: 1,
                lesserThan: 4,
                required: true,
            },
            roomStatus: {
                required: true,
            },
            roomPrice: {
                regex: /^[0-9]+$/,
                greaterThan: 1000,
                required: true,
            }
        },
        messages: {
            roomNumber: {
                regex: "Wrong format",
            },
            roomCapacity: {
                greaterThan: "At least 1 guest",
                lesserThan: "At max 4 guests",
                regex: "Only number",
            },
            roomPrice: {
                regex: "Only number",
                greaterThan: "At least 1000 dong",
            }
        }
    });

    $('#add-room').validate({
        rules: {
            roomNumber: {
                regex: /^(A|B|C)[0-9]{4}$/,
                required: true,
            },
            roomCapacity: {
                regex: /^[0-9]$/,
                greaterThan: 1,
                lesserThan: 4,
                required: true,
            },
            roomStatus: {
                required: true,
            },
            roomPrice: {
                regex: /^[0-9]+$/,
                greaterThan: 1000,
                required: true,
            }
        },
        messages: {
            roomNumber: {
                regex: "Wrong format",
            },
            roomCapacity: {
                greaterThan: "At least 1 guest",
                lesserThan: "At max 4 guests",
                regex: "Only number",
            },
            roomPrice: {
                regex: "Only number",
                greaterThan: "At least 1000 dong",
            }
        }
    });

    $.validator.addMethod('dateBefore', function (value, element, params) {
        // if end date is valid, validate it as well
        var end = $(params);
        if (!end.data('validation.running')) {
            $(element).data('validation.running', true);
            setTimeout($.proxy(

            function () {
                this.element(end);
            }, this), 0);
            // Ensure clearing the 'flag' happens after the validation of 'end' to prevent endless looping
            setTimeout(function () {
                $(element).data('validation.running', false);
            }, 0);
        }
        return this.optional(element) || this.optional(end[0]) || new Date(value) < new Date(end.val());

    }, 'Must be before corresponding end date');

    $.validator.addMethod('dateAfter', function (value, element, params) {
        // if start date is valid, validate it as well
        var start = $(params);
        if (!start.data('validation.running')) {
            $(element).data('validation.running', true);
            setTimeout($.proxy(

            function () {
                this.element(start);
            }, this), 0);
            setTimeout(function () {
                $(element).data('validation.running', false);
            }, 0);
        }
        return this.optional(element) || this.optional(start[0]) || new Date(value) > new Date($(params).val());

    }, 'Must be after corresponding start date');

    $('#add-booking').validate({
        rules: {
            checkInName: {
                required: true,
                regex: 
                /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
            },
            checkInContact: {
                required: true, 
                regex: /^[0-9]{9}$/,
            },
            checkInStart: {
                required: true,
                dateBefore: '#Check-In-DateBoooking'
            },
            checkInEnd: {
                required: true,
                dateAfter: '#Check-Out-DateBooking'
            },
            checkInDayStay: {
                greaterThan: 1,
                required: true,
            }
        },
        messages: {
            checkInName: {
                regex: "Only characters"
            },
            checkInContact: {
                regex: "Only number and 9 digits"
            },
            checkInDayStay: {
                greaterThan: "At least "
            }
        }
    });

    $('#add-service').validate({
        rules: {
            serviceName: {
                required: true,
                regex: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
            },
            categoryName: {
                required: true, 
                regex: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
            },
            image: {
                required: true,
            },
            servicePrice: {
                regex: /^[0-9]+$/,
                greaterThan: 1000,
                required: true,
            }
        },
        messages: {
            serviceName: {
                regex: "Only character",
            },
            categoryName: {
                regex: "Only character"
            },
            servicePrice: {
                regex: "Only number",
                greaterThan: "At least 1000 dong"
            }
            
        }
    });
});