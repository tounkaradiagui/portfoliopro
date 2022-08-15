import React from 'react';

export default function Profile(){
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz text-center'>
                        <a href='https://www.facebook.com/profile.php?id=100008713125610'>
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='#'>
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href='https://www.youtube.com/channel/UCsQ29wH_P65Mg3sb7O89Sbw'>
                            <i className="fa fa-youtube-square"></i>
                        </a>
                        <a href='https://twitter.com/DTounkara20'>
                            <i className='fa fa-twitter-square'></i>
                        </a>
                    </div>

                
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Bonjour, Je suis <span className='highlighted-text'>Diagui</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text' >
                            {" "}
                            <h1>
                                
                            </h1>

                        </span>
                    </div>
                   

                </div>

            </div>

        </div>
    )
}