const comments = document.querySelector('.comments');
const commentsBody = document.querySelector('.body-comments');

if (comments || commentsBody) {
	if (comments) {
		comments.addEventListener("click", commentsActions);
	} else {
		commentsBody.addEventListener("click", commentsActions);
	}

	function commentsActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('comment__show-answers')) {
			const curentComment = targetElement.closest('.item-comment');
			const curentCommentAnswers = curentComment.querySelector('.item-comment__answers');
			if (!curentCommentAnswers.classList.contains('_slide')) {
				targetElement.classList.toggle('_active');
				_slideToggle(curentCommentAnswers);
			}
			e.preventDefault();
		}
		if (targetElement.classList.contains('comment__reply')) {
			const curentComment = targetElement.closest('.item-comment');
			const curentCommentAnswers = curentComment.querySelector('.item-comment__answer-form');
			if (!curentCommentAnswers.classList.contains('_slide')) {
				targetElement.classList.toggle('_active');
				_slideToggle(curentCommentAnswers);
			}
			e.preventDefault();
		}

	}

}
