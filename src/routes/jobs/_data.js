import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

export let jobs = [
	{
		id: "1",
		title: "Mario's plumming assistant",
		amount: 20000,
		details: lorem.generateParagraphs(3),
	},
	{
		id: "2",
		title: "Apple picker for Yoshi",
		amount: 25000,
		details: lorem.generateParagraphs(3),
	},
	{
		id: "3",
		title: "Mario kart driver",
		amount: 30000,
		details: lorem.generateParagraphs(3),
	},
];
