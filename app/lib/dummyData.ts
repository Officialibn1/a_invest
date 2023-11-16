import { LatestTransactions, Notifications, PieData } from "@/typings";

export const latestTransactions: LatestTransactions[] = [
	{
		_id: "xs723",
		title: "Daily Earning",
		description: "Credited $177.02 interest of Value Index Fund",
		date: "Mon, Nov 13, 2023 5:00 AM",
		amount: "23,456.02",
		status: "Wallet Credited",
	},
	{
		_id: "asieu3",
		title: "Achme Earning",
		description: "Credited $1767.02 interest of Value Index Fund",
		date: "Mon, Nov 13, 2023 5:00 AM",
		amount: "113,456.02",
		status: "Wallet Credited",
	},
	{
		_id: "claje4",
		title: "Daily Earning",
		description: "Credited $277.02 interest of Value Index Fund",
		date: "Mon, Nov 13, 2023 5:00 AM",
		amount: "3,456.02",
		status: "Wallet Credited",
	},
	{
		_id: "claje4",
		title: "Withdrawal",
		description: "Withdraw $277.02 of Value Index Fund",
		date: "Mon, Nov 13, 2023 5:00 AM",
		amount: "3,456.02",
		status: "Wallet Debited",
	},
	{
		_id: "pio323",
		title: "Referral Earning",
		description: "Credited $27.02 interest of Value Index Fund",
		date: "Mon, Nov 13, 2023 5:00 AM",
		amount: "27.02",
		status: "Wallet Credited",
	},
	{
		_id: "mcmseae3",
		title: "Daily Earning",
		description: "Credited $24123.02 interest of Value Index Fund",
		date: "Mon, Nov 13, 2023 5:00 AM",
		amount: "63,432.02",
		status: "Wallet Credited",
	},
	{
		_id: "sfw33",
		title: "Auto Withdrawal",
		description: "Withdraw $4211.02 from Value Index Fund",
		date: "Mon, Nov 13, 2023 5:00 AM",
		amount: "63,432.02",
		status: "Wallet Debited",
	},
	{
		_id: "vdew235",
		title: "Achme Earning",
		description: "Credited $3212.02 interest of Value Index Fund",
		date: "Mon, Nov 13, 2023 5:00 AM",
		amount: "63,432.02",
		status: "Wallet Credited",
	},
	{
		_id: "cpwii49",
		title: "Referral Earning",
		description: "Credited $312.02 interest of Value Index Fund",
		date: "Mon, Nov 13, 2023 5:00 AM",
		amount: "432.02",
		status: "Wallet Credited",
	},
	{
		_id: "vdew235",
		title: "Daily Earning",
		description: "Credited $3212.02 interest of Value Index Fund",
		date: "Mon, Nov 13, 2023 5:00 AM",
		amount: "63,432.02",
		status: "Wallet Credited",
	},
];

export const notifications: Notifications[] = [
	{
		_id: "1",
		desc: "New investment opportunity: Technology Growth Fund now available!",
		date: "2023-11-16T08:30:00",
	},
	{
		_id: "2",
		desc: "Gold Investment Plan closed successfully. Check your returns.",
		date: "2023-11-15T15:45:00",
	},
	{
		_id: "3",
		desc: "You've purchased the Renewable Energy Portfolio investment plan.",
		date: "2023-11-14T20:12:00",
	},
	{
		_id: "4",
		desc: "Exclusive limited-time offer: Real Estate Investment Fund open for investment.",
		date: "2023-11-13T10:00:00",
	},
	{
		_id: "5",
		desc: "Congratulations! Your High-Yield Savings Plan has matured.",
		date: "2023-11-12T18:30:00",
	},
	{
		_id: "6",
		desc: "New investment alert: Sustainable Agriculture Investment Plan launched!",
		date: "2023-11-11T12:45:00",
	},
	{
		_id: "7",
		desc: "Investment update: Energy Sector Diversification Fund now available.",
		date: "2023-11-10T09:20:00",
	},
	{
		_id: "8",
		desc: "You've successfully closed the Health and Wellness Investment Plan.",
		date: "2023-11-09T14:10:00",
	},
	{
		_id: "9",
		desc: "Explore the new Digital Currency Investment Portfolio.",
		date: "2023-11-08T11:55:00",
	},
	{
		_id: "10",
		desc: "Your investment in the Sustainable Technology Fund is performing well.",
		date: "2023-11-07T17:40:00",
	},
	{
		_id: "11",
		desc: "Limited slots available for the Real Estate Growth Plan. Invest now!",
		date: "2023-11-06T13:25:00",
	},
	{
		_id: "12",
		desc: "Congratulations! Your Balanced Investment Portfolio has reached a milestone.",
		date: "2023-11-05T16:15:00",
	},
	{
		_id: "13",
		desc: "New investment opportunity: Global Emerging Markets Fund now open.",
		date: "2023-11-04T10:45:00",
	},
	{
		_id: "14",
		desc: "You've successfully closed the ESG Investment Plan. Check your returns.",
		date: "2023-11-03T19:30:00",
	},
	{
		_id: "15",
		desc: "Investment alert: High-Performance Technology Stocks Portfolio available.",
		date: "2023-11-02T08:50:00",
	},
	{
		_id: "16",
		desc: "Explore the latest Cryptocurrency Investment Options.",
		date: "2023-11-01T14:20:00",
	},
	{
		_id: "17",
		desc: "Your investment in the Sustainable Infrastructure Fund is thriving.",
		date: "2023-10-31T12:10:00",
	},
	{
		_id: "18",
		desc: "New investment plan: AI and Robotics Innovation Fund now accepting investments.",
		date: "2023-10-30T16:45:00",
	},
	{
		_id: "19",
		desc: "Congratulations! Your Green Energy Investment has contributed to a sustainable future.",
		date: "2023-10-29T11:30:00",
	},
	{
		_id: "20",
		desc: "Investment update: Financial Sector Stability Fund now available for investment.",
		date: "2023-10-28T18:15:00",
	},
];

export const dummyStockData: {
	date: string;
	stock1: number;
	stock2: number;
	stock3: number;
}[] = [
	{ date: "2023-11-15", stock1: 9345.78, stock2: 7031.24, stock3: 12000.56 },
	{ date: "2023-11-14", stock1: 8900.45, stock2: 7800.32, stock3: 8500.91 },
	{ date: "2023-11-13", stock1: 8000.23, stock2: 6500.89, stock3: 11000.77 },
	{ date: "2023-11-12", stock1: 10000.67, stock2: 7250.12, stock3: 9350.48 },
	{ date: "2023-11-11", stock1: 8600.91, stock2: 6750.34, stock3: 10800.23 },
	{ date: "2023-11-10", stock1: 10500.32, stock2: 7500.56, stock3: 8300.65 },
	{ date: "2023-11-09", stock1: 9200.76, stock2: 8200.21, stock3: 11500.89 },
	{ date: "2023-11-08", stock1: 11000.12, stock2: 8950.43, stock3: 7800.76 },
];

// Analytics Page Pie Data
export const dummyPieData: PieData[] = [
	{
		label: "Facebook",
		amount: 250,
		backgroundColor: "rgba(59, 89, 152, 0.4)",
		borderColor: "#3b5998",
	},
	{
		label: "Apple",
		amount: 200,
		backgroundColor: "rgba(239, 83, 80, 0.4)",
		borderColor: "#ef5350",
	},
	{
		label: "Instagram",
		amount: 150,
		backgroundColor: "rgba(155, 89, 182, 0.4)",
		borderColor: "#9b59b6",
	},
	{
		label: "Amazon",
		amount: 300,
		backgroundColor: "rgba(255, 193, 7, 0.4)",
		borderColor: "#ffc107",
	},
	{
		label: "Twitter",
		amount: 100,
		backgroundColor: "rgba(29, 161, 242, 0.4)",
		borderColor: "#1da1f2",
	},
];

// Analytics Page Dounut Data
export const dummyDounutData: PieData[] = [
	{
		label: "Facebook",
		amount: 125,
		backgroundColor: "rgba(59, 89, 152, 0.4)",
		borderColor: "#3b5998",
	},
	{
		label: "Apple",
		amount: 98,
		backgroundColor: "rgba(239, 83, 80, 0.4)",
		borderColor: "#ef5350",
	},
	{
		label: "Instagram",
		amount: 250,
		backgroundColor: "rgba(155, 89, 182, 0.4)",
		borderColor: "#9b59b6",
	},
	{
		label: "Amazon",
		amount: 40,
		backgroundColor: "rgba(255, 193, 7, 0.4)",
		borderColor: "#ffc107",
	},
	{
		label: "Twitter",
		amount: 320,
		backgroundColor: "rgba(29, 161, 242, 0.4)",
		borderColor: "#1da1f2",
	},
];
