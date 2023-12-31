import React,{useState,useEffect} from 'react'
import './main.css'

import Banner from '../../components/banner/Banner'
import Button from '../../components/button/Button'
import CategoryItem from '../../components/category-item/CategoryItem'
import ProductCard from '../../components/product-card/ProductCard'
import AboutCard from '../../components/about-card/AboutCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useNavigate } from 'react-router-dom';
import DeviceService from '../../services/DeviceService';
import { formatPrice } from '../../utils/formatPrice'
import { speakText } from '../../utils/speakText'


const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    centerPadding: '60px',
  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    variableWidth: true,
  };

// const mockItem = {
//     type: 'Смартфоны',
//     name : 'Apple iPhone 13 Pro Max 256 ГБ серый',
//     img : 'categories/smartphone.png',
//     rating : 4.5,
//     ratesCount : 493,
//     price: 72000,
// }

export default function MainPage() {
    const navigator = useNavigate();

    const isWide = useMediaQuery('(min-width : 1500px )');
    const isSmall = useMediaQuery('(max-width : 850px )');

    const [items,setItems] = useState(null);
    const [type, setType] = useState(1);

    const [firstBannerState,setFirstBannerState] = useState('normal');
    const [secondBannerState, setSecondBannerState] = useState('small');

    useEffect(() =>{
        if(!isWide && !isSmall){
            setFirstBannerState('normal');
            setSecondBannerState('normal');
        }
        if(isWide && !isSmall){
            setFirstBannerState('normal');
            setSecondBannerState('small');
        }
        if (!isWide && isSmall){
            setFirstBannerState('small');
            setSecondBannerState('small');
        }
    }, [isWide,isSmall])

    useEffect( ()=>{
        async function fetchData(){
            const devicesResp = await DeviceService.getDevices({typeId:1, limit:6});
            const devices = devicesResp.data.rows.map(elem => ({...elem, price:formatPrice(elem.price) }))
            const typeResp = await DeviceService.getTypeById(type);
            setItems({devices : devices, type: typeResp.data.name});
        }
        fetchData();
        
    },[])
  
    

    const sldr = items && <Slider className='sldr' {...settings}>
    {
            items.devices.map(elem => (
            <ProductCard key={elem.id} product={{...elem,type: items.type}} />
        ))  
    }
    </Slider> 

    

    return (
    <main>
        <div className="container">
            <div className="banners">
                <Banner size={firstBannerState}>
                    <h1><span>1.8 млн</span> товаров в <span>2272</span> магазинах находи, сравнивай, выбирай!</h1>
                    <Button onClick={() => navigator('/category/1')} text={'Перейти к категориям'}/>
                </Banner>
                <Banner size={secondBannerState}>
                    <h1><span>Топ-10 </span>смартфонов 2023 года</h1>
                    <Button onClick={() => navigator('/category/1')} text={'Смотреть'}/>
                </Banner>
            </div>
        </div>
        <div className='best-choice'>
            <div className="container">
                <h3 className='title'>Лучший выбор</h3>
                <Slider {...settings2}>
                    <CategoryItem img="categories/smartphone.png" category="Смартфоны"/>
                    <CategoryItem img="categories/laptop.png" category="Ноутбуки"/>
                    <CategoryItem img="categories/tablet.png" category="Планшеты"/>
                    <CategoryItem img="categories/smartwatch.png" category="Умные часы"/>
                    <CategoryItem img="categories/console.png" category="Игровые приставки"/>
                    <CategoryItem img="categories/headphones.png" category="Наушники"/>
                    <CategoryItem img="categories/speaker.png" category="Портативные колонки"/>
                    <CategoryItem img="categories/accessorie.png" category="Акссесуары"/>
                </Slider>
                {
                    isWide ? 
                    <div className="product-cards">
                        {
                           items && items.devices.map(elem => (
                                <ProductCard key={elem.id} product={{...elem,type: items.type}} />
                            ))
                        }
                       
                    </div> :
                     sldr 
                }
                
            </div>

        </div>

        <div className='about-text'>
            <div className="container">
                <h3 className='title'>Наша цель - создать фантастический<br/>сервис для всех потребителей</h3>
                <div className="about-cards">
                    <AboutCard title='5' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quas dolor possimus'/>
                    <AboutCard title='30' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quas dolor possimus'/>
                    <AboutCard title='850' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quas dolor possimus'/>
                    <AboutCard title='9' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quas dolor possimus'/>
                </div>
            </div>
        </div>
    </main>
  )
}
