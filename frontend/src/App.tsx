import { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
/* It's defining the shape of the country object. */
import { LoadForm } from "./LoadForm";
import { LoadResults } from "./LoadResults";
import { errors } from "./errors";

// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
import "./App.css";

/**
 * If the data is not loaded, load the form, otherwise load the results
 * @returns The return statement is returning a ternary operator. If data is not present, then the
 * LoadForm function is called. If data is present, then the LoadResults function is called.
 */
function App() {
  const [mutator, { data, loading, error }] = useMutation(REGISTER_QUERY);
  let [country, setCountry] = useState("");
  const History = GetHistory();
  if (loading) return <p>Loading...</p>;
  if (error) {
    return errors(error);
  }

  return !data
    ? LoadForm(mutator, country, setCountry, History)
    : LoadResults(data);
}

/**
 * It returns the last 5 entries from the database
 * @returns The data is being returned.
 */
function GetHistory() {
  const { loading, error, data } = useQuery(LAST_ENTRIES_QUERY);
  if (loading) return "Loading...";
  if (error) {
    return errors(error);
  }
  return data;
}

/* Defining the structure of the data that is being returned from the database. */
interface zipcode {
  id: string;
  zip: string;
  country: string;
  created: Date;
  json: string;
}

/* Defining the structure of the data that is being returned from the database. */
interface zipcodes {
  zipcodesList: Array<zipcode>;
}

/* Defining the mutation structure of the data that is being updated on the database. */
const REGISTER_QUERY = gql`
  mutation Mutation($data: RegisterInput!) {
    register(data: $data) {
      zip
      country
      created
      json
    }
  }
`;

/* Defining the query of the last five entries that is being returned from the database. */
const LAST_ENTRIES_QUERY = gql`
  query Query {
    lastFiveEntries {
      json
    }
  }
`;

export default App;
