import React, { Component } from 'react';

const withWindowResizeHandler = (WrappedComponent) =>
    class component extends Component {
        constructor(props) {
            super(props);
            this.state = {
                width: document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth || window.innerWidth,
                height: document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight || window.innerHeight,
            };
        }

        componentDidMount() {
            window.addEventListener('resize', this.onResizeHandler);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.onResizeHandler);
        }

        onResizeHandler = () => {
            this.setState({
                width: document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth || window.innerWidth,
                height: document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight || window.innerHeight,
            });
        };

        render() {
            const { width, height } = this.state;
            const { ...passThroughProps } = this.props;

            return (
                <>
                    <WrappedComponent {...passThroughProps} windowWidth={width} windowHeight={height} />
                </>
            );
        }
    };

export default withWindowResizeHandler;
