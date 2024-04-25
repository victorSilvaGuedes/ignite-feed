import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { useState } from 'react';
import { Icon } from '../Icon';

interface commentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: commentProps) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		// IMPORTANTE!
		// Para atualizar de dois em dois (usar estado após alteração, caso contrário usará o estado anterior)
		setLikeCount((state) => {
			return state + 1;
		});
		// setLikeCount((state) => {
		// 	return state + 1;
		// });
	}
	return (
		<div className="flex gap-4 mt-8">
			<Icon src="https://github.com/victorSilvaGuedes.png" />
			<div className="flex-1">
				<div className="p-4 rounded-lg bg-stone-700">
					<header className="flex items-start justify-between">
						<div className="flex flex-col">
							<strong className="text-sm leading-relaxed">
								Victor Silva Guedes
							</strong>

							<time
								className="text-xs text-stone-400"
								dateTime="2024-03-13 17:30:00"
								title="Publicado em 13 de março de 2024, às 17:30"
							>
								Cerca de 1h atrás
							</time>
						</div>

						<button
							onClick={handleDeleteComment}
							title="Deletar comentário"
							className="transition-colors hover:text-red-600"
						>
							<Trash size={24} />
						</button>
					</header>
					<p className="mt-4 text-sm text-stone-300">{content}</p>
				</div>

				<footer className="mt-4 text-stone-400">
					<button
						// IMPORTANTE
						// Não usar o likeCount+1 direto no onClick, pois assim ele realizará a operação infinitamente, não no click
						onClick={handleLikeComment}
						className="flex items-center gap-2 hover:text-green-600"
					>
						<ThumbsUp />
						Aplaudir •<span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
