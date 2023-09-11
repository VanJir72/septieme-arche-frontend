import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CART_SLICE_ACTIONS } from '../../redux/cartSlice';

import './ProductCard.css';

const ProductCard = ({ product }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (event) => { //Pour cliquer sur l'image et aller à la page de ce PRODUIT.
    event.preventDefault();
    navigate(`/products/${product.id}`);
  }

  const handleAddToCart = (event) => { //Pour le button [Add to cart].
    event.preventDefault();
    dispatch(CART_SLICE_ACTIONS.addItemToCart(product));
  }
  
  const isDigital = product.digitalProduct;
  const [stockZero, setStockZero] = useState(0); 
  

 



  return (
    <div className="card text-black productCard">

      <div style={{ cursor: 'pointer' }} onClick={handleClick}>
        <img
          src={product.image}
          className="card-img-top pt-3 image"
          alt={product.description} />
      </div>

      <div className="card-body productCardBody">
        <div className="text-center">
          <h4 className="card-title">{product.description}</h4>
          <p className="text-muted mb-4">{product.summary}</p>
        </div>

        <div>
          <div>
            <p className="d-flex justify-content-between"><span>Auteur</span><span>{product.author.firstName + " " + product.author.lastName}</span></p>
            <p className="d-flex justify-content-between"><span>Format</span><span>{product.format}</span></p>
            <p className="d-flex justify-content-between"><span>Categorie</span><span>{product.category}</span></p>
            <p className="d-flex justify-content-between"><span>Prix TTC</span><span>${product.inclTaxPrice.toFixed(2)}</span></p>
          </div>

          <div>
            <hr />
            {isDigital 
            ? <p className="text-center">article numérique</p>
            : product.stock === stockZero
            ? <p className="text-center text-danger">NO STOCK</p>
            : <p className="d-flex justify-content-between text-primary"><span>STOCK</span><span>{product.stock}</span></p>}
            <hr />
          </div>

         
          <div className="d-flex justify-content-center">
            { product.stock === stockZero
            ? <button className='btn btn-dark' type='button' disabled>
              Ajouter au Panier
              </button>
            : <button className='btn btn-dark' type='button' onClick={handleAddToCart}>
              Ajouter au Panier
              </button>}
          </div>

        </div>


      
        
      </div>

    </div>

  );
}

export default ProductCard;