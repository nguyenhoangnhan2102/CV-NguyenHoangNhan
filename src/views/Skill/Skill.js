import React from "react";
import './Skill.scss';
import './SkillResponsive.scss';

class Skill extends React.Component {
    render() {
        return (
            <div className="skill_container">
                <div className="container_top container">
                    <div className="title_skill row">
                        <h1>KỸ NĂNG</h1>
                    </div>
                    <div className="skill_row row">
                        <div className="my_skill col-sm-3">
                            <img src="../img/html.png" />
                            <p className="name_skill">HTML</p>
                        </div>
                        <div className="my_skill col-sm-3">
                            <img src="../img/css.png" />
                            <p className="name_skill">CSS</p>
                        </div>
                        <div className="my_skill col-sm-3">
                            <img src="../img/js.png" />
                            <p className="name_skill">Javascript</p>
                        </div>
                        <div className="my_skill col-sm-3">
                            <img src="../img/reactjs.png" />
                            <p className="name_skill">Reactjs</p>
                        </div>
                        <div className="my_skill col-sm-3">
                            <img src="../img/nodejs.png" />
                            <p className="name_skill">Nodejs</p>
                        </div>
                        <div className="my_skill col-sm-3">
                            <img src="../img/mysql.png" />
                            <p className="name_skill">MySQL</p>
                        </div>
                    </div>
                </div>
                <div className="container_bottom container">
                    <div className="my_project row">
                        <div className="title_project">
                            <h4>DỰ ÁN</h4>
                        </div>
                        <div className="container_project">
                            <div className="content_project">
                                <img src="../img/What.jpg" />
                                <h3>Xây dựng website bán điện thoại</h3>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat,
                                    sed diam voluptua.
                                </p>
                            </div>
                            <div className="content_project">
                                <img src="../img/What.jpg" />
                                <h3>Xây dựng website bán điện thoại</h3>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat,
                                    sed diam voluptua.
                                </p>
                            </div>
                            <div className="content_project">
                                <img src="../img/What.jpg" />
                                <h3>Xây dựng website bán điện thoại</h3>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat,
                                    sed diam voluptua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact"></div>
            </div>
        )
    }
}

export default Skill;