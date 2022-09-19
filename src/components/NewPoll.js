import { useState } from 'react';
import { connect } from 'react-redux';
import { handleAddPoll } from '../actions/polls';
import { useNavigate } from 'react-router-dom';

const NewPoll = ({ dispatch, id }) => {
	const navigate = useNavigate();
	const [input1, setInput1] = useState('');
	const [input2, setInput2] = useState('');

	const handleInput1 = e => {
		const input1 = e.target.value;
		setInput1(input1);
	};
	const handleInput2 = e => {
		const input2 = e.target.value;
		setInput2(input2);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(handleAddPoll(input1, input2, id));
		setInput1('');
		setInput2('');
		navigate('/');
	};

	return (
		<div>
			<h1 className="center" data-testid="header">
				Would you rather?
			</h1>
			<h6 className="center">Create your own Poll</h6>
			<form className="new-poll" onSubmit={handleSubmit}>
				<label className="center">First Option</label>
				<input
					placeholder="Option one"
					value={input1}
					className="textarea"
					onChange={handleInput1}
				/>
				<hr />
				<label className="center">Second Option</label>
				<input
					placeholder="Option two"
					value={input2}
					className="textarea"
					onChange={handleInput2}
				/>
				<button
					className="btn"
					data-testid="submit"
					disabled={input1 === '' || input2 === ''}
					style={{
						cursor: input1 === '' || input2 === '' ? 'not-allowed' : ''
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default connect()(NewPoll);
