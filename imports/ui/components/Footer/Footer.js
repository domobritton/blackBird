import React from 'react';
import styled from 'styled-components';


export const Footer = () => (
    <Wrapper>
        <Inner>
            <Text>
                <CopyRight>© 2018 Blackbird Air Inc.</CopyRight>
                Blackbird Air Inc. is not a direct or indirect air carrier 
                and does not own, maintain or operate aircraft. Blackbird Air 
                Inc. acts solely as your agent in arranging the flight. The 
                air carriers who offer their services through this website are 
                licensed as required by applicable law. Please refer to our <br />
                <span>Terms of Use</span> and <span>Privacy</span> for details.
            </Text> 
            <Social>
                <Link 
                href='https://www.instagram.com/blackbird/' 
                target='_blank'>
                    <div className='overlay'></div>
                    <img src='/images/asset19.svg' alt='Instagram'/>
                </Link>
                <Link 
                href='https://www.facebook.com/flyblackbirdair/'
                target='_blank'>
                    <div className='overlay'></div>
                    <img src='/images/asset20.svg' alt='Facebook'/>
                </Link>
                <Link 
                href='https://twitter.com/blackbird/'
                target='_blank'>
                    <div className='overlay'></div>
                    <img src='/images/asset21.svg' alt='Twitter'/>
                </Link>
                <Link 
                href='https://www.linkedin.com/company/blackbird-air/'
                target='_blank'>
                    <div className='overlay'></div>
                    <img src='/images/asset22.svg' alt='LinkedIn'/>
                </Link>
            </Social>
        </Inner>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 300px;
    background: #1d2133;
`;

const Inner = styled.div`
    display: flex;
    width: 960px;
`;

const CopyRight = styled.div`
    width: 50%;
    color: #ffffff;
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    margin-bottom: 24px;
`;
    
    const Text = styled(CopyRight)`
    height: 110px;
    margin-top: 64px;
    color: #797c85;

    span {
        color: #ffffff;
    }
`;

const Social = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-top: 50px;
    position: relative;

    img {
        width: 24px;
        cursor: pointer;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        z-index: 10;
    }
    
    &:hover .overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }
`;
