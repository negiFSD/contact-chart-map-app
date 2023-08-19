import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import { mapApiResponseType } from "@/types/types";
import MapSkeleton from "@/components/skeletons/MapSkeleton";
function Maps() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["mapdata"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/countries").then((res) =>
        res.json()
      ),
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });

  const Apiresp: mapApiResponseType[] = data;

  if (isLoading) {
    return  <MapSkeleton/>;
  }

  if (isError) {
    return <span>Something went wrong, please try again</span>;
  }

  return (
   
    <div className="flex justify-center mt-4 md:mt-10 w-screen md:w-[80vw]">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={4}
        scrollWheelZoom={true}
        className="shadow-2xl min-w-[320px] w-[90vw] md:w-[60vw] h-[550px] rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a>'
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=1PtGk23M40nPKQNE2tFz"
        />
        {Apiresp.map((item: any) => {
          return (
            <Marker
              key={item.country}
              position={[item.countryInfo.lat, item.countryInfo.long]}
            >
              <Popup>
                Country Name: {item.country} <br />
                Active Cases: {item.active} <br />
                Recovered Cases: {item.recovered} <br />
                Deaths: {item.deaths}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Maps;
