//INDEX PAGE
import Layout from '../comps/Layout'
import Header from '../comps/Header'
import Topbar from '../comps/Topbar'
//import ContainerGrid from '../comps/ContainerGrid'
import Pagination from '../comps/Pagination'
import CardsLayout from '../comps/CardsLayout'
import SortButtons from '../comps/SortButtons'
//import ProductCard from '../comps/ProductCard'
import { getUserInfo } from '../api/getUserInfo'
import { getProducts } from '../api/getProducts'
import { getRedeem } from '../api/getRedeem'

const StyleGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '30px',
    margin: '2em 0 4em 0'
            
}

const Container = {
    backgroundColor : '#fff',
    boxShadow: '2px 2px 4px 0 rgba(0,0,0,0.10)'
}

const ImgContainer = {
    height: '200px',
    width: '100%',
    objectFit: 'cover'
}

const Filter = {
    position: 'relative',
    width : '100%',
    borderBottom: 'border-bottom : 1px solid #d9d9d9;'
}

export default class extends React.Component {
    static async getInitialProps() {
        const getUserData = await getUserInfo()
        const userData = await getUserData.json()

        const getProductsData = await getProducts()
        const productsData = await getProductsData.json()
        
        const getRedeemData = await getRedeem()
        const redeemData = await getRedeemData.json()
        console.log('hola')
        return {
            user: userData,
            products: productsData,
            redeem: redeemData 
        }
    }
    
    render() {
        return (
            <Layout>
                <Topbar user={this.props.user}/>
                <Header/>
                <div className="Filter">
                    <Pagination/>
                    <SortButtons/>
                </div>
                <CardsLayout products={this.props.products} redeem={this.props.redeem} />
                <div className="Filter">
                    <Pagination/>
                </div>
                <style jsx>{`
                    .Filter {
                        position:relative;
                        margin : 2em;
                        border-bottom : 1px solid #d9d9d9;
                        display: flex;
                        justify-content: flex-start;
                        align-items:center;
                    }
                `}</style>
            </Layout> 
        )
    }
}


//export default Index;