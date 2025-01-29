import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./initLeaflet";
import disasters from "@/data/disasters";
import Link from "next/link";

const SimpleMap = () => {
  const center = new LatLng(35.689, 139.692);
  const positions = [];
  for (const disaster of disasters) {
    positions.push(new LatLng(disaster.lat, disaster.lng));
  }

  return (
    <MapContainer center={center} zoom={5}>
      <TileLayer attribution="© OpenStreetMap contributors" url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {positions.map((position, index) => {
        return (
          <Marker position={position} key={`marker_${index}`}>
            <Popup>
              <span>{disasters[index]?.date}</span>
              <br />
              <Link href={`/search?disaster=${disasters[index]?.id}`}>{disasters[index]?.name}</Link>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default SimpleMap;
