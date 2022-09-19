import { connect } from 'react-redux';
import PollList from './PollList';

const Dashboard = props => {
	const pollsDoneArr = props.pollsDoneArr;
	const pollsNewArr = props.pollsNewArr;

	return (
		<div>
			<h3 className="center" data-testid="new-questions">
				New Questions
			</h3>
			<hr />
			<PollList polls={pollsNewArr} />
			<hr />
			<h3 className="center">Done</h3>
			<hr />
			<PollList polls={pollsDoneArr} />
		</div>
	);
};

export default connect(state => {
	const authedUser = state.authedUser;
	const currUser = state.users[authedUser];
	const polls = state.polls;
	// const users = state.users;
	const pollsAllId = Object.keys(polls);
	const pollsDoneId = Object.keys(currUser.answers);
	const pollsNewId = pollsAllId.filter(p => !pollsDoneId.includes(p));
	const pollsDoneArr = pollsDoneId.map(p => polls[p]);
	const pollsNewArr = pollsNewId.map(p => polls[p]);

	return {
		pollsDoneArr: pollsDoneArr.sort((a, b) => b.timestamp - a.timestamp),
		pollsNewArr: pollsNewArr.sort((a, b) => b.timestamp - a.timestamp)
	};
})(Dashboard);
