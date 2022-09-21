import { useTheme } from 'next-themes';

function Button() {
	const { theme, setTheme } = useTheme();
	return (
		<button
			className="text-3xl text-white bg-gray-600 rounded-md p-5"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? 'light' : 'dark'}
		</button>
	);
}

export default Button;
