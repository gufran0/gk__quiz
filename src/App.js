import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: '/lion.jpg',
			answerOptions: [
				{ answerText: 'Lion', isCorrect: true },
				{ answerText: 'car', isCorrect: false },
				{ answerText: 'Paris', isCorrect: false },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: '/WW187785.jpg',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Elephant', isCorrect: true },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: '/download.jpg',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'deer', isCorrect: true },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: '/tiger.jpg',
			answerOptions: [
				{ answerText: 'tiger', isCorrect: true },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Elephant', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<img src={questions[currentQuestion].questionText} height="125px" width="125px" alt="assas"/>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
