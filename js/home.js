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
                required:true,
            },
            roomStatus: {
                required: true,
            },
            roomPrice: {
                regex: /^[0-9]+$/,
                greaterThan: 1000,
                required:true,
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
                greaterTham: "At least 1000 dong",
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
                required:true,
            },
            roomStatus: {
                required: true,
            },
            roomPrice: {
                regex: /^[0-9]+$/,
                greaterThan: 1000,
                required:true,
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
                greaterTham: "At least 1000 dong",
            }
        }
    });
});