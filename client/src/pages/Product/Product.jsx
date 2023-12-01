import Rating from "../../components/rating/Rating";
import Info from "../../components/product-info/Info";
import Button from "../../components/button/Button";
import "./product.css"
import Review from "../../components/review/Review";
import { formatPrice } from "../../utils/formatPrice";
import {useParams} from "react-router-dom";
import { useEffect , useState} from "react";
import DeviceService from "../../services/DeviceService";

export default function ProductPage({}){
    const [product,setProduct] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        DeviceService.getDeviceById(id)
        .then(resp => {
            setProduct(resp.data);
        })
    }, [id])

    return (
      <main>
        {product &&
          <div className="container">
              <div className="product-page_content">
                  <div className="photo">
                      <img src={product.img} alt="product image"/>
                  </div>
                  <div className="product_about">
                      <h1 className="product__name">{product.name}</h1>
                      <Rating rating={product.rating} ratesCount={300}/>
                      <div className="product__characteristics">
                        <h3>Характеристики</h3>
                        <Info characteristics={product.info}/>
                  </div>
                  </div>
                 
                  <div className="product__price">
                      <h2>{formatPrice(product.price)}₽ <span style={{textDecoration:"line-through", color:"gray", fontSize:"16px"}}>{product.price + 5000}</span></h2>
                        <Button text="В корзину"/>
                  </div>
              </div>
                <div className="product_reviews">
                    <h2>Отзывы</h2>
                    <div className="users-reviews">
                        <Review/>
                        <Review/>
                        <Review/>
                    </div>
                </div>
          </div>
        }
      </main>
    );
}