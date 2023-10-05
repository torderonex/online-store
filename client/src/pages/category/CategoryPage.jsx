import React, {useState} from 'react'
import Slider from 'react-slider'

import './style.css' 
import SliderButton from '../../components/radio/SliderButton';
import ProductCard from '../../components/product-card/ProductCard';

const MIN = 100;
const MAX = 12000;

export default function CategoryPage() {
    const [values, setValues] = useState([MIN,MAX])

    const [flag, setFlag] = useState(false);

    const mockItem = {
        type: 'Смартфоны',
        name : 'Apple iPhone 13 Pro Max 256 ГБ серый',
        img : 'categories/smartphone.png',
        rating : 2.5,
        ratesCount : 493,
        price: 72000,
    }

    return (
    <main>
        <div className="container">
            <h1 className='category-title'>Смартфоны</h1>
            <div className="category-items">

                <div className="filter">
                    <h2 >Фильтрация</h2>
                    <h6>Бренды</h6>
                    <div className="brand-filter">
                        <div className="brand-button">Apple</div>
                        <div className="brand-button">Apple</div>
                        <div className="brand-button">Apple</div>
                        <div className="brand-button">Apple</div>
                        <div className="brand-button">Apple</div>
                        <div className="brand-button">Apple</div>
                        <div className="brand-button">Apple</div>
                        <div className="brand-button">Apple</div>
                    </div>

                    <h6>Диапазон цен</h6>
                    <div className="price-range">
                        <input value={values[0]} onChange={(e) => setValues([e.target.value, values[1]])}/>
                        <input value={values[1]} onChange={(e) => setValues([values[0],e.target.value])}/>
                    </div>
                    <Slider className='slider'
                            onChange={setValues}
                            value={values}
                            min={MIN}
                            max={MAX}
                            	/>

                    <h6>Дополнительно</h6>
                    <div className="radio-group">Есть <SliderButton isEnabled={flag} setIsEnabled={setFlag}/>    </div>
                    <div className="radio-group">Есть <SliderButton isEnabled={flag} setIsEnabled={setFlag}/>    </div>
                    <div className="radio-group">Есть <SliderButton isEnabled={flag} setIsEnabled={setFlag}/>    </div>
                </div>

                <div className="items">
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                </div>

            </div>
            

        </div>
    </main>
  )
}
