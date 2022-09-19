import { connect } from 'react-redux';
import { handleAddVote } from '../actions/polls';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = Component => {
	const ComponentWithRouterProp = props => {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	};

	return ComponentWithRouterProp;
};

const Poll = ({
	authedUser,
	qid,
	currPoll,
	isDone,
	users,
	optionOnePerc,
	optionTwoPerc,
	dispatch
}) => {
	// const navigate = useNavigate();

	const handleButtonClick = option => {
		dispatch(handleAddVote(qid, option));
		// navigate('/');
	};

	return (
		<div className="center">
			Poll by {currPoll.author}
			<hr />
			<img
				src={users[currPoll['author']].avatarURL}
				alt={`Avatar of ${currPoll.name}`}
				className="avatar"
			/>
			<hr />
			<button
				className="btn"
				disabled={isDone}
				style={{
					backgroundColor:
						isDone && currPoll.optionOne.votes.includes(authedUser)
							? 'green'
							: 'white',
					color:
						isDone && currPoll.optionOne.votes.includes(authedUser)
							? 'white'
							: 'black',
					border: isDone ? '3px solid #808080' : '',
					cursor: isDone ? 'not-allowed' : ''
				}}
				onClick={() => handleButtonClick('optionOne')}
			>
				{currPoll.optionOne.text}
				<br />
				<br />
				<strong>{isDone ? optionOnePerc + ' % VOTE' : ''}</strong>
			</button>
			<button
				className="btn"
				disabled={isDone}
				style={{
					backgroundColor:
						isDone && currPoll.optionTwo.votes.includes(authedUser)
							? 'green'
							: 'white',
					color:
						isDone && currPoll.optionTwo.votes.includes(authedUser)
							? 'white'
							: 'black',
					border: isDone ? '3px solid #808080' : '',
					cursor: isDone ? 'not-allowed' : ''
				}}
				onClick={() => handleButtonClick('optionTwo')}
			>
				{currPoll.optionTwo.text}
				<br />
				<br />
				<strong>{isDone ? optionTwoPerc + ' % VOTE' : ''}</strong>
			</button>
		</div>
	);
};

const mapStateToProps = ({ authedUser, polls, users }, props) => {
	const { id } = props.router.params;

	const currUser = users[authedUser];
	const currPoll = polls[id];
	const pollsDoneId = Object.keys(currUser.answers);
	const isDone = pollsDoneId.includes(id);

	// !NOTE: VOTE PERCENTAGE CALCULATION
	const optionOneVotes = currPoll.optionOne.votes
		? currPoll.optionOne.votes.length
		: 0;
	const optionTwovotes = currPoll.optionTwo.votes
		? currPoll.optionTwo.votes.length
		: 0;
	const optionOnePerc = Math.round(
		(optionOneVotes / (optionOneVotes + optionTwovotes)) * 100
	);
	const optionTwoPerc = Math.round(
		(optionTwovotes / (optionOneVotes + optionTwovotes)) * 100
	);

	return {
		authedUser,
		qid: id,
		currPoll,
		isDone,
		users,
		optionOnePerc,
		optionTwoPerc
	};
};

export default withRouter(connect(mapStateToProps)(Poll));
