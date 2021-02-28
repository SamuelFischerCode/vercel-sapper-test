import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.8540fac0.js';

/* src/routes/index.svelte generated by Svelte v3.34.0 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let main;
	let img;
	let img_src_value;
	let t1;
	let h1;
	let t2;
	let t3;
	let p;
	let t4;
	let t5;
	let a;
	let t6;

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			img = element("img");
			t1 = space();
			h1 = element("h1");
			t2 = text("Jobs For Everyone");
			t3 = space();
			p = element("p");
			t4 = text("Online or on Site");
			t5 = space();
			a = element("a");
			t6 = text("View Jobs");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1xgfy2c\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			img = claim_element(main_nodes, "IMG", { src: true, alt: true, class: true });
			t1 = claim_space(main_nodes);
			h1 = claim_element(main_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Jobs For Everyone");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(main_nodes);
			p = claim_element(main_nodes, "P", { class: true });
			var p_nodes = children(p);
			t4 = claim_text(p_nodes, "Online or on Site");
			p_nodes.forEach(detach_dev);
			t5 = claim_space(main_nodes);
			a = claim_element(main_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t6 = claim_text(a_nodes, "View Jobs");
			a_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "the Jobs App - Home";
			if (img.src !== (img_src_value = "no-text-logo.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo");
			attr_dev(img, "class", "svelte-w4wka4");
			add_location(img, file, 5, 1, 74);
			attr_dev(h1, "class", "svelte-w4wka4");
			add_location(h1, file, 6, 1, 117);
			attr_dev(p, "class", "svelte-w4wka4");
			add_location(p, file, 7, 1, 145);
			attr_dev(a, "href", "jobs");
			attr_dev(a, "class", "btn svelte-w4wka4");
			add_location(a, file, 8, 1, 171);
			attr_dev(main, "class", "svelte-w4wka4");
			add_location(main, file, 4, 0, 66);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			append_dev(main, img);
			append_dev(main, t1);
			append_dev(main, h1);
			append_dev(h1, t2);
			append_dev(main, t3);
			append_dev(main, p);
			append_dev(p, t4);
			append_dev(main, t5);
			append_dev(main, a);
			append_dev(a, t6);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTY2YjUxYmYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
