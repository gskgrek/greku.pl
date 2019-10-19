import React, { Component, Fragment } from 'react';

const withWindowResizeHandler = WrappedComponent => {
    return class component extends Component {
        state = {
            width: document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth || window.innerWidth,
            height: document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight || window.innerHeight,
        };

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
            return (
                <Fragment>
                    <WrappedComponent {...this.props} windowWidth={width} windowHeight={height} />
                </Fragment>
            );
        }
    };
};

export default withWindowResizeHandler;
