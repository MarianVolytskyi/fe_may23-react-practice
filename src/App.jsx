import cn from 'classnames';
import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

const products = productsFromServer.map((product) => {
  const category = categoriesFromServer.find(
    categoryFind => categoryFind.id === product.categoryId,
  );
  const user = usersFromServer.find(owner => category.ownerId === owner.id);

  return { ...product, category, user };
});

// console.log(products);

function getFilteredProduct(productsForfilter, filter, query) {
  let filteredProducts = [...productsForfilter];

  if (query) {
    const normalizedQuery = query.toLowerCase();

    filteredProducts = filteredProducts.filter(
      product => product.name.toLowerCase().includes(normalizedQuery),
    );
  }

  if (filter !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.user.name === filter,
    );
  }

  return filteredProducts;
}

export const App = () => {
  const [filterName, setFilterName] = useState('all');
  const [query, setQuery] = useState('');

  const visibleProducts = getFilteredProduct(products, filterName, query);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <p className="panel-tabs has-text-weight-bold">
              <a
                data-cy="FilterAllUsers"
                href="#/"
                onClick={() => {
                  setFilterName('all');
                }}
                className={cn({ 'is-active': filterName === 'all' })}
              >
                All
              </a>

              <a
                data-cy="FilterUser"
                href="#/"
                onClick={() => {
                  setFilterName('Roma');
                }}
                className={cn({ 'is-active': filterName === 'Roma' })}
              >
                Roma
              </a>

              <a
                data-cy="FilterUser"
                href="#/"
                className={cn({ 'is-active': filterName === 'Anna' })}
                onClick={() => {
                  setFilterName('Anna');
                }}
              >
                Anna
              </a>

              <a
                data-cy="FilterUser"
                href="#/"
                onClick={() => {
                  setFilterName('Max');
                }}
                className={cn({ 'is-active': filterName === 'Max' })}
              >
                Max
              </a>

              <a
                data-cy="FilterUser"
                href="#/"
                onClick={() => {
                  setFilterName('John');
                }}
                className={cn({ 'is-active': filterName === 'John' })}
              >
                John
              </a>
            </p>

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search"
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                { query && (
                <span className="icon is-right">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    data-cy="ClearButton"
                    type="button"
                    className="delete"
                    onClick={() => setQuery('')}
                  />
                </span>
                )
                }
              </p>
            </div>

            <div className="panel-block is-flex-wrap-wrap">
              <a
                href="#/"
                data-cy="AllCategories"
                className="button is-success mr-6 is-outlined"
              >
                All
              </a>

              <a
                data-cy="Category"
                className="button mr-2 my-1 is-info"
                href="#/"
              >
                Category 1
              </a>

              <a data-cy="Category" className="button mr-2 my-1" href="#/">
                Category 2
              </a>

              <a
                data-cy="Category"
                className="button mr-2 my-1 is-info"
                href="#/"
              >
                Category 3
              </a>
              <a data-cy="Category" className="button mr-2 my-1" href="#/">
                Category 4
              </a>
            </div>

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
                onClick={()=>{
                  setFilterName('all');
                  setQuery('');
                }}
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>
        <div className="box table-container">
          {visibleProducts.length === 0 ? (
            <>
              <p data-cy="NoMatchingMessage">
                No products matching selected criteria
              </p>
            </>
          ) : (
            <table
              data-cy="ProductTable"
              className="table is-striped is-narrow is-fullwidth"
            >
              <thead>
                <tr>
                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      ID
                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort" />
                        </span>
                      </a>
                    </span>
                  </th>

                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      Product
                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort-down" />
                        </span>
                      </a>
                    </span>
                  </th>

                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      Category
                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort-up" />
                        </span>
                      </a>
                    </span>
                  </th>

                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      User
                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort" />
                        </span>
                      </a>
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {visibleProducts.map(product => (
                  <tr data-cy="Product" key={product.id}>
                    <td className="has-text-weight-bold" data-cy="ProductId">
                      {product.id}
                    </td>

                    <td data-cy="ProductName">{product.name}</td>
                    <td data-cy="ProductCategory">
                      {`${product.category.icon} - ${product.category.title}`}
                    </td>

                    <td
                      data-cy="ProductUser"
                      className={cn({
                        'has-text-link': product.user.sex === 'm',
                        'has-text-danger': product.user.sex === 'f',
                      })}
                    >
                      {product.user.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
