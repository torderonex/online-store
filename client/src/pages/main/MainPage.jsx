import React from 'react'
import './main.css'

import Banner from '../../components/banner/Banner'
import Button from '../../components/button/Button'
import CategoryItem from '../../components/category-item/CategoryItem'
import ProductCard from '../../components/product-card/ProductCard'
import AboutCard from '../../components/about-card/AboutCard'

export default function MainPage() {
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
            <div className="banners">
                <Banner normal>
                    <h1><span>1.8 млн</span> товаров в <span>2272</span> магазинах находи, сравнивай, выбирай!</h1>
                    <Button text={'Перейти к категориям'}/>
                </Banner>
                <Banner small>
                    <h1><span>Топ-10 </span>смартфонов 2023 года</h1>
                    <Button text={'Смотреть'}/>
                </Banner>
            </div>
        </div>
        
        <div className='best-choice'>
            <div className="container">
                <h3 className='title'>Лучший выбор</h3>
                <div className='category-list'>
                    <CategoryItem img="categories/smartphone.png" category="Смартфоны"/>
                    <CategoryItem img="categories/laptop.png" category="Ноутбуки"/>
                    <CategoryItem img="categories/tablet.png" category="Планшеты"/>
                    <CategoryItem img="categories/smartwatch.png" category="Умные часы"/>
                    <CategoryItem img="categories/console.png" category="Игровые приставки"/>
                    <CategoryItem img="categories/headphones.png" category="Наушники"/>
                    <CategoryItem img="categories/speaker.png" category="Портативные колонки"/>
                    <CategoryItem img="categories/accessorie.png" category="Акссесуары"/>
                </div>
                <div className="product-cards">
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                    <ProductCard product={mockItem}/>
                </div>
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
