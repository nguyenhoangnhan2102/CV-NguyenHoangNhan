import React from "react";
import './Skill.css';

class Skill extends React.Component {
    render() {
        return (
            <>
                <div className="container_skill">
                    <div className="title_skill">
                        KỸ NĂNG
                    </div>
                    <div className="container_icon">
                        <div className="container_icon_top">
                            <div className="my_skill">
                                <img src="../img/html.png" />
                                <div className="name_tool">
                                    HTML
                                </div>
                            </div>
                            <div className="my_skill">
                                <img src="../img/css.png" />
                                <div className="name_tool">
                                    CSS
                                </div>
                            </div>
                            <div className="my_skill">
                                <img src="../img/js.png" />
                                <div className="name_tool">
                                    Javascript
                                </div>
                            </div>
                        </div>
                        <div className="container_icon_bottom">
                            <div className="my_skill">
                                <img src="../img/reactjs.png" />
                                <div className="name_tool">
                                    Reactjs
                                </div>
                            </div>
                            <div className="my_skill">
                                <img src="../img/nodejs.png" />
                                <div className="name_tool">
                                    Nodejs
                                </div>
                            </div>
                            <div className="my_skill">
                                <img src="../img/mysql.png" />
                                <div className="name_tool">
                                    MySQL
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr></hr> */}
            </>
        )
    }
}

export default Skill;