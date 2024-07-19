// import { useState } from "react";
// Ensure this path is correct

import "./index.css";

const Home = () => {
    return (
        <div className="main">
            <div className="show-con">
                <div className="page-con">
                    <div className="logo-con">
                        <img
                            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_achievement.6722fe43.webp&w=32&q=75"
                            alt="logo"
                        />
                        <label>World's Largest App For Devoteess</label>
                    </div>
                    <div>
                        <h1>
                            Pray Daily With <span>Sri Mandir .</span>{" "}
                        </h1>
                        <h2>One App for all your devotional needs.</h2>
                    </div>
                </div>
                <div>
                    <img
                        src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_hero_artwork_en.ecfc0911.webp&w=1080&q=75"
                        alt="pic"
                        className="pic-img"
                    />
                </div>{" "}
            </div>
            <div>
                <h1 className="head">Explore Sri Mandir</h1>
            </div>
            <div>
                <ul className="ul">
                    <li>
                        <img
                            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_seva.48294bc9.svg&w=96&q=75"
                            alt="name"
                        />
                        <p>Book Pujas at temples</p>
                    </li>
                    <li>
                        <img
                            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chadhava_seva.c04d828f.svg&w=96&q=75"
                            alt="name"
                        />
                        <p>offer chadava temples</p>
                    </li>
                    <li>
                        <img
                            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_astro.4e8171bd.svg&w=96&q=75"
                            alt="name"
                        />
                        <p>Talk to Astrologies</p>
                    </li>
                    <li>
                        <img
                            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_festivals.19495f6a.svg&w=96&q=75"
                            alt="name"
                        />
                        <p>Offer Fesival Details</p>
                    </li>
                    <li>
                        <img
                            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_music.b3aeb0a3.svg&w=96&q=75"
                            alt="name"
                        />
                        <p>Listen devine music</p>
                    </li>
                    <li>
                        <img
                            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_mandir_darshan.68d86126.svg&w=96&q=75"
                            alt="name"
                        />
                        <p>Do Mandir Darshan</p>
                    </li>
                    <li>
                        <img
                            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_panchang.0458f8f4.svg&w=96&q=75"
                            alt="name"
                        />
                        <p>Read Panchang</p>
                    </li>
                    <li>
                        <img
                            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_sahitya.976e992d.svg&w=96&q=75"
                            alt="name"
                        />
                        <p>Read Hindu Literature</p>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="head">
                    Our Divine Mission recognised by Prominent Media Outlets
                </h1>
            </div>
            <ul className="ads">
                <li>
                    <img
                        src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_01.1dea7667.png&w=640&q=75"
                        alt="logo"
                    />
                </li>
                <li>
                    <img
                        src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_02.bddcfd94.png&w=640&q=75"
                        alt="logo"
                    />
                </li>
                <li>
                    <img
                        src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_03.d53d3f19.png&w=640&q=75"
                        alt="lgo"
                    />
                </li>
                <li>
                    <img
                        src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_04.3e3537d0.png&w=640&q=75"
                        alt="logo"
                    />
                </li>
            </ul>
            <div className="about">
                <h1>Puja Seva for you and your loved ones</h1>
                <p>
                    Book Pujas in your and your family's name at 1000+ renowned
                    temples in India. You will also receive a video of the Puja
                    and Prasad along with divine blessings.
                </p>
            </div>
        </div>
    );
};

export default Home;
