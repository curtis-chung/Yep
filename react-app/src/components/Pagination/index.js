import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import "./Pagination.css"

function Paginate({ bizArr }) {
    const history = useHistory();
    const [spots, setSpots] = useState(bizArr);
    const [pageNumber, setPageNumber] = useState(0);

    const bizPerPage = 5;
    const pagesVisited = pageNumber * bizPerPage;

    // Styles for JSX
    const myStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "4px",
        objectFit: "cover"
    }

    const redStyle = {
        color: "#d32323"
    }

    const grayStyle = {
        color: "rgba(110,112,114,1)",
        fontWeight: "400"
    }

    const circleStyle = {
        fontSize: "3px",
        color: "gray"
    }

    const numDollarSigns = {
        1: "$",
        2: "$$",
        3: "$$$",
        4: "$$$$"
    }

    const displayBiz = spots
        .slice(pagesVisited, pagesVisited + bizPerPage)
        .map((business) => {
            let rating = business.avg_rating
            return (
                <NavLink to={`/biz/${business.id}`} className='search-chart-body-card search-navlink'>
                    <div className='search-chart-body-card-image'>
                        <img src={business.prev_image[0]} style={myStyle} onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "https://www.electricmirror.com/wp-content/uploads/2022/05/image-coming-soon.jpg";
                        }} />
                    </div>
                    <div className='search-chart-body-card-details'>
                        <div className='search-chart-body-card-details-div search-chart-body-card-name' style={{ marginTop: "8px" }}>
                            {spots.indexOf(business) + 1}. {business.business_name}
                        </div>
                        <div className="currBizRating" style={{ marginTop: "8px", color: "#d32323" }}>
                            {[...Array(5)].map((star, i) => {
                                {/* console.log("rating", rating) */ }
                                if (i < Math.floor(rating)) return <i class="fa-solid fa-star" />;
                                else if (rating % Math.floor(rating) >= 0.5) {
                                    rating = 0;
                                    return <i class="fa-regular fa-star-half-stroke" />;
                                } else return <i class="fa-regular fa-star" />;
                            })}
                            &nbsp;
                            <span style={{ fontSize: "14px", color: "rgba(110,112,114,1)" }}>{business.num_reviews}</span>
                        </div>
                        <div className='search-chart-body-card-details-div search-chart-body-card-rating' style={{ marginTop: "8px" }}>
                            <div
                                className="biz-type-filter-button"
                                onClick={
                                    (e) => {
                                        e.preventDefault()
                                        history.push(`/search_results/${business.business_type}`
                                        )
                                    }
                                }>
                                {business.business_type}
                            </div>
                            &nbsp;
                            &nbsp;
                            <div style={grayStyle}>
                                {numDollarSigns[business.price]}
                            </div>
                            &nbsp;
                            &nbsp;
                            <div className='search-chart-body-card-details-div search-chart-body-card-location' style={grayStyle}>
                                <i class="fa-solid fa-circle" style={circleStyle}></i>
                                &nbsp;
                                &nbsp;
                                {business.city}
                            </div>
                        </div>

                    </div>
                </NavLink>
            )
        })

    const pageCount = Math.ceil(spots.length / bizPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="Paginate">
            {displayBiz}
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
}

export default Paginate;
