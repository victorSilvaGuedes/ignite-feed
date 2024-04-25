interface iconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	hasBorder?: boolean;
}

export function Icon({ hasBorder, ...props }: iconProps) {
	return (
		<img
			className={`rounded-lg size-12 ${
				hasBorder
					? 'border-4 border-stone-800 outline outline-2 outline-green-600'
					: ''
			}`}
			{...props}
		/>
	);
}
