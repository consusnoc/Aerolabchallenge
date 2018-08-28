//import SortButtons from '../comps/SortButtons'

const Filter = () => (
    <div className="Container">
        <div className="ListedProducts">16 of 32 products</div>
        <div className="Next_Page"><img src="../static/icons/arrow-right.svg"/></div>
        <style jsx>{`
            .Container {
                position:relative;
                margin : 2em;
                line-height: 2em;
                border-bottom : 1px solid #d9d9d9;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .Sorted {
                display: inline-flex;
                align-items:center;
            }
            .Sorted p {
                padding-left: 1em;
            }
            .ListedProducts {
                display: inline-flex;
                color:#616161;
                border-right: 1px solid #d9d9d9;
                padding-right: 1em;
            }
            .Next_Page {
                position: absolute;
                right: 0;
                cursor: pointer;
            }
                
        `}</style>
    </div>
)

export default Filter