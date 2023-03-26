import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import shoesData from "../json/shoes.json";
import { Container } from 'react-bootstrap';

const ItemDetailContainer = () => {
    const [shoes, setShoes] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setShoes(shoesData);
    }, []);

    return (
        <Container className="d-flex justify-content-center">
            {
                shoes.map((shoe) => {
                    if (id === shoe._id) {
                        return <div className="w-50 shadow-sm p-3 rounded d-flex flex-column align-items-center" key={shoe._id}>
                            <img src={shoe.image} alt={shoe.name} className="w-75 h-auto mb-2 rounded" />
                            <div className="d-flex w-100 justify-content-between align-items-center">
                                <span>{shoe.name}</span>
                                <span>{shoe.price}</span>
                            </div>
                            <p>{shoe.description}</p>
                            <div className="w-100 d-flex justify-content-end">
                                <button>Agregar al Carrito</button>
                            </div>
                        </div>
                    };
                    return null;
                })
            }
        </Container>
    );
};

export default ItemDetailContainer;