import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import shoesData from "../json/shoes.json";
import { Container } from 'react-bootstrap';


const ItemListContainer = () => {
    const [shoes, setShoes] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        setShoes(shoesData);
    }, []);

    return (
        <Container className='pt-2 d-flex flex-wrap justify-content-center gap-4'>
            {
                shoes.map((shoe) => {
                    if (categoryId && categoryId === shoe.category) {
                        return <div className="w-25 shadow-sm p-3 rounded d-flex flex-column" key={shoe._id}>
                            <Link to={`/item/${shoe._id}`}><img src={shoe.image} alt={shoe.name} className="w-100 h-auto mb-2 rounded" /></Link>
                            <div className="d-flex w-100 justify-content-between align-items-center">
                                <span>{shoe.name}</span>
                                <span>{shoe.price}</span>
                            </div>
                            <p>{shoe.description}</p>
                            <div className="w-100 d-flex justify-content-end">
                                <button>Agregar al Carrito</button>
                            </div>
                        </div>
                    } else if (!categoryId) {
                        return <div className="w-25 shadow-sm p-3 rounded d-flex flex-column" key={shoe._id}>
                            <Link to={`/item/${shoe._id}`}><img src={shoe.image} alt={shoe.name} className="w-100 h-auto mb-2 rounded" /></Link>
                            <div className="d-flex w-100 justify-content-between align-items-center">
                                <span>{shoe.name}</span>
                                <span>{shoe.price}</span>
                            </div>
                            <p>{shoe.description}</p>
                            <div className="w-100 d-flex justify-content-end">
                                <button>Agregar al Carrito</button>
                            </div>
                        </div>
                    }
                    return null;
                })
            }
        </Container>
    );
};

export default ItemListContainer;