import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <>
                {/* <div>
                    <img src='../img/Kyouge (2).png' style={{ width: '500px', height: '500px' }} />
                </div> */}
                <div className='content'>
                    <div className='a'>
                        Hi
                    </div>
                    <div className='b'>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;