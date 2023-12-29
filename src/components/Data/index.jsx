import uuid4 from "uuid4";

export const getWords = (type) => [...Words[type.toLowerCase()]];

export const Words = {

	english: [
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
	],

	turkish: [
		{
			id: uuid4(),
			token: "Приложение",
			type: 'text',
			content: 'Başvuru',
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
			content: 'Programcı',
		},
		{
			id: uuid4(),
			token: "Пароль",
			type: 'text',
			content: 'Şifre',
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
			content: 'Sunucu',
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
			content: 'Uyarlanabilir düzen için tasarım',
		},
		{
			id: uuid4(),
			token: "Веб-дизайн",
			type: 'text',
			content: 'Web tasarımı',
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
			content: 'Tuş takımı',
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
			content: 'Hata',
		},
		{
			id: uuid4(),
			token: "Веб-разработка",
			type: 'text',
			content: 'Web Geliştirme',
		},
		{
			id: uuid4(),
			token: "Веб-сайт",
			type: 'text',
			content: 'İnternet sitesi',
		},
	],

	vietnamese: [
		{
			id: uuid4(),
			token: "Приложение",
			type: 'text',
			content: 'Ứng dụng',
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
			content: 'Lập trình viên',
		},
		{
			id: uuid4(),
			token: "Пароль",
			type: 'text',
			content: 'Mật khẩu',
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
			content: 'Máy chủ',
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
			content: 'Thiết kế bố cục thích ứng',
		},
		{
			id: uuid4(),
			token: "Веб-дизайн",
			type: 'text',
			content: 'Thiết kế web',
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
			content: 'Bàn phím',
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
			content: 'Lỗi',
		},
		{
			id: uuid4(),
			token: "Веб-разработка",
			type: 'text',
			content: 'Phát triển web',
		},
		{
			id: uuid4(),
			token: "Веб-сайт",
			type: 'text',
			content: 'Trang mạng',
		},
	],

	german: [
		{
			id: uuid4(),
			token: "Приложение",
			type: 'text',
			content: 'Anwendung',
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
			content: 'Programmierer',
		},
		{
			id: uuid4(),
			token: "Пароль",
			type: 'text',
			content: 'Passwort',
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
			content: 'Design für adaptives Layout',
		},
		{
			id: uuid4(),
			token: "Веб-дизайн",
			type: 'text',
			content: 'Webdesign',
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
			content: 'Tastatur',
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
			content: 'Fehler',
		},
		{
			id: uuid4(),
			token: "Веб-разработка",
			type: 'text',
			content: 'Web Entwicklung',
		},
		{
			id: uuid4(),
			token: "Веб-сайт",
			type: 'text',
			content: 'Website',
		},
	]

}

export const selectedItems = [];

export const results = [
	{ name: 'Мальвина', steps: 1 },
	{ name: 'Карина', steps: 3 },
	{ name: 'Стефания', steps: 5 }
];

export const gameLanguage = [
	{ type: 'english', icon: 'en', label: 'Begin' },
	{ type: 'german', icon: 'ger', label: 'Beginnen' },
	{ type: 'turkish', icon: 'tur', label: 'Başlamak' },
	{ type: 'vietnamese', icon: 'vi', label: 'Bắt đầu' }
];

