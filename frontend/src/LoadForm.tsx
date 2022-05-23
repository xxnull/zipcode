import { countries } from "./countriesList";

interface country {
  value: string;
  label: string;
}

/* This is the main component that is being rendered. It takes in a mutator, a country, a setCountry
function, and a History object. */
function LoadForm(
  mutator: any,
  country: string,
  setCountry: Function,
  History: any
) {
  let zipinput: any;

  const last5Entries = History.lastFiveEntries?.map((e: any) =>
    JSON.parse(e.json)
  );

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Zipcode Search</h1>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              HandleSubmit(e, mutator, zipinput.value, country);
            }}
          >
            <input
              placeholder="Zipcode"
              ref={(node) => {
                zipinput = node;
              }}
            />

            <select onChange={(e) => setCountry(e.target.value)}>
              {RenderOptions(countries)}
            </select>

            <button type="submit">Search</button>
          </form>
        </div>
      </header>
      <div className="App-container">
        <div>
          {last5Entries?.map((element: any) => {
            return (
              <div>
                <div className="mapHeader">
                  <div className="title" key={element.country}>
                    {element.country}
                  </div>
                  <div className="zip" key={element["post code"]}>
                    {element["post code"]}
                  </div>
                </div>
                <ul className="queryResults">
                  <li key={element.places[0].latitude}>
                    {getPlaces(element.places)}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * HandleSubmit is a function that takes in an event, a mutator, a zipinput, and a country, and then
 * prevents the default action of the event, and then calls the mutator with the zipinput and country
 * as variables
 * @param {any} e - any - this is the event that is triggered when the form is submitted.
 * @param {any} mutator - This is the function that will be called when the form is submitted.
 * @param {string} zipinput - The value of the input field
 * @param {string} country - The country code for the country you want to search for.
 */
function HandleSubmit(e: any, mutator: any, zipinput: string, country: string) {
  e.preventDefault();

  mutator({
    variables: {
      data: { zip: zipinput, country: country },
    },
  });

  zipinput = "";
  country = "";
}

/**
 * It takes an array of objects, maps over it, and returns a list of the objects' properties
 * @param {any} places - any - this is the data that is being passed in from the parent component.
 * @returns An array of divs
 */
function getPlaces(places: any) {
  return places?.map((e: any) => {
    return (
      <ul className="placesList">
        <li key={e.latitude}>{e.latitude}</li>
        <li key={e.longitude}>{e.longitude}</li>
        <li key={e["place name"]}>{e["place name"]}</li>
        <li key={e.state}>{e.state}</li>
      </ul>
    );
  });
}

/**
 * We're mapping over the countries array, and for each country, we're returning an option element with
 * a key, value, and the country's value
 * @param countries - Array<country> - this is the array of countries that we're going to map over.
 * @returns An array of option elements.
 */
function RenderOptions(countries: Array<country>) {
  let counter = 0;
  return countries.map((country: country) => {
    // const value = country.value.toLowerCase();
    counter = counter + 1;
    return (
      <option key={counter} value={country.value}>
        {country.value}
      </option>
    );
  });
}

export { LoadForm };
