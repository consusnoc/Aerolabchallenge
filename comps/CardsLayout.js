import ProductCard from '../comps/ProductCard'

export default class extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div className="ContainerGrid">
                {this.props.products.map((product) => (
                    <ProductCard key={product._id} name={product.name} category={product.category} img={product.img.url}/>
                ))}

                <style jsx>{`
                    .ContainerGrid {
                        display:grid;
                        grid-template-columns:repeat(auto-fill, minmax(276px, 1fr));
                        grid-gap:30px; 
                        margin:2em;
                    }
                    .Container {
                        /*display: flex;
                        flex-direction: column;
                        width: 100%;
                        margin: 2em 0;
                        justify-content: space-around;
                        align-items: center;
                        max-width: 900px;
                        margin: auto;*/
                    }
                    .Cards {
                        display: flex;
                        position: relative;
                        justify-content: space-between;
                        background: #fff;
                        align-items: flex-end;
                        padding: 1em;
                        border-radius: 3px;
                        max-width: 340px;
                        margin: auto;
                        margin-top: 0;
                        width: 100%;
                        transition: 0.3s ease box-shadow, 0.3s ease transform;
                        cursor: pointer;
                        box-shadow: -1px 2px 7px 0px #00000014;
                    }
                    
                        
                `}</style>
            </div>
        )
    }
}