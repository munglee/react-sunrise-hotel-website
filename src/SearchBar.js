import React from "react";

// Allow users to search certain rooms using search bar
function SearchBar({
    isAvaliableOnly,
    isStandardSizeOnly,
    isKingSizeOnly,
    isQueenSizeOnly,

    budgetMin,
    budgetMax,
    starRateFive,
    starRateFour,
    starRateThree,
    onIsAvaliableOnlyChange,
    onIsStandardSizeOnlyChange,
    onIsKingSizeOnlyChange,
    onIsQueenSizeOnlyChange,

    onBudgetMinChange,
    onBudgetMaxChange,
    onStarRateFiveChange,
    onStarRateFourChange,
    onStarRateThreeChange
}) {
    return (
        <form>
            <div className="searchBar"> {/* Budget */}
                <b>Your Budget (per night)</b>
                <div>
                    <label>
                        CAD$
                        <input
                            type="Text"
                            size={5}
                            value={budgetMin}
                            onChange={(e) => onBudgetMinChange(e.target.value)}
                        />  -
                        <input
                            type="Text"
                            size={5}
                            value={budgetMax}
                            onChange={(e) => onBudgetMaxChange(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            <div className="searchBar"> {/* Star Rating */}
                <b>Star Rating</b>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={starRateFive}
                            onChange={(e) => onStarRateFiveChange(e.target.checked)}
                        />
                        {' '}
                        5 star
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={starRateFour}
                            onChange={(e) => onStarRateFourChange(e.target.checked)}
                        />
                        {' '}
                        4 star
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={starRateThree}
                            onChange={(e) => onStarRateThreeChange(e.target.checked)}
                        />
                        {' '}
                        3 star

                    </label>
                </div>
            </div>
            <div className="searchBar">
                <b>Bed Type</b>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isStandardSizeOnly}
                            onChange={(e) => onIsStandardSizeOnlyChange(e.target.checked)}
                        />
                        {' '}
                        Standard Size

                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={isKingSizeOnly}
                            onChange={(e) => onIsKingSizeOnlyChange(e.target.checked)}
                        />
                        {' '}
                        King Size
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={isQueenSizeOnly}
                            onChange={(e) => onIsQueenSizeOnlyChange(e.target.checked)}
                        />
                        {' '}
                        Queen Size
                    </label>

                </div>
            </div>
            <div className="searchBar">
                <b>Avaliability</b>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isAvaliableOnly}
                            onChange={(e) => onIsAvaliableOnlyChange(e.target.checked)}
                        />
                        {' '}
                        Show Avaliable Only
                    </label>
                </div>
            </div>
        </form>
    );
}

export default SearchBar;