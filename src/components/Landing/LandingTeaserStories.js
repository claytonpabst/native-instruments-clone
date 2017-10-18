import React, { Component }from 'react';
import './LandingTeaserStories.css';

class LandingTeaserStories extends Component {
    constructor(props){
        super(props)

        this.state = {
            teaserStories: [
                {
                    pictureURL:'https://www.native-instruments.com/typo3temp/pics/img-homepage-deep_matter_hompage_banner_alt-86dd565db15e9fc79e67e1a1021f5394-d.jpg',
                    title:'DEEP MATTER',
                    description:'Deep Melodic Techno'
                },
                {
                    pictureURL:'https://www.native-instruments.com/typo3temp/pics/img-homepage-symphony-series-collection_tile02-5bf8a058ebf3942c2d335803c6238586-d.jpg',
                    title:'SYMPHONY SERIES - COLLECTION',
                    description:'The Definitive Orchestral Portfolio'
                },
                {
                    pictureURL:'https://www.native-instruments.com/typo3temp/pics/img-homepage-how-to-make-kick-drumes-with-randomer-level-2-homepage-298bea8f569d93ccaeab314e906535a8-d.jpg',
                    title:'MAKING KICK DRUMS IN KONTAKT',
                    description:'Watch Randomer give away production techniques'
                },
                {
                    pictureURL:'https://www.native-instruments.com/typo3temp/pics/img-homepage-traktor_trutorial_1_level-2_03-5c0ffe0b93819869253212a89dfc75ae-d.jpg',
                    title:'TRAKTOR TRUTORIALS',
                    description:'Go beyond mixing with nine inspirational videos'
                },
                {
                    pictureURL:'https://www.native-instruments.com/typo3temp/pics/img-homepage-reaktor_update_6-2-0_level_2-6e43b0ccbb17041daff2cd102d8c4a42-d.jpg',
                    title:'REAKTOR 6.2 UPDATE',
                    description:'Free REAKTOR update brings third-party NKS compatibility'
                },
                {
                    pictureURL:'https://www.native-instruments.com/typo3temp/pics/img-homepage-ade-fenton-and-gary-numan-on-the-making-of-savage-level-2-homepage-2d46c072218e0457fa6f0ebe89f568ad-d.jpg',
                    title:'ADE FENTON AND GARY NUMAN',
                    description:"Studio breakdown of new album ‘Savage'"
                },
                {
                    pictureURL:'https://www.native-instruments.com/typo3temp/pics/img-homepage-hompage_tile02_02-1bb2f1b0bd9aae19f56f190f27311bf6-d.jpg',
                    title:'SYMPHONY SERIES – PERCUSSION',
                    description:'An exhaustive new set of 55 percussion instruments'
                },
                {
                    pictureURL:'https://www.native-instruments.com/typo3temp/pics/img-homepage-maschine_2.6.8_homepage-4bcda4b7a26af1847b379d50db55a52f-d.jpg',
                    title:'MASCHINE 2.6.8 SOFTWARE UPDATE',
                    description:'Update includes new MASCHINE bass synth plugin'
                }
            ]
        }
        //bind shit here
    }


  render() {

    let teaserStories = this.state.teaserStories.map((story, index) => {
        return (
            <div className='ltsSingleStory aLink' key={index}>
                <img style={{"width":"100%"}} src={story.pictureURL} alt=""/>
                <h1>{story.title}</h1>
                <h3>{story.description}</h3>
            </div>
        ) 
    })

    return (
        <section className='landingTeaserStoriesSection'>
            <div className='landingTeaserStoriesWrapper'>
                {teaserStories}
            </div>
        </section>
    );
  }
}


export default LandingTeaserStories;