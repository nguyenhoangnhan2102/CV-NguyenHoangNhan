import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons'

class Footer extends React.Component {
    render() {
        return (
            <div className="container-footer">
                <div className="container_column">
                    <div className="column-1">
                        <a>BẢN THÂN TÔI</a>
                        <div className="column_1_content">
                            Tôi tên Nguyễn Hoàng Nhân, 21 tuổi, hiện đang học năm 3 chuyên ngành Công nghệ thông tin Trường Đại Học Trà Vinh,
                            tôi đang cố gắng để không phụ công ơn gia đình, bạn bè và vượt qua những kẻ từng xem thường, cười nhạo mình!!!
                        </div>
                    </div>
                    <div className="column-2">
                        <a>THÔNG TIN LIÊN HỆ</a>
                        <div className="column_2_content">
                            <a>Họ tên: Nguyễn Hoàng Nhân</a>
                            <a>Ngày sinh: 21/02/2003</a>
                            <a>Quê quán: Trà Vinh</a>
                            <a>Nghề nghiệp: Sinh viên</a>
                        </div>
                    </div>
                    <div className="column-3">
                        <a>MẠNG XÃ HỘI</a>
                        <div className="footer_icon">
                            <a><SocialIcon url="https://www.facebook.com/omari.kikane/" /></a>
                        </div>
                        <div className="footer_icon">
                            <a><SocialIcon url="https://www.youtube.com/channel/UCKAkTJ_TkA8Rc8FGWFxAdxA" /></a>
                        </div>
                        <div className="footer_icon">
                            <a><SocialIcon url="https://github.com/nguyenhoangnhan2102" /></a>
                        </div>
                    </div>
                </div>
                <div className="copy_right">
                    <hr></hr>
                    <div className="copy_right_content">
                        Copyright &copy; 2024 All Rights Reserved by <a>NGUYỄN HOÀNG NHÂN</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;