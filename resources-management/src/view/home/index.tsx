import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container } from './style';
import Menu  from '../../components/menu/menu';
import Footer  from '../../components/footer/footer';

interface IProduct{
    id: number,
    price: number,
    photo: string,
    name: string,
    description: string
}


// Creating a FUNCTIONAL COMPONENT (FC)
const Home: React.FC = () => {
    const [ data, setData] = useState <IProduct[]> ([]);

    // Hook to retrieve data from the API as soon as app starts
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data);
            }
        )
    }, [])

    const addToCart = (index:number) => {
        let item = JSON.stringify(data[index]);

        localStorage.setItem(`@Produto-${index}`, item);
    }

    return ( 
        <React.Fragment>

            <Menu></Menu>

            <Container>
                <section>
                    { data.map( (prod, index) => (

                        <div className="product-content" key={ prod.id }>
                            <img src={ prod.photo } alt="Iphone" />
                            <h3> { prod.name } </h3>
                            <span> { prod.description } </span>
                            <h4> $ {prod.price } </h4>
                            <button onClick = { () => addToCart(index) } >Add to cart</button>
                        </div>

                    )) }
                </section>
            </Container>

            <Footer></Footer>

        </React.Fragment>

    );
}

export default Home;