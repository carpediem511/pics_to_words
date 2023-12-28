import uuid4 from "uuid4";

const words = [

	{
		id: uuid4(),
		token: "Приложение",
		type: 'text',
		content: 'Application',
	},
	{
		id: uuid4(),
		token: "Дизайн для адаптивной вёрстки",
		type: 'image',
		content: '/images/responsive-design.jpg',
	},
	{
		id: uuid4(),
		token: "Веб-сайт",
		type: 'image',
		content: '/images/website.jpg',
	},
	{
		id: uuid4(),
		token: "Программист",
		type: 'text',
		content: 'Programmer',
	},
	{
		id: uuid4(),
		token: "Пароль",
		type: 'text',
		content: 'Password',
	},
	{
		id: uuid4(),
		token: "Приложение",
		type: 'image',
		content: '/images/application.jpg',
	},
	{
		id: uuid4(),
		token: "Ошибка",
		type: 'image',
		content: '/images/error.jpg',
	},
	{
		id: uuid4(),
		token: "Сервер",
		type: 'text',
		content: 'Server',
	},
	{
		id: uuid4(),
		token: "Веб-дизайн",
		type: 'image',
		content: '/images/design.jpg',
	},
	{
		id: uuid4(),
		token: "Пароль",
		type: 'image',
		content: '/images/password.png',
	},
	{
		id: uuid4(),
		token: "Дизайн для адаптивной вёрстки",
		type: 'text',
		content: 'Responsive design',
	},
	{
		id: uuid4(),
		token: "Веб-дизайн",
		type: 'text',
		content: 'Design',
	},
	{
		id: uuid4(),
		token: "Веб-разработка",
		type: 'image',
		content: '/images/web-development.jpg',
	},
	{
		id: uuid4(),
		token: "Клавиатура",
		type: 'text',
		content: 'Keyboard',
	},
	{
		id: uuid4(),
		token: "Программист",
		type: 'image',
		content: '/images/programmer.jpg',
	},
	{
		id: uuid4(),
		token: "Сервер",
		type: 'image',
		content: '/images/server.jpg',
	},
	{
		id: uuid4(),
		token: "Клавиатура",
		type: 'image',
		content: '/images/keyboard.jpg',
	},
	{
		id: uuid4(),
		token: "Ошибка",
		type: 'text',
		content: 'Error',
	},
	{
		id: uuid4(),
		token: "Веб-разработка",
		type: 'text',
		content: 'Web-development',
	},
	{
		id: uuid4(),
		token: "Веб-сайт",
		type: 'text',
		content: 'Website',
	},
]

export const selectedItems = [];

export const results = [
	{ name: 'Мальвина', steps: 1 },
	{ name: 'Карина', steps: 3 },
	{ name: 'Стефания', steps: 5 }
];

export default words

export const AppRoute = {
	Game: 'game',
	Results: 'results',
};
