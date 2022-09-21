import { useTheme } from 'next-themes';

function Button() {
	const { theme, setTheme, resolvedTheme } = useTheme();

	console.log(resolvedTheme);
	console.log(theme);
	return (
		<button
			className="text-3xl text-white bg-gray-600 rounded-md p-5"
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
		>
			{resolvedTheme === 'dark' ? 'light' : 'dark'}
		</button>
	);
}

export default Button;
