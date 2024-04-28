import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons'
import './styles/pagination.css'

export const Pagination = ({ totalPages, currentPage, handlePage }) => {
    return (
        <div className="pagination">
            <ReactPaginate
                forcePage={ currentPage - 1 }
                breakLabel="..."
                nextLabel={ <ArrowRightIcon /> }
                onPageChange={ ( event )=> handlePage( event.selected + 1 ) }
                pageRangeDisplayed={ 1 }
                pageCount={ totalPages }
                previousLabel={ <ArrowLeftIcon /> }
                activeLinkClassName={"pagination__button--current"}
                className={"pagination"}
            />
        </div>
    )
}


Pagination.propTypes = {
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    handlePage: PropTypes.func,
}