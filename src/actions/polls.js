import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { _saveQuestion, _saveQuestionAnswer } from './shared';
import { updateUserPoll, updateUserVote } from './users';

export const ADD_POLL = 'ADD_POLL';
export const ADD_VOTE = 'ADD_VOTE';
export const RECEIVE_POLL = 'RECEIVE_POLL';

function addPoll(poll) {
	return {
		type: ADD_POLL,
		poll
	};
}

function addVote(vote) {
	return {
		type: ADD_VOTE,
		vote
	};
}

export function receivePolls(polls) {
	return {
		type: RECEIVE_POLL,
		polls
	};
}

export function handleAddPoll(optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		dispatch(showLoading());
		return _saveQuestion({ optionOneText, optionTwoText, author: authedUser })
			.then(poll => dispatch(addPoll(poll)))
			.then(poll => dispatch(updateUserPoll(poll)))
			.then(() => dispatch(hideLoading()));
	};
}

export function handleAddVote(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		dispatch(showLoading());
		return _saveQuestionAnswer({ qid, answer, authedUser })
			.then(() => dispatch(addVote({ qid, answer, authedUser })))
			.then(() => dispatch(updateUserVote({ qid, answer, authedUser })))
			.then(() => dispatch(hideLoading()));
	};
}
