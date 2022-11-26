import React from 'react';
 import './data.css';
import Table from 'react-bootstrap/Table';

const Coin = ( {name, price, symbol, marketcap, volume, image, priceChange}) => {
  return (
 
    <div className="fluid-container">
    <Table hover variant="dark" className='table'>
      <tbody>
        <tr>
          <td>
          <img src={image} alt='logo' />
          {name}
          </td>
          <td>{symbol}</td>
          <td>${price}</td>
          <td>${volume.toLocaleString()}</td>
          <td>
          {priceChange < 0 ? (
         <p className='red'>{priceChange.toFixed(2)}%</p>
          ) : (
         <p className='green'>{priceChange.toFixed(2)}%</p>)}
          </td>
          <td>Mkt Cap: ${marketcap.toLocaleString()}</td>
        </tr>
         </tbody>
    </Table>
    </div>
  
  );
};

export default Coin;