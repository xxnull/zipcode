import { GoogleMapBuilder } from "./GoogleMapBuilder";

/**
 * The function takes in a JSON object, parses it, and returns a React component with the parsed data
 * @param {any} data - any - this is the data that is returned from the API call.
 * @returns A div with a header and a google map.
 */
function LoadResults(data: any) {
  const element = JSON.parse(data.register.json);

  return (
    <div className="container">
      <div className="mapHeader">
        <div className="country">{element.country}</div>
        <div className="places">{getPlaces(element.places)}</div>
      </div>
      <div className="googleMap">
        {GoogleMapBuilder(
          element.places[0].longitude,
          element.places[0].latitude
        )}
      </div>
    </div>
  );
}

function getPlaces(places: any) {
  return places.map((e: any) => {
    return (
      <div className="description">
        {" "}
        <span> {e["place name"]}</span> / <span>State: {e.state}</span> /{" "}
        <span>Latitude: {e.latitude}</span> / /{" "}
        <span>Longitude: {e.longitude}</span>
      </div>
    );
  });
}

export { LoadResults };
