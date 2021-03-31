function loadRoomlist(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<h1>Loading...</h1>';
    setTimeout(() => {
        child.innerHTML = '<h1>Success...</h1>';
        $('#child').load("roomlistView.html #load", function(){            
            $('#extable').DataTable();
        });                
    }, 500);
        
}



function loadBooked(id) {
    var child = document.getElementById("child");
    child.innerHTML = '<h1>Loading...</h1>';
    setTimeout(() => {
        child.innerHTML = '<h1>Success...</h1>';
        $('#child').load("bookedView.html #load");
    }, 500);
}
// function loadCheckin(id) {
//     var child = document.getElementById("child");
//     child.innerHTML = '<h1>Loading...</h1>';
//     setTimeout(() => {
//         child.innerHTML = '<h1>Success...</h1>';
//         $('#child').load("checkinView.html #load");
//     }, 500);
// }
// function loadCheckout(id) {
//     var child = document.getElementById("child");
//     child.innerHTML = '<h1>Loading...</h1>';
//     setTimeout(() => {
//         child.innerHTML = '<h1>Success...</h1>';
//         $('#child').load("checkoutView.html #load");
//     }, 500);
// }
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