import React from 'react';
import './art.css';
import ScoreScreen from '../Score-Screen/score_screen';

import Data from '../../Questions/art-questions.json';

export default class Art extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question_count: 0,
            player_score: 0
        };
        this.handleSelectedAnswer = this.handleSelectedAnswer.bind(this);
    }

    componentDidMount() {
        this.setState({
            player_score: 0,
            question_count: 0
        });
    }

    handleSelectedAnswer(event) {
        if (event.currentTarget.getAttribute('value') === Data[this.state.question_count].correct) {
            this.setState({
                player_score: this.state.player_score + 1,
                question_count: this.state.question_count + 1
            });
        } else {
            this.setState({
                question_count: this.state.question_count + 1
            });
        }
    }

    render() {
        const current_question = Data[this.state.question_count];
        if(Data[this.state.question_count] === undefined){
            return <ScoreScreen player_score={this.state.player_score}/>
        }
        return (
            <div className="container-art">
                <h1 className="title-art">Art</h1>
                <p className="question-art">{current_question.question}</p>
                <div
                    className="btn-art"
                    onClick={this.handleSelectedAnswer}
                    value={current_question.answer1}
                >
                    {current_question.answer1}
                </div>
                <div
                    className="btn-art"
                    onClick={this.handleSelectedAnswer}
                    value={current_question.answer2}
                >
                    {current_question.answer2}
                </div>
                <div
                    className="btn-art"
                    onClick={this.handleSelectedAnswer}
                    value={current_question.answer3}
                >
                    {current_question.answer3}
                </div>
                <div
                    className="btn-art"
                    onClick={this.handleSelectedAnswer}
                    value={current_question.answer4}
                >
                    {current_question.answer4}
                </div>
                <div
                    className="btn-art"
                    id="btn-home-art"
                    onClick={this.props.backFromArt}
                >
                    Home
                </div>
            </div>
        );
    }
}