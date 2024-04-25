import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Comment } from '../Comment';
import { Icon } from '../Icon';

export interface postType {
	id: number;
	author: {
		name: string;
		role: string;
		avatarURL: string;
	};
	publishedAt: Date;
	content: { type: 'Link' | 'Paragraph'; content: string }[];
}

interface postProps {
	post: postType;
}

export function Post({ post }: postProps) {
	const [comments, setComments] = useState(['Oi']);
	const [newCommentText, setNewCommentText] = useState('');

	const publishedDateFormatted = format(
		post.publishedAt,
		"dd 'de' LLLL 'de' yyyy',' 'às' HH:mm",
		{
			locale: ptBR,
		}
	);
	const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function handleCreateNewComment(event: FormEvent) {
		event.preventDefault();

		setComments([...comments, newCommentText]);

		setNewCommentText('');
	}

	function handleNewCommentChangeText(event: ChangeEvent<HTMLTextAreaElement>) {
		setNewCommentText(event.target.value);
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeleteOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});

		setComments(commentsWithoutDeleteOne);
	}

	return (
		<article className="p-10 mb-8 rounded-lg bg-stone-800">
			<header className="flex items-center justify-between max-md:flex-col">
				<div className="flex gap-4 ">
					<Icon
						src={post.author.avatarURL}
						hasBorder
					/>
					<div className="flex flex-col">
						<strong className="leading-relaxed text-stone-100">
							{post.author.name}
						</strong>
						<span className="text-sm leading-relaxed text-stone-400">
							{post.author.role}
						</span>
					</div>
				</div>

				<time
					className="text-sm text-stone-400 max-md:ml-6"
					dateTime={post.publishedAt.toISOString()}
					title={publishedDateFormatted}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className="mt-6 leading-relaxed text-stone-300">
				{post.content.map((line) => {
					if (line.type === 'Paragraph') {
						return (
							<p
								key={line.content}
								className="mt-4"
							>
								{line.content}
							</p>
						);
					} else if (line.type === 'Link') {
						return (
							<p key={line.content}>
								<a className="font-bold text-green-700 cursor-pointer hover:text-green-600">
									{line.content}{' '}
								</a>
							</p>
						);
					}
				})}
			</div>

			<form
				onSubmit={handleCreateNewComment}
				className="w-full pt-6 mt-6 border-t border-stone-600"
			>
				<strong className="leading-relaxed text-stone-100">
					Deixe seu feedback
				</strong>
				<textarea
					className="w-full h-24 p-4 mt-4 leading-snug rounded-lg resize-none bg-stone-900 text-stone-100"
					placeholder="Deixe seu comentário"
					name="comment"
					value={newCommentText}
					onChange={handleNewCommentChangeText}
				/>

				<footer className="mt-6">
					<button
						className="px-4 py-3 font-bold transition-colors bg-green-700 rounded-lg cursor-pointer disabled:hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed text-stone-100 hover:bg-green-600"
						type="submit"
						disabled={newCommentText.length === 0}
					>
						Publicar
					</button>
				</footer>
			</form>
			<div>
				{comments.map((comment) => {
					return (
						<Comment
							onDeleteComment={deleteComment}
							key={comment}
							content={comment}
						/>
					);
				})}
			</div>
		</article>
	);
}
