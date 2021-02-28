import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, u as globals, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, w as set_input_value, x as listen_dev, y as prevent_default, z as to_number, n as noop, A as run_all } from './client.33eee5d6.js';

/* src/routes/jobs/create.svelte generated by Svelte v3.34.0 */

const { console: console_1 } = globals;
const file = "src/routes/jobs/create.svelte";

function create_fragment(ctx) {
	let t0;
	let section;
	let h2;
	let t1;
	let t2;
	let form;
	let input0;
	let t3;
	let input1;
	let t4;
	let textarea;
	let t5;
	let button;
	let t6;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			h2 = element("h2");
			t1 = text("Add New Job");
			t2 = space();
			form = element("form");
			input0 = element("input");
			t3 = space();
			input1 = element("input");
			t4 = space();
			textarea = element("textarea");
			t5 = space();
			button = element("button");
			t6 = text("Add New Job");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-10pxdr2\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Add New Job");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			form = claim_element(section_nodes, "FORM", { class: true });
			var form_nodes = children(form);

			input0 = claim_element(form_nodes, "INPUT", {
				type: true,
				placeholder: true,
				required: true,
				class: true
			});

			t3 = claim_space(form_nodes);

			input1 = claim_element(form_nodes, "INPUT", {
				type: true,
				placeholder: true,
				required: true,
				class: true
			});

			t4 = claim_space(form_nodes);

			textarea = claim_element(form_nodes, "TEXTAREA", {
				placeholder: true,
				required: true,
				class: true
			});

			children(textarea).forEach(detach_dev);
			t5 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t6 = claim_text(button_nodes, "Add New Job");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Add New Job";
			attr_dev(h2, "class", "svelte-1101hzj");
			add_location(h2, file, 27, 1, 494);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Job Title");
			input0.required = true;
			attr_dev(input0, "class", "svelte-1101hzj");
			add_location(input0, file, 29, 2, 565);
			attr_dev(input1, "type", "number");
			attr_dev(input1, "placeholder", "Salary (€)");
			input1.required = true;
			attr_dev(input1, "class", "svelte-1101hzj");
			add_location(input1, file, 30, 2, 641);
			attr_dev(textarea, "placeholder", "Job Details");
			textarea.required = true;
			attr_dev(textarea, "class", "svelte-1101hzj");
			add_location(textarea, file, 36, 2, 735);
			attr_dev(button, "class", "btn");
			add_location(button, file, 37, 2, 806);
			attr_dev(form, "class", "svelte-1101hzj");
			add_location(form, file, 28, 1, 516);
			add_location(section, file, 26, 0, 483);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t1);
			append_dev(section, t2);
			append_dev(section, form);
			append_dev(form, input0);
			set_input_value(input0, /*title*/ ctx[0]);
			append_dev(form, t3);
			append_dev(form, input1);
			set_input_value(input1, /*amount*/ ctx[1]);
			append_dev(form, t4);
			append_dev(form, textarea);
			set_input_value(textarea, /*details*/ ctx[2]);
			append_dev(form, t5);
			append_dev(form, button);
			append_dev(button, t6);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[4]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[5]),
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[6]),
					listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[3]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*title*/ 1 && input0.value !== /*title*/ ctx[0]) {
				set_input_value(input0, /*title*/ ctx[0]);
			}

			if (dirty & /*amount*/ 2 && to_number(input1.value) !== /*amount*/ ctx[1]) {
				set_input_value(input1, /*amount*/ ctx[1]);
			}

			if (dirty & /*details*/ 4) {
				set_input_value(textarea, /*details*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Create", slots, []);
	let title;
	let amount;
	let details;

	const handleSubmit = async e => {
		if (title && amount && details) {
			const res = await fetch("jobs.json", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title, amount, details })
			});

			console.log(res);
			const updatedJobs = await res.json();
			console.log(updatedJobs);
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Create> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		title = this.value;
		$$invalidate(0, title);
	}

	function input1_input_handler() {
		amount = to_number(this.value);
		$$invalidate(1, amount);
	}

	function textarea_input_handler() {
		details = this.value;
		$$invalidate(2, details);
	}

	$$self.$capture_state = () => ({ title, amount, details, handleSubmit });

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("amount" in $$props) $$invalidate(1, amount = $$props.amount);
		if ("details" in $$props) $$invalidate(2, details = $$props.details);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		title,
		amount,
		details,
		handleSubmit,
		input0_input_handler,
		input1_input_handler,
		textarea_input_handler
	];
}

class Create extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Create",
			options,
			id: create_fragment.name
		});
	}
}

export default Create;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmI2MjJjYjQyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2pvYnMvY3JlYXRlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRsZXQgdGl0bGU7XG5cdGxldCBhbW91bnQ7XG5cdGxldCBkZXRhaWxzO1xuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcblx0XHRpZiAodGl0bGUgJiYgYW1vdW50ICYmIGRldGFpbHMpIHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiam9icy5qc29uXCIsIHtcblx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0YW1vdW50LFxuXHRcdFx0XHRcdGRldGFpbHMsXG5cdFx0XHRcdH0pLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0Y29uc3QgdXBkYXRlZEpvYnMgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0Y29uc29sZS5sb2codXBkYXRlZEpvYnMpO1xuXHRcdH1cblx0fTtcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5BZGQgTmV3IEpvYjwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cblx0PGgyPkFkZCBOZXcgSm9iPC9oMj5cblx0PGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtoYW5kbGVTdWJtaXR9PlxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSm9iIFRpdGxlXCIgYmluZDp2YWx1ZT17dGl0bGV9IHJlcXVpcmVkIC8+XG5cdFx0PGlucHV0XG5cdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdHBsYWNlaG9sZGVyPVwiU2FsYXJ5ICjigqwpXCJcblx0XHRcdGJpbmQ6dmFsdWU9e2Ftb3VudH1cblx0XHRcdHJlcXVpcmVkXG5cdFx0Lz5cblx0XHQ8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJKb2IgRGV0YWlsc1wiIGJpbmQ6dmFsdWU9e2RldGFpbHN9IHJlcXVpcmVkIC8+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cImJ0blwiPkFkZCBOZXcgSm9iPC9idXR0b24+XG5cdDwvZm9ybT5cbjwvc2VjdGlvbj5cblxuPHN0eWxlPlxuXHRoMiB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdGZvcm0ge1xuXHRcdG1heC13aWR0aDogMzYwcHg7XG5cdFx0bWFyZ2luOiA0MHB4IGF1dG87XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdGlucHV0LFxuXHR0ZXh0YXJlYSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHRmb250LWZhbWlseTogYXJpYWw7XG5cdFx0bWFyZ2luOiAxMHB4IGF1dG87XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2VlZTtcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQTZCeUQsR0FBSzs7O3NDQUkvQyxHQUFNOzs7eUNBRzZCLEdBQU87Ozs7Ozs7Ozs7aUVBUnhCLEdBQVk7Ozs7Ozs7eURBQ1ksR0FBSztzQ0FBTCxHQUFLOzs7c0VBSS9DLEdBQU07dUNBQU4sR0FBTTs7OzswQ0FHNkIsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbkNwRCxLQUFLO0tBQ0wsTUFBTTtLQUNOLE9BQU87O09BQ0wsWUFBWSxTQUFTLENBQUM7TUFDdkIsS0FBSyxJQUFJLE1BQU0sSUFBSSxPQUFPO1NBQ3ZCLEdBQUcsU0FBUyxLQUFLLENBQUMsV0FBVztJQUNsQyxNQUFNLEVBQUUsTUFBTTtJQUNkLE9BQU8sSUFBSSxjQUFjLEVBQUUsa0JBQWtCO0lBQzdDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxHQUNuQixLQUFLLEVBQ0wsTUFBTSxFQUNOLE9BQU87OztHQUdULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRztTQUNULFdBQVcsU0FBUyxHQUFHLENBQUMsSUFBSTtHQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7Ozs7Ozs7Ozs7O0VBWStCLEtBQUs7Ozs7O0VBSS9DLE1BQU07Ozs7O0VBRzZCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=