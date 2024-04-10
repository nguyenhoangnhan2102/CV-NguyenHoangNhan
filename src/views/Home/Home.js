import React from "react";
import './Home.scss';
import './HomeResponsive.scss';

class Home extends React.Component {
    render() {
        // function isElementInViewport(el) {
        //     var rect = el.getBoundingClientRect();
        //     return (
        //         rect.top >= 0 &&
        //         rect.left >= 0 &&
        //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        //     );
        // }

        // function handleScrollAnimation() {
        //     var elementsToAnimate = document.querySelectorAll('.animation');
        //     elementsToAnimate.forEach(function (element) {
        //         if (isElementInViewport(element)) {
        //             element.classList.add('animate');
        //         }
        //     });
        // }

        // document.addEventListener('scroll', function () {
        //     handleScrollAnimation();
        // });

        // // Trigger animation on page load if elements are already in viewport
        // window.addEventListener('DOMContentLoaded', function () {
        //     handleScrollAnimation();
        // });

        return (
            <div className="container_home">
                <div className="container">
                    <div className="row_top ">
                        <div className="my_name">
                            <p data-text="Hey, I'm Nguyen Hoang Nhan !">Hey, I'm Nguyen Hoang Nhan !</p>
                        </div>
                        <div className="my_major animation">
                            <p>A Web Developer</p>
                        </div>
                    </div>
                    <div className="row_bottom">
                        <div className="avatar animation">
                            <img src="../img/(1).jpg" />
                        </div>
                        <div className="my_style animation">
                            <p>I am a young Web Developer, born in 2003.
                                I am nurturing the dream of becoming a professional Web Developer!!!
                            </p>
                        </div>
                    </div>
                </div>
                <div id="education">

                </div>
            </div>
        )
    }
}

export default Home;