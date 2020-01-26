import React from 'react';
import './quiz.css';
import Science from '../Science/science';
import History from '../History/history';
import Art from '../Art/art';

import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;`;

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            science: false,
            history: false,
            art: false
        };
        this.handleScience = this.handleScience.bind(this);
        this.handleHistory = this.handleHistory.bind(this);
        this.handleArt = this.handleArt.bind(this);
    }

    handleScience() {
        this.setState({
            science: !this.state.science
        });
    }

    handleHistory() {
        this.setState({
            history: !this.state.history
        });
    }

    handleArt() {
        this.setState({
            art: !this.state.art
        });
    }

    render() {
        if (this.state.science === true) {
            return <Science backFromScience = {this.handleScience}/>;
        }
        if (this.state.history === true) {
            return <History backFromHistory = {this.handleHistory}/>;
        }
        if (this.state.art === true) {
            return <Art backFromArt = {this.handleArt}/>;
        }
        return (
            <div className="container">
                <div className="home-content">
                    <Bounce>
                        <h1>Quiz Time!</h1>
                    </Bounce>
                    <div className="btn" onClick={this.handleScience}>Science</div>
                    <div className="btn" onClick={this.handleHistory}>History</div>
                    <div className="btn" onClick={this.handleArt}>Art</div>
                </div>
            </div>
        );
    }
}
