import Header from "~/components/Header/Header";

export function meta() {
	return [
		{ title: "Кафедра ГУиИ" },
		{ name: "description", content: "Home Page" },
	];
}

export default function IndexRoute() {
	return (
		<Header></Header>
	);
}