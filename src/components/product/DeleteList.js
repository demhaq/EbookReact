import React from "react";

export default function DeleteList(props) {
  function handleClick(e) {
    e.preventDefault();
    const del = e.target.name;

    fetch(`http://3.21.234.30:5000/product/delete/${del}`, {
      method: `DELETE`,
    })
      .then((result) => {
        window.location.reload(true);
      })
      .catch((err) => console.log(err));
    //
  }

  return (
    <table className="table mt-3 table-dark text-warning">
      <thead className="thead-light">
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Title</th>
          <th>Color</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.author}</td>
              <td>{product.title}</td>
              <td>{product.color}</td>
              <td>{product.description}</td>
              <td>
                <button
                  className="  btn-sm btn-danger mt-2"
                  name={product.id}
                  type="button"
                  onClick={handleClick}
                >
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
