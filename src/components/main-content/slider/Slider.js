import React from 'react';
import './Slider.css';
import SliderNavigation from './slider-navigation/SliderNavigation';

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            active: 1,
            slides: 10
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })        
    }

    clickHandler(e) {
        if (e.target.className.indexOf('slider__navigation-button--right') === -1) {
            if (this.state.active === 1) {
                this.setState({
                    active: this.state.slides
                })
            } else {
                this.setState({
                    active: this.state.active - 1
                })                
            }
        } else {
            if (this.state.active === this.state.slides) {
                this.setState({
                    active: 1
                })
            } else {
                this.setState({
                    active: this.state.active + 1
                })                
            }
        }
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <>
                    <div className="container slider">
                        <SliderNavigation onClick={this.clickHandler} />
                        <div className="slider__color-block"></div>
                        <div className="slider__container">
                            {items.map((item, i) => {
                                if (i < this.state.slides) {
                                    return(
                                        <div key={`slide_${i}`} data-slide={i+1} className={this.state.active === i + 1 ? 'slide slide--active' : 'slide'}>
                                            <div className="slide__content">
                                                <h3 className="slide__title">{item.title}</h3>
                                                <p className="slide__text">
                                                    {item.body}
                                                </p>
                                            </div>
                                            <div className="slide__image-container"></div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Slider;