import React, {Component} from 'react';
import './LandingFeaturedProducts.css';

class LandingFeaturedProducts extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
        //bind
    }

    render(){

        return(
            <section className='landingTeaserStoriesSection'>
                <div className='landingTeaserStoriesWrapper'>
                    <header className='landingSectionHeader'>
                        <h1>FEATURED PRODUCTS</h1>
                        <h3 className='aLink'>SEE ALL PRODUCTS</h3>
                    </header>
                    <div className='lfpContentWrapper'>
                        <div className='lfpSingleProduct'>
                            <img src="https://www.native-instruments.com/typo3temp/pics/img-tile-featured-product_traktor_pro_2017-aa710134a71b711ed7056193a77515ad-d.jpg" alt=""/>
                            <h1>TRAKTOR PRO 2</h1>
                        </div>
                        <div className='lfpSingleProduct'>
                            <img src="https://www.native-instruments.com/typo3temp/pics/img-tile-featured-product_komplete-kontrol-s-series-8a2f157d4a9cc165807a25b35d21a82b-d.jpg" alt=""/>
                            <h1>KOMPLETE KONTROL S49</h1>
                        </div>
                        <div className='lfpSingleProduct'>
                            <img src="https://www.native-instruments.com/typo3temp/pics/img-tile-featured-product_maschine_jam-34b6882c4e1577bca8e981120af0db5c-d.jpg" alt=""/>
                            <h1>MASCHINE JAM</h1>
                        </div>
                        <div className='lfpSingleProduct'>
                            <img src="https://www.native-instruments.com/typo3temp/pics/img-tile-featured-product_traktor-s8-b4ddae39ccaeb940dac0d76947a157e4-d.jpg" alt=""/>
                            <h1>TRAKTOR KONTROL S8</h1>
                        </div>
                        <div className='lfpSingleProduct'>
                            <img src="https://www.native-instruments.com/typo3temp/pics/img-tile-featured-product_komplete_11_ultimate-c873c66c7d1e5727638dea92444e79fd-d.jpg" alt=""/>
                            <h1>KOMPLETE 11 ULTIMATE</h1>
                        </div>
                        <div className='lfpSingleProduct'>
                            <img src="https://www.native-instruments.com/typo3temp/pics/img-tile-featured-product_maschine-d847181b592a2ff5c423f5034b7e624c-d.jpg" alt=""/>
                            <h1>MASCHINE</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LandingFeaturedProducts;