import {GoogleMap, LoadScriptNext, Marker, InfoWindow } from '@react-google-maps/api'
import {useMemo, useState} from 'react'

function MapComponent() {
  const center = useMemo(() => ({lat: 37.556076, lng: 126.921527}), [])
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);

  return (
    <LoadScriptNext googleMapsApiKey={`AIzaSyB9pOeIxO44Vhf6VCi35iiO0tnkO1EqdsM`}>
      <GoogleMap zoom={18} center={center} id="map" options={{
        disableDefaultUI: true,
        mapId:"e175f89ac704555c"
      }}>
        <Marker 
        position={{ lat: 37.556107, lng: 126.921539 }} 
        icon={{url: '../assets/images/logo_marker.svg', scale: 5}}
        onClick={() => setInfoWindowOpen(true)}
        />
        {infoWindowOpen && (
          <InfoWindow
            onCloseClick={() => setInfoWindowOpen(false)}
            position={{ lat: 37.556107, lng: 126.921539 }}
          >
            <div><p>dndmobile</p></div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScriptNext>
  )
}
export default MapComponent