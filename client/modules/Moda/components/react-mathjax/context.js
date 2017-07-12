/* This file is a modified version of https://github.com/SamyPesse/react-mathjax
and and released under Apache License 2.0. */
/* global MathJax */
const React = require('react');
const loadScript = require('load-script');

import { PropTypes } from 'prop-types';

const DEFAULT_SCRIPT =
    'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_HTMLorMML';

const DEFAULT_OPTIONS = {
    tex2jax: {
        inlineMath: []
    },
    showMathMenu: false,
    showMathMenuMSIE: false
};

/**
 * Context for loading mathjax
 * @type {[type]}
 */
const MathJaxContext = React.createClass({
    propTypes: {
        children: PropTypes.node.isRequired,
        script:   PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.oneOf([false])
        ]),
        options:  PropTypes.object
    },

    childContextTypes: {
        MathJax: PropTypes.object
    },

    getDefaultProps() {
        return {
            script: DEFAULT_SCRIPT,
            options: DEFAULT_OPTIONS
        };
    },

    getInitialState() {
        return {
            loaded: false
        };
    },

    getChildContext() {
        return {
            MathJax: typeof MathJax == 'undefined' ? undefined : MathJax
        };
    },

    componentDidMount() {
        const { script } = this.props;

        if (!script) {
            return this.onLoad();
        }

        loadScript(script, this.onLoad);
    },

    onLoad(err) {
        const { options } = this.props;
        MathJax.Hub.Config(options);

        this.setState({
            loaded: true
        });
        if (err) console.log(err)
    },

    render() {
        const { children } = this.props;
        return React.Children.only(children);
    }
});

module.exports = MathJaxContext;
