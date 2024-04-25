import { PencilLine } from '@phosphor-icons/react';
import { Icon } from '../Icon';

export function Sidebar() {
	return (
		<aside className="overflow-hidden rounded-lg w-72 bg-stone-800 max-md:w-full">
			<img
				className="object-cover w-full h-16"
				src="https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=50&w=500=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>

			<div className="flex flex-col items-center -mt-6">
				<Icon
					src="https://github.com/victorSilvaGuedes.png"
					hasBorder
				/>
				<strong className="mt-4 leading-relaxed text-stone-100">
					Victor Silva Guedes
				</strong>
				<span className="text-sm leading-relaxed text-stone-400">
					Desenvolvedor de Software
				</span>
			</div>

			<footer className="px-8 pt-6 pb-8 mt-6 border-t border-t-stone-700">
				<a
					href="#"
					className="flex items-center justify-center w-full h-12 gap-2 px-4 font-bold text-green-700 transition-colors bg-transparent border border-green-700 rounded-lg hover:bg-green-700 hover:text-stone-100"
				>
					<PencilLine size={20} />
					Editar meu perfil
				</a>
			</footer>
		</aside>
	);
}
