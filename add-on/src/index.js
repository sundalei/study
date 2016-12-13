import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
import App from './App';
import FilterableProductTable from './PerformanceTools';
import './index.css';

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

Perf.start();

ReactDOM.render(
  <FilterableProductTable products={products} />,
  document.getElementById('root')
);

Perf.stop();

const measurements = Perf.getLastMeasurements();

Perf.printInclusive(measurements);

Perf.printExclusive(measurements);

Perf.printWasted(measurements);

Perf.printOperations(measurements);

Perf.printDOM(measurements);
