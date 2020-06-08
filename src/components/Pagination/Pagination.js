import React from 'react'
import './Pagination.css'

const Pagination = ({ itemsPerPage, totalItems, paginate, currPage }) => {

    const pageNumbers = [];
    const totalPages = Math.min(Math.ceil(totalItems / itemsPerPage), 5);
    const startPage = currPage > totalPages ? totalPages + 1 : 1;
    const endPage = startPage + totalPages;
    for (let i = startPage; i < endPage; i++) {
        pageNumbers.push(i);
    }


    return (
        <div>
            <ul className="pagination">
                {(currPage > 1) &&
                    <li onClick={() => paginate(currPage - 1)} className="fa fa-arrow-left" >Prev </li>}
                {pageNumbers.map(num => (
                    <li
                        onClick={() => paginate(num)}
                        className={currPage === num ? "page-item page-active" : "page-item"}
                        key={num}>
                        {num}
                    </li>
                )
                )}

                {(currPage < 7) &&
                    <li onClick={() => paginate(currPage + 1)} >Next<p className="fa fa-arrow-right" /></li>}
            </ul>
        </div >
    )
}

export default Pagination;