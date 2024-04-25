import { Header } from '@/components/Header';
import { Post, postType } from '@/components/Post';
import { Sidebar } from '@/components/Sidebar';

const posts: postType[] = [
	{
		id: 1,
		author: {
			avatarURL: 'https://github.com/victorSilvaGuedes.png',
			name: 'Victor Silva Guedes',
			role: 'Desenvolvedor de software',
		},
		content: [
			{ type: 'Paragraph', content: 'Fala galera! 👋🏻' },
			{
				type: 'Paragraph',
				content: 'Esse é meu post de teste para esse site que criei usando',
			},
			{
				type: 'Link',
				content: '#React',
			},
			{
				type: 'Link',
				content: '#Tailwind',
			},
		],
		publishedAt: new Date('2024-03-14 16:30:00'),
	},
];

export default function Home() {
	return (
		<div>
			<Header />

			<div className="max-w-[70rem] my-8 mx-auto px-4 flex gap-8 items-start max-md:grid max-md:grid-cols-1 ">
				<Sidebar />

				<main className="flex-1">
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								post={post}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
