import React,{Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Clients.css'

class Clients extends Component{

    state = {
        images: [
            { src: "images/clients/client-1.webp", alt: "img1" },
            { src: "images/clients/abstract.png", alt: "img2" },
            // Add more images as needed
        ]
    };


    render(){

        const { images } = this.state;

        // Calculate slidesToShow based on the number of images
        const slidesToShow = images.length <= 4 ? images.length : 4;

        const settings = {
          dots: false,
          infinite: false,
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
          autoplay: images.length > 4,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        };

        return(
        // <div class="px-2 sm:px-5 md:px-10 lg:px-14">
        <div class="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
                
          <div className="mainContainer">
            <h3 class="text-center light:text-black dark:text-white text-6xl mb-3 font-semibold"> Clients </h3>
            <Slider {...settings}>
              {images.map((image, index) => (
                        <div key={index} className="container">
                            <img src={image.src} alt={image.alt} />
                        </div>
            ))}
            </Slider>
          </div>
          </div>
        //   </div>
        );
      }
    }

export default Clients;
