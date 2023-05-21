import React, { useEffect, useState } from 'react'
import './HomepageDefault.css'
import { Col, Row } from 'react-bootstrap'
import CardDefault from '../../components/CardDefault/CardDefault'

import axios from "axios"

const HomepageDefault = () => {
    const [listRestaurant, setListRestaurant] = useState([])

    useEffect(() => {
        const config = {
            method: 'get',
            url: 'https://restaurant-api.dicoding.dev/list',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data);
                setListRestaurant(response.data.restaurants)
                console.log(listRestaurant);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])



    return (
        <div className='container_fluid'>
            <Row>
                <Col>
                    <div className='container_title'>
                        <h2>
                            Restaurant
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu dolor tellus.
                        </p>

                        <hr />

                        <div className='container_filter'>
                            <Row>
                                <Col md={3}>
                                    <div>
                                        Filter By:
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div>
                                        <input type='radio' id='open_now' value={"Open Now"} />
                                        <label for="open_now" className='ms-1'>Open Now</label>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div>
                                        <select name="price" id="price">
                                            <option value="price" selected disabled>Price</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div>
                                        <select name="categories" id="categories" >
                                            <option value="categories" selected disabled >Categories</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <hr />

                        <h4>
                            All Restaurants
                        </h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className='container_card'>
                        {/* {handleMap()} */}
                        <CardDefault />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className='container_btn_load_more'>
                        <button className='btn_load_more'>LOAD MORE</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HomepageDefault