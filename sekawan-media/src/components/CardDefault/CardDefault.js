import React from 'react'

import './CardDefault.css'
import { Card } from 'react-bootstrap'

// import logo from '../../../public/logo192.png'
const CardDefault = ({nama, pict}) => {
    return (
        <Card style={{ width: '18rem' }} className='card_custom'>
            <div className='container_content_card'>
                <div className='container_img-card'>
                    <img alt='e' src='/iba-pf15nt_3.png' className='img_card' />
                </div>

                <div className='restaurants_name'>
                    {nama}
                </div>

                <div className='star_rating'>
                    ini rating
                </div>

                <div className='container_categories_range_and_status'>
                    <div className='country_categories'>
                        AMERICAN - $$$$
                    </div>

                    <div className='restaurants_status'>
                        <span class="dot"></span>
                        Online
                    </div>
                </div>

                <button className='btn_learn_more'>LEARN MORE</button>
            </div>
        </Card>
    )
}

export default CardDefault