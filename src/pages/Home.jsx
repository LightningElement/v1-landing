import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <>
            <Navbar />
            <div className='home'>

                <div id='paragraph-1'>
                    <p>Simplifying the experience of traveling together.</p>
                </div>
                <div id="paragraph-2">
                    <p>More quality time, less frustration.<br />
                        Browse,Book,Split, Pay - all in one platform.</p>
                </div>
                <img src="./images/Globe.svg" alt="Globe" id='globe' />
                <h4 id="title-1">
                    Featured Events
                </h4>
                <section className="container">
                    <Card cardtype={"card-wide"} cardtitle={"ETHCC Week Paris"} backgroundurl={'../assets/images/ethcc.png'} />
                </section>
                <div className='cards'>
                    <ul style={{
                        top: "5px",
                        position: "relative",
                        display: 'flex',
                        justifyContent: 'space-between'
                        
                    }}>
                        <Card cardtype={"card"} cardtitle={"NFT NYC"} backgroundurl={'../assets/images/nftnyc.png'} />
                        <Card cardtype={"card"} cardtitle={"ETH LISBON"} backgroundurl={'../assets/images/ethlisbon.png'} />
                        <Card cardtype={"card"} cardtitle={"Devcon"} backgroundurl={'../assets/images/devcon.png'} />
                    </ul>
                </div>
                <h4 id="title-2">
                    How LZero Works
                </h4>
                <img src="./images/Blob1.svg" alt="Blob" id='blob1' />
                <img src="./images/Calendar.svg" alt="Calendar" id='calendar' />
                <h4 id="title-3">Group organization made easy!</h4>
                <p id="paragraph-3">Browse & book events, accommodations, activities and services all on ONE platform.</p>
                <img src="./images/Blob2.svg" alt="Blob" id='blob2' />
                <img src="./images/CreditCard.svg" alt="" id="CreditCard" />
                <h4 id="title-4">Split and pay your share </h4>
                <p id="paragraph-4">No more frustrating back and forth with your friends! Each user pays ONLY what they owe.</p>
                <img src="./images/Blob3.svg" alt="Blob" id='blob3' />
                <img src="./images/Selections.svg" alt="Selection" id="Selection" />
                <h4 id="title-5">Provide your services</h4>
                <p id="paragraph-5">Make additional income by listings your services, for less fees than traditional platforms!</p>
                <h4 id="title-6">Integrated with</h4>
                <img src="./images/Kleros.svg" alt="kleros logo" id="kleros" />
                <img src="./images/Gitcoin.svg" alt="gitcoin logo" id="gitcoin" />
                <img src="./images/Gnosis.svg" alt="gnosis logo" id="gnosis" />
                <img src="./images/Blob4.svg" alt="blob" id="blob4" />
                <img src="./images/Phone.png" alt="phone" id="phone" />
                <h4 id="title-7">Want to be a part of LZero?</h4>
                <p id="paragraph-7">More users = more listings = more choice! We aim to become the #1 Web3 P2P service providing platform, and would love to have you on board! </p>
                <button id="wltbtn" >Wallet</button>
                <button id="fundbtn">Fund Us</button>
                <div id="vlcontainer">
                    <h4 id="title-8">Join our community</h4>
                    <a href="" id="bt1"><img style={{ marginTop: '10px', marginLeft: '13px' }} src="./images/DiscordIcon.svg" /></a>
                    <a href="" id="bt2"><img style={{ marginTop: '10px', marginLeft: '13px' }} src="./images/TwitterIcon.svg" /></a>
                    <a href="" id="bt3"><img style={{ marginTop: '7px', marginLeft: '9px' }} src="./images/EmailIcon.svg" /></a>
                    <a href="" id="bt4"><img style={{ marginTop: '10px', marginLeft: '13px' }} src="./images/GitcoinIcon.svg" /></a>
                </div>
                
            </div>
            <Footer />
        </>

    );
};

export default Home;