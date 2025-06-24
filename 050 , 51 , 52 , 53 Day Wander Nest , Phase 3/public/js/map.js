mapboxgl.accessToken = mapToken;
const loc = JSON.parse(coordinates);

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: loc, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

console.log(loc)



const marker1 = new mapboxgl.Marker({color : 'red'})
    .setLngLat(loc).
    
    setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div style="border-radius: 25px; height:70px; width:150px">
                <h4 style="color: #fe424d;" >${listingTitle}</h4><p>Exact location will be provided after booking</p>
            </div>`
        )
    )
    
    .addTo(map);