import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='FooterHead'>
                <h2>STARATLAS</h2>
                <div className='Footer2'>
                    <div className='FooterColumn1'>
                        <h5>星圖</h5>
                        <div class='FooterColumn2'>
                            <text>關於星圖</text>
                            <text>人才召募</text>
                            <text>媒體公關</text>
                            <text>商標使用規範</text>
                        </div>
                    </div>
                    <div className='FooterColumn1'>
                        <h5>創業者</h5>
                        <div class='FooterColumn2'>
                            <text>常見問題</text>
                        </div>
                    </div>
                    <div className='FooterColumn1'>
                        <h5>投資者</h5>
                        <div class='FooterColumn2'>
                            <text>投資者權利義務</text>
                        </div>
                    </div>
                    <div className='FooterColumn1'>
                        <h5>聯繫我們</h5>
                        <div class='FooterColumn2'>
                            <text>粉絲團</text>
                            <text>電話</text>
                            <text>電子郵件</text>
                        </div>
                    </div>

                </div>
                <h6 style={{marginTop:'2rem'}}>星圖計劃 2020. All Rights Reserved.</h6>
            </div>
        )
    }
}

export default Footer;