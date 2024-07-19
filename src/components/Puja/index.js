import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const Puja = () => {
    return (
        <div>
            <div className="show">
                <h1>
                    Perform your Puja as per Vedic rituals at Famous Hindu
                    Temples in India with Sri Mandir
                </h1>
                <>
                    <Slider {...settings} className="project">
                        <div>
                            <img
                                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_review.c0435a90.webp&w=3840&q=75"
                                alt="sli"
                                className="slide"
                            />
                        </div>
                    </Slider>
                </>
            </div>
            <div>
                <h1>Upcoming Pujas on Sri Mandir.</h1>
                <p>
                    Book online puja with Sri Mandir in more than 500+ temples
                    across India. Receive video of the puja along with the
                    Prasad and receive blessings from the divine for prosperity
                    and well-being of you and your family
                </p>
                <h1>Start your Sacred Journey with Sri Mandir Puja Service</h1>
                <p>Why book Sri Mandir Online Puja?</p>
            </div>
            <ul className="num">
                <li>
                    <h1>100000 +</h1>
                    <p>Puja's Done</p>
                </li>
                <li>
                    <h1>300000 + </h1>
                    <p>Happy Devotees</p>
                </li>
                <li>
                    <h1>100 +</h1>
                    <p>Famous Temples in india</p>
                </li>
            </ul>
            <div>
                <h1>How does Sri Mandir Online Puja Works?</h1>
            </div>
        </div>
    );
};

export default Puja;
