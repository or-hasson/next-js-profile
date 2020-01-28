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
        }, 60000);
    }

    render() {
        const { isFlipping } = this.state;
        return (
            <BaseLayout className="cover">
                <div className="main-section">
                    <div className="background-image">
                    </div>
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="hero-section">
                                    <div className={`flipper`}>
                                        <div className="back">

                                            <div className="hero-section-content">

                                                <div className="hero-section-content-intro">
                                                    <h2> Full Stack - Or Hasson </h2>
                                                    Have a look at my site.
                                                </div>
                                            </div>
                                            <div className="shadow-custom">
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