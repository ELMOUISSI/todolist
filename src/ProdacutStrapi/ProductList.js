import React from "react";
import axios from "axios";

export default function ProductList({ data }) {
  const apiUrl = "http://localhost:1337/api/products";

  const deleteResource = (resourceID) => {
    const confirmed = window.confirm("Are you sure you want to delete this resource?");
    
    if (confirmed) {
      axios
        .delete(`${apiUrl}/${resourceID}`)
        .then(response => {
          console.log('Resource deleted.');
        })
        .catch(error => {
          console.error('Error deleting:', error);
        });
    }
  };

  return (
    data.isLoading ? (
      <img
        style={{ width: "50px", height: "50px" }}
        src="https://media.istockphoto.com/id/1138945991/ko/%EB%B2%A1%ED%84%B0/%EA%B2%80%EC%9D%80%EC%83%89%EC%97%90-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0.jpg?s=1024x1024&w=is&k=20&c=kJBJFYYSY7HNhM_k6B5asrtoS84-aW7-8l5i1PqNKZY="
        alt="Loading"
      />
    ) : (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.listProducts.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.attributes.title}</td>
              <td>{prod.attributes.description}</td>
              <td>{prod.attributes.price}</td>
              <td>
                <button onClick={() => deleteResource(prod.id)} className="btn btn-danger">
                  Delete Resource
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
}
