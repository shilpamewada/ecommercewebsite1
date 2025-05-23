import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Button } from 'react-bootstrap';

function Products({ addToCart }) { // Accept addToCart as a prop
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList)
    };

    const ShowProducts = () => {
        return (
            <>
               <div className="buttons d-flex flex-wrap justify-content-center gap-2 mb-5 pb-5 text-center">
    <button className="btn btn-outline-dark" onClick={() => setFilter(data)}>All</button>
    <button className="btn btn-outline-dark" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
    <button className="btn btn-outline-dark" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
    <button className="btn btn-outline-dark" onClick={() => filterProduct("electronics")}>Electronic</button>
    <button className="btn btn-outline-dark" onClick={() => filterProduct("jewelery")}>Jewelery</button>
</div>

                {filter.map((product) => {
                    return (
                        <div className='col-md-3 mb-4' key={product.id}>
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} height={"250px"} />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}....</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <Button
                                        style={{ marginTop: '10px', backgroundColor: "white" }}
                                        className="nav-Link btn btn-outline-dark me-2"
                                        onClick={() => addToCart(product)} // Call addToCart function with the product
                                    >
                                        <i className="fa fa-shopping-cart me-1"></i> Add To Cart
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}

export default Products;
