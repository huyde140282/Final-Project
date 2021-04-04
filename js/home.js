// BarChart

function loadRoomlist(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<img src="../image/dragon.png " class="loading" alt="dragon" width="190px" height="190px" style ="display:block; margin: auto;">';
    setTimeout(() => {
        $('#child').load("roomlistView.html #load", function() {
            $('#extable').DataTable();
            $('[data-toggle="tooltip"]').tooltip();

            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function() {
                if (this.checked) {
                    checkbox.each(function() {
                        this.checked = true;
                    });
                } else {
                    checkbox.each(function() {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function() {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });
        });
    }, 500);

}

function loadBooked(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<img src="../image/dragon.png " class="loading" alt="dragon" width="190px" height="190px" style ="display:block; margin: auto;">';
    setTimeout(() => {
        $('#child').load("bookingView.html #load", function() {
            $('#bookedTable').DataTable();
            $('[data-toggle="tooltip"]').tooltip();
            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function() {
                if (this.checked) {
                    checkbox.each(function() {
                        this.checked = true;
                    });
                } else {
                    checkbox.each(function() {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function() {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });
        });
    }, 500);
}

function loadCheckin(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<img src="../image/dragon.png " class="loading" alt="dragon" width="190px" height="190px" style ="display:block; margin: auto;">';
    setTimeout(() => {
        $('#child').load("checkinView.html #load", function() {
            $('#checkinTable').DataTable();
            $('[data-toggle="tooltip"]').tooltip();
            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function() {
                if (this.checked) {
                    checkbox.each(function() {
                        this.checked = true;
                    });
                } else {
                    checkbox.each(function() {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function() {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });
        });
    }, 500);
}

function loadCheckout(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<img src="../image/dragon.png " class="loading" alt="dragon" width="190px" height="190px" style ="display:block; margin: auto;">';
    setTimeout(() => {
        $('#child').load("checkoutView.html #load", function() {
            $('#checkoutTable').DataTable();
        });
    }, 500);
}

function loadService(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<img src="../image/dragon.png " class="loading" alt="dragon" width="190px" height="190px" style ="display:block; margin: auto;">';
    setTimeout(() => {
        $('#child').load("serviceView.html #load", function() {
            $('#serviceTable').DataTable();
            $('[data-toggle="tooltip"]').tooltip();

            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function() {
                if (this.checked) {
                    checkbox.each(function() {
                        this.checked = true;
                    });
                } else {
                    checkbox.each(function() {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function() {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });

        });
    }, 500);
}

function loadUser(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<img src="../image/dragon.png " class="loading" alt="dragon" width="190px" height="190px" style ="display:block; margin: auto;">';
    setTimeout(() => {
        $('#child').load("userView.html #load", function() {
            $('#userTable').DataTable();
            $('[data-toggle="tooltip"]').tooltip();

            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function() {
                if (this.checked) {
                    checkbox.each(function() {
                        this.checked = true;
                    });
                } else {
                    checkbox.each(function() {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function() {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });

        });
    }, 500);
}

function loadReservation(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<img src="../image/dragon.png " class="loading" alt="dragon" width="190px" height="190px" style ="display:block; margin: auto;">';
    setTimeout(() => {
        $('#child').load("reservationView.html #load", function() {
            $('#reserveTable').DataTable();
            $('[data-toggle="tooltip"]').tooltip();

            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function() {
                if (this.checked) {
                    checkbox.each(function() {
                        this.checked = true;
                    });
                } else {
                    checkbox.each(function() {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function() {
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
        reader.onload = function(e) {
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
    child.innerHTML = '<img src="../image/dragon.png " class="loading" alt="dragon" width="190px" height="190px" style ="display:block; margin: auto;">';
    setTimeout(() => {
        $('#child').load("roomcateView.html #load");
    }, 500);
}

function loadRevenue(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<img src="../image/dragon.png " class="loading" alt="dragon" width="190px" height="190px" style ="display:block; margin: auto;">';
    setTimeout(() => {
        $('#child').load("revenueView.html #revenue", function() {
            google.charts.load("current", { packages: ['corechart'] });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                    ["Element", "Revenue", { role: "style" }],
                    ["1", 894, "blue"],
                    ["2", 10, "blue"],
                    ["3", 1930, "blue"],
                    ["4", 9000, "blue"],
                    ["5", 894, "blue"],
                    ["6", 1049, "blue"],
                    ["7", 1930, "blue"],
                    ["8", 9000, "blue"],
                    ["9", 0, "blue"],
                    ["10", 1049, "blue"],
                    ["11", 1930, "blue"],
                    ["12", 9000, "blue"]
                ]);

                var view = new google.visualization.DataView(data);
                view.setColumns([0, 1,
                    {
                        calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation"
                    },
                    2
                ]);

                var options = {
                    title: "Revenue By Month ($/Month) in 2021",
                    width: 900,
                    height: 400,

                };
                var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
                chart.draw(view, options);
            }
        });
    }, 500);
}
// function loadUser(id) {
//     var child = document.getElementById("child");
//     child.innerHTML = '<h1>Loading...</h1>';
//     setTimeout(() => {
//         child.innerHTML = '<h1>Success...</h1>';
//         $('#child').load("loaduserView.html #load");
//     }, 500);
// }

$(document).ready(function() {
    $.validator.addMethod("regex", function(value, element, regularExpression) {
        var re = new RegExp(regularExpression);
        return this.optional(element) || re.test(value);
    }, "Please follow the true format");

    $.validator.addMethod("greaterThan", function(value, element, greater) {
        return value >= greater;
    });

    $.validator.addMethod("lesserThan", function(value, element, lesser) {
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
                greaterTham: "At least 1000 dong",
            }
        }
    });
});