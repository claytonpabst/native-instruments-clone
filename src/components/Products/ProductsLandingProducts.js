import React, { Component } from 'react';
import axios from 'axios';

import './ProductsLandingProducts.css';


class ProductsLandingProducts extends Component {
  constructor(props){
    super(props)

    this.state = {
        products:[
            {
                id:0,
                title:'KOMPLETE KONTROL S61',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-kontrol-s61-mk2-a8e9cea694f7515584c420f7e28bec49-d.jpg',
                description:'Smart keyboard controller with premium keybed, high-res color displays, Light Guide, NKS support, and more. 61 keys.',
                price:'$699.00',
                attributes:['All','Keyboards']
            },
            {
                id:1,
                title:'KOMPLETE KONTROL S49',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-kontrol-s49-mk2-a954ee75e03ba18246e18bb89835762a-d.jpg',
                description:'Smart keyboard controller with premium keybed, high-res color displays, Light Guide, NKS support, and more. 49 keys.',
                price:'$599.00',
                attributes:['All','Keyboards']
            },
            {
                id:2,
                title:'KOMPLETE 11',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-11-5592c1d2395d1e4773a7be262d3597f8-d.jpg',
                description:'The world’s leading production suite – 45 products, 13,000+ sounds, 155+ GB of instruments and effects.',
                price:'$599.00',
                attributes:['All','Bundles']
            },
            {
                id:3,
                title:'KOMPLETE 11 ULTIMATE',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-11-ultimate-dba3a2077e763914449b1b6bcafaa502-d.jpg',
                description:'The supreme suite for pro audio production. 87 products, 18,000+ sounds, 500+ GB of instruments and effects.',
                price:'$1,199.00',
                attributes:['All','Bundles']
            },
            {
                id:4,
                title:'NKS',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-nks_pf_2017_10-5895d35f7a46b2d7967502a0caaa93b3-d.jpg',
                description:'Discover hundreds of NKS-ready instruments from industry leading instrument builders, offering advanced integration with KOMPLETE KONTROL and MASCHINE.',
                price:'MORE INFO',
                attributes:['All',]
            },
            {
                id:5,
                title:'KOMPLETE KONTROL S88',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-kontrol-s88_new-2775af6ec07cf526b269b7ae030230b1-d.jpg',
                description:'Smart keyboard controller with premium, hammer-action keybed, Light Guide, NKS support, and more. 88 keys.',
                price:'$999.00',
                attributes:['All','Keyboards']
            },
            {
                id:6,
                title:'SYMPHONY SERIES – COLLECTION',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-symphony-series-collection_pf-4004e03c3931095e604b30b720d99afd-d.jpg',
                description:'The supreme suite for pro audio production. 87 products, 18,000+ sounds, 500+ GB of instruments and effects.',
                price:'$999.00',
                attributes:['All','Cinematic']
            },
            {
                id:7,
                title:'KONTAKT 5',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-kontakt-5-0c706ab02b335a56a92332fe28cab138-d.jpg',
                description:'Discover hundreds of NKS-ready instruments from industry leading instrument builders, offering advanced integration with KOMPLETE KONTROL and MASCHINE.',
                price:'$399.00',
                attributes:['All',]
            },
            {
                id:8,
                title:'THRILL',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-thrill_pf-d268b7ee419ecbdf415fd5cafcead297-d.jpg',
                description:'Smart keyboard controller with premium, hammer-action keybed, Light Guide, NKS support, and more. 88 keys.',
                price:'$299.00',
                attributes:['All','Cinematic']
            },
            {
                id:9,
                title:'ACTION STRIKES',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-action-strikes-0a716e39802771ea83219483a8ffd0e0-d.jpg',
                description:'A radically innovative instrument for huge cinematic percussion. Fast workflow delivers maximum impact and versatility.',
                price:'$299.00',
                attributes:['All','Cinematic','Drums']
            },
            {
                id:10,
                title:'UNA CORDA',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-una-corda-8c220ce67f66f68137b5b450b9b6667c-d.jpg',
                description:'A radically innovative instrument for huge cinematic percussion. Fast workflow delivers maximum impact and versatility.',
                price:'$149.00',
                attributes:['All','Keys']
            },
            {
                id:11,
                title:'THE GIANT',
                image:'https://www.native-instruments.com/typo3temp/pics/img-packshot-the-giant-932857e38146c0574128f0b23e8fbcbb-d.jpg',
                description:'A radically innovative instrument for huge cinematic percussion. Fast workflow delivers maximum impact and versatility.',
                price:'$99.00',
                attributes:['All','Keys']
            },
        ]
    }
    //bind shit here
  }

//   componentDidMount(){
//     axios.get(`/api/getProducts`)
//     .then( res => {
//         console.log(res)
//         this.setState({
//             products: res.data
//         })
//     })        
//   }

  render() {

    let products = this.state.products.map((product, i) => {
        if(product.attributes.indexOf(this.props.attributeToShow) > -1){
            return(
                <div className='plpSingleProductWrapper' key={i}>
                    <img src={product.image} alt=""/>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <h3>{product.price}</h3>
                </div>
            )
        }
    })

    return (
      <section className="plpSection">
        <div className='plpContentWrapper'>
            {products}
        </div>
      </section>
    );
  }
}


export default ProductsLandingProducts;