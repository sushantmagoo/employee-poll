import {
	RECEIVE_USERS,
	UPDATE_USER_POLL,
	UPDATE_USER_VOTE
} from '../actions/users';

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			};

		case UPDATE_USER_POLL:
			return {
				...state,
				[action.poll.author]: {
					...state[action.poll.author],
					questions: state[action.poll.author].questions.concat([
						action.poll.id
					])
				}
			};

		case UPDATE_USER_VOTE:
			const { authedUser, qid, answer } = action.vote;
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer
					}
				}
			};

		default:
			return state;
	}
}
