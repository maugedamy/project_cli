import { useEffect, useState } from "react";
import React from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { getLibros, getLibrosByCategory } from "../../asyncmock";

export function ItemListContainer() {
  const [libros, setLibros] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) {
      getLibros().then((libros) => {
        setLibros(libros);
      });
    } else {
      getLibrosByCategory(categoryId).then((libros) => {
        setLibros(libros);
      });
    }
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <ItemList librosList={libros} />
    </div>
  );
}

export default ItemListContainer;
