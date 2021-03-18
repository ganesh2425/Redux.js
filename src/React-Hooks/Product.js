import React from "react";
import {useState} from "react";
let Product =()=>{
    let [product, setProduct] = useState
    ({
        product_name:"Nokia 105 SS 2020  (Blue)",
        price:1143,
        image:"https://rukminim1.flixcart.com/image/416/416/k5y7tzk0/mobile/x/m/j/nokia-105-ss-ta-1203-original-imafzgu88gznhphg.jpeg?q=70",
        qty: 1,
    })
    return(<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-8">
                <table className="table table-hover stripped">
                    <thead>
                        <tr>
                            <th>Product_name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.product_name}</td>
                            <td>{product.price}</td>
                            <td>
                                <img src={product.image} height="80px" width="40px" />
                            </td>
                            <td>
                    <i
                      className="fa fa-minus-circle"
                      onClick={() => {
                        setProduct({ ...product, qty: product.qty - 1 });
                      }}
                    ></i>
                    {product.qty}
                    <i
                      className="fa fa-plus-circle"
                      onClick={() => {
                        setProduct({ ...product, qty: product.qty + 1 });
                      }}
                    ></i>
                  </td>
                  <td>{product.qty * product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    </>);
}
export default Product;
