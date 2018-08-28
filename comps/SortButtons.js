const SortButtons = () => ( 
    <div className="Sorted">
        <p>Sort by:</p>
        <button className="btn">Most recent</button>
        <button className="btn">Lowest price</button>
        <button className="btn">Highest price</button>
        <style jsx>{`
            .Sorted {
                display: inline-flex;
                align-items:center;
            }
            .Sorted p {
                padding-left: 1em;
            }    
        `}</style>
    </div>
)

export default SortButtons