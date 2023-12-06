import React, {useState, useEffect} from 'react'
import Slider from 'react-slider'
import { useResize } from '../../hooks/useResize';

import './style.css' 
import SliderButton from '../../components/radio/SliderButton';
import ProductCard from '../../components/product-card/ProductCard';
import { useMediaQuery } from "@uidotdev/usehooks";
import { useParams } from 'react-router-dom';
import DeviceService from '../../services/DeviceService';

const MIN = 29950;
const MAX = 99990;

const mockItem = {
    type: 'Смартфоны',
    name : 'Apple iPhone 13 Pro Max 256 ГБ серый',
    img : 'categories/smartphone.png',
    rating : 2.5,
    ratesCount : 493,
    price: 72000,
}


export default function CategoryPage() {
    const [values, setValues] = useState([MIN,MAX])
    const [flag, setFlag] = useState(false);
    const [isLong, setIsLong] = useState(true);
    const [devices, setDevices] = useState([]);
    const [brands, setBrands] = useState([]); 
    const [activeBrands, setActiveBrands] = useState([]);
    const {id} = useParams();
    const isWide = useMediaQuery('(min-width : 1500px )');
    
    useEffect(() => {
        const fetchDevices = async () => {
            const resp = await DeviceService.getDevices({ typeId: id });
            let filteredDevices = resp.data.rows;

            if (values && values.length === 2) {
                const [minPrice, maxPrice] = values;
                filteredDevices = filteredDevices.filter(dev => dev.price >= minPrice && dev.price <= maxPrice);
            }

            if(activeBrands.length !== 0){
                filteredDevices =  filteredDevices.filter(item => activeBrands.includes(item.brandId))
            }
            setDevices(filteredDevices);
        }
        fetchDevices();
            }, [id,values,activeBrands])

    useEffect(() =>{
        if(!isWide ){
            setIsLong(false)
        }
        if(isWide){
            setIsLong(true)
        }
    }, [isWide])

    useEffect(() =>{
        DeviceService.getBrandsByType(id)
            .then((resp) => setBrands(resp.data))
    }, [id])

    function handleActiveBrands(brandId){
        if (activeBrands.includes(brandId)) {
            setActiveBrands(activeBrands.filter(id => id !== brandId));
            return;
        }
        setActiveBrands([...activeBrands, brandId]);
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
                        
                        {
                        brands.map(item =>(
                            //ToDo : refactor to button
                            <div onClick={() => handleActiveBrands(item.id)}
                             key={item.id}
                             className={`brand-button ${activeBrands.includes(item.id) ? 'active' : ''}`}>{item.brandName}</div>
                        ))
                    }
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
                    <div className="radio-group">Высокая оценка <SliderButton isEnabled={flag} setIsEnabled={setFlag}/>    </div>
                    <div className="radio-group">Есть отзывы <SliderButton isEnabled={flag} setIsEnabled={setFlag}/>    </div>
                    <div className="radio-group">Хит продаж<SliderButton isEnabled={flag} setIsEnabled={setFlag}/>    </div>
                </div>

                <div className="items">
                    {
                        devices.map(item =>(
                            <ProductCard key={item._id} product={item} long={isLong} />
                        ))
                    }
                </div>

            </div>
            

        </div>
    </main>
  )
}
