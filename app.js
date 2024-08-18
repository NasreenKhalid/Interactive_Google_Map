mapboxgl.accessToken = 'pk.eyJ1IjoibmFzcmVlbjEiLCJhIjoiY2x6ejczbWtoMTI0YTJtczJ5OXZrYmp4dSJ9.5MSG8rTX83z_ReBh6xj78w'
   
navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, {
        enableHighAccuracy:true
    }
)


function successLocation(position){
    console.log(position)
    setUpMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setUpMap([-2.24,53.47])
}


function setUpMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center:center,
        zoom: 15
      });

      const nav = new mapboxgl.NavigationControl()
      map.addControl(nav)


      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      })

      map.addControl(directions, "top-left")
}

