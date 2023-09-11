import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../../../components/spinner/Spinner';
import { CART_SLICE_ACTIONS } from '../../../redux/cartSlice';

import './ProductPage.css';


const ProductPage = () => {
  
  const { id } = useParams();

  const dispatch = useDispatch();
  const product = useSelector(state => state.products.data.find(product => product.id === +id));

  const isDigital = product.digitalProduct;
  const [stockZero, setStockZero] = useState(0); 

  if (!product) {
    return <Spinner />;
  }

  const handleAddToCart = () => {
    dispatch(CART_SLICE_ACTIONS.addItemToCart(product));
  }

  

  return (
    <div className="row text-dark" >

      <div className="col-lg-6">

        <div className="imagesContainer">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.description} 
            style={{maxWidth: '300px'}}/>
            {/* {product.images.map((image, index) => (
              <img src={image} alt='product' key={index} style={{ maxWidth: '300px' }} />
            ))} */}
        </div>

      </div>

      <div className="col-lg-6">

        <h2 className="text-center mb-5">{product.description}</h2>
        <p className="h5">{product.summary}</p>


        <div>
            <p className="d-flex justify-content-between"><span>Auteur</span><span>{product.author.firstName + " " + product.author.lastName}</span></p>
            <p className="d-flex justify-content-between"><span>Editeur</span><span>{product.editor.name}</span></p>
            <p className="d-flex justify-content-between"><span>ISBNA3</span><span>{product.isbn13}</span></p>
            <p className="d-flex justify-content-between"><span>Genre</span><span>{product.kind}</span></p>
            <p className="d-flex justify-content-between"><span>Nombre de pages</span><span>{product.numberOfPages}</span></p>
            <p className="d-flex justify-content-between"><span>Format</span><span>{product.format}</span></p>
            <p className="d-flex justify-content-between"><span>Categorie</span><span>{product.category}</span></p>
            <p className="d-flex justify-content-between h4"><span>Prix TTC</span><span>${product.inclTaxPrice.toFixed(2)}</span></p>
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


        {/* <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-dark" onClick={handleAddToCart}>
            Ajouter au Panier
          </button>
        </div> */}

      </div>
    </div>
  );
}

export default ProductPage;