import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete from './Autocomplete'; // Import your Autocomplete component

const cities = ['Casa', 'Rabat', 'Kenitra', 'Merrakech', 'Meknes'];
const options = ['Dev Digital', 'Dev Mobile', 'Infra Digitale'];
const apiUrl = "http://localhost:1337/api/users";

const initialFormData ={}
const InscriptionForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const handleClear = () => {
    setFormData(initialFormData); // Reset the form data to its initial state
  };

  const [inputBorders, setInputBorders] = useState({
    nom: 'red',
    prenom: 'red',
    ville: 'red',
    option: 'red',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update the border color based on the input value
    setInputBorders({
      ...inputBorders,
      [name]: value ? 'green' : 'red',
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, formData)
      .then(() => {
        alert("User added successfully.");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
        alert("Error adding user.");
      });
  };

  return (
    <form>
      <div>
        <label>Nom</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleInputChange}
          style={{ borderColor: inputBorders.nom }}
        />
      </div>
      <div>
        <label>Prénom</label>
        <input
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleInputChange}
          style={{ borderColor: inputBorders.prenom }}
        />
      </div>
      <div>
        <label>Ville</label>
        <Autocomplete
          values={cities}
          onChange={(value) => setFormData({ ...formData, ville: value })}
          inputStyle={{ borderColor: inputBorders.ville }}
        />
      </div>
      <div>
        <label>Option</label>
        <Autocomplete
          values={options}
          onChange={(value) => setFormData({ ...formData, option: value })}
          inputStyle={{ borderColor: inputBorders.option }}
        />
      </div>
      <button type="submit" onClick={handleAdd}>
        S'inscrire
      </button>
    </form>
  );
};

export default InscriptionForm;
