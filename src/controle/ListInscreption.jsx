import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ListeInscriptions = () => {
  const { city } = useParams();
  const [cityFilter, setCityFilter] = useState(city || '');

  const [apiData, setApiData] = useState({ listInscriptions: [], isLoading: true });
  const apiUrl = "http://localhost:1337/api/users";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setApiData({ listInscriptions: res.data, isLoading: false });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Add an empty dependency array

  // Filtrer les inscriptions en fonction de la ville
  const filteredInscriptions = apiData.listInscriptions.filter((inscription) =>
    inscription.attributes.ville.toLowerCase().includes(cityFilter.toLowerCase())
  );

  const deleteResource = (id) => {
    // Implement the delete resource function here
  };

  return (
    <div>
      <h2>Liste des inscriptions</h2>
      <input
        type="text"
        placeholder="Filtrer par ville"
        value={cityFilter}
        onChange={(e) => setCityFilter(e.target.value)}
      />
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Ville</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {filteredInscriptions.map((inscription) => (
            <tr key={inscription.id}>
              <td>{inscription.attributes.name}</td>
              <td>{inscription.attributes.prenom}</td>
              <td>{inscription.attributes.ville}</td>
              <td>{inscription.attributes.option}</td>
              <td>
                <button onClick={() => deleteResource(inscription.id)} className="btn btn-danger">
                  Delete Resource
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeInscriptions;
