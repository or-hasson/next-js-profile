import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import ReactTyped from 'react-typed';
import { Button, Container,Row,Col} from 'reactstrap';




class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFlipping: false
        }

        this.roles = ['Developer', 'Tech Lover', 'Team Player', 'React.js', 'Next.js', 'Node.js','JAVA','And More...'];
    }
    componentDidMount() {
        this.animateCard();
    }

    componentWillUnmount() {
        this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
    }

    animateCard() {
        this.cardAnimationInterval = setInterval(() => {
            this.setState({
                isFlipping: !this.state.isFlipping
            });
        }, 5000);
    }

    render() {
        const { isFlipping } = this.state;
        return (
            <BaseLayout className="cover">
                <div className="main-section">
                    <div className="background-image">
                        <img src="/images/background-index.jpg" />
                    </div>
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="hero-section">
                                    <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                                        <div className="front">
                                            <div className="hero-section-content">
                                                <h2> Full Stack Web Developer </h2>
                                                <div className="hero-section-content-intro">
                                                    Have a look at my portfolio and job history.
                                                </div>
                                            </div>
                                            <img alt="Guy programming welcome picture" className="image" src="/images/section-1.jpg"/>
                                            <div className="shadow-custom">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="hero-section-content">
                                                <div className="hero-section-content-intro">
                                                </div>
                                            </div>
                                            <img alt="Guy programming welcome picture" className="image" src="/images/section-2.jpg"/>
                                            <div className="shadow-custom shadow-custom-2">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="hero-welcome-wrapper">
                                <div className="hero-welcome-text">
                                    <h1>
                                        Welcome to the portfolio website of Or Hasson :)!
                                    </h1>
                                </div>
                                <ReactTyped
                                    loop
                                    typeSpeed={60}
                                    backSpeed={60}
                                    strings={this.roles}
                                    backDelay={900}
                                    loopCount={0}
                                    showCursor
                                    className="self-typed"
                                    cursorChar="|"
                                />
                                <div className="hero-welcome-bio">
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BaseLayout>

        )
    }
}

export default Index;
