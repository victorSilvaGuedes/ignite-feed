interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className: string;
	children: string;
}

export function Button({ className, children, ...props }: buttonProps) {
	return (
		<button
			className={`px-4 py-3 font-bold border-0 rounded-lg cursor-pointer transition-color text-stone-100 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
