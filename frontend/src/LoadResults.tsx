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
      <div className="header">
        <ul className="list">
          <li key={1}>{element.country} </li>
          <li key={2}>{element.places[0].longitude} </li>
          <li key={3}>{element.places[0].latitude}</li>
          <li key={4}> {element.places[0].state}</li>
          <li key={5}> {element.places[0]["place name"]}</li>
        </ul>
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

export { LoadResults };
