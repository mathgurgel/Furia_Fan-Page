import './SocialMediaBanner.css';
import { YouTubeEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { XEmbed } from 'react-social-media-embed';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SocialMediaBanner() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Function to update the width
        const handleResize = () => setViewportWidth(window.innerWidth);

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="social-media-banner">
            <div className='social-media-banner-header'>
                <h1>ACOMPANHE NOSSA EQUIPE</h1>
            </div>
            <div className="social-medias">
                <div className='youtube-videos'>
                    <YouTubeEmbed className="yt-embed" url="https://www.youtube.com/watch?v=LWqt1Hdlf6o" width={viewportWidth/4} height={viewportWidth/5.5} />
                    <YouTubeEmbed className="yt-embed" url="https://www.youtube.com/watch?v=Ivkcc78TFWU" width={viewportWidth/4} height={viewportWidth/5.5} />
                </div>
                <div className="instagram-post">
                    <InstagramEmbed url="https://www.instagram.com/p/C-5699zuS3a" width={viewportWidth/4} height={viewportWidth/2.4} />
                </div>
                <div className="tweet-container">
                    <XEmbed className="tweet-embed" url="https://twitter.com/FURIA/status/1826267455276069225" width={viewportWidth/5.18} height={viewportWidth/2.4}/>
                </div>
            </div>
            <Link to="/midia" id="show-more-media">
                <button>VER MAIS</button>
            </Link>
        </section>
    );
}

export default SocialMediaBanner;