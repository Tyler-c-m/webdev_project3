
function initMap() {

    // Chicago coordinates
    const center = {
        lat: 41.8781,
        lng: -87.6298
    };

    // Initialize Google Map
    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 12,
            center: center
        }
    );

    // Feature 1 & 2: Marker + Draggable Marker
    const marker = new google.maps.Marker({
        position: center,
        map,
        draggable: true,
        title: "Hello World! - From Chicago, IL"
    });

    // Feature 3: InfoWindow
    const infoWindow = new google.maps.InfoWindow({
        content: "That marker over there? He had a family before he got trapped here....",
        ariaLabel: "None of My Business"
    });

    // Open the InfoWindow when marker is clicked
    marker.addListener("click", () => {
        infoWindow.open({
            anchor: marker,
            map: map
        });
    });

    // Questions Event Listener
    document.getElementById("questions").addEventListener("click", function() {

        alert("If you have questions, contact me at:\ntmadourie@hawk.illinoistech.edu");

    });

}
