export type LatestTransactions = {
	_id: string;
	title: string;
	description: string;
	date: string;
	amount: string;
	status: string;
};

export type NavMenuLinks = {
	url: string;
	icon: React.ReactNode;
	name: string;
};
