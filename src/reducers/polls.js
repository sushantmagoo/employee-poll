import { ADD_POLL, ADD_VOTE, RECEIVE_POLL } from '../actions/polls';

export default function polls(state = {}, action) {
	switch (action.type) {
		case ADD_POLL:
			return {
				...state,
				[action.poll.id]: action.poll
			};

		case ADD_VOTE:
			const { authedUser, qid, answer } = action.vote;
			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser])
					}
				}
			};

		case RECEIVE_POLL:
			return action.polls;

		default:
			return state;
	}
}
