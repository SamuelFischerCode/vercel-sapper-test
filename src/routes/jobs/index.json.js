import { jobs } from "./_data";
import { v4 as uuidv4 } from "uuid";

export function get(req, res, next) {
	res.end(JSON.stringify(jobs));
}

export function post(req, res, next) {
	const { title, amount, details } = req.body;

	jobs.push({ title, amount, details, id: uuidv4() });

	res.end(JSON.stringify(jobs));
}
