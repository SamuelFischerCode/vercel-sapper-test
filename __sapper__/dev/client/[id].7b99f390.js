import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, p as set_data_dev, n as noop } from './client.7782e46d.js';
import { title } from 'node:process';

/* src/routes/jobs/[id].svelte generated by Svelte v3.34.0 */
const file = "src/routes/jobs/[id].svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let section;
	let h2;
	let t1_value = /*job*/ ctx[0].title + "";
	let t1;
	let t2;
	let p0;
	let t3;
	let t4_value = /*job*/ ctx[0].amount + "";
	let t4;
	let t5;
	let p1;
	let t6_value = /*job*/ ctx[0].details + "";
	let t6;
	document.title = title_value = "Job - " + /*job*/ ctx[0].title;

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			h2 = element("h2");
			t1 = text(t1_value);
			t2 = space();
			p0 = element("p");
			t3 = text("Salary of €");
			t4 = text(t4_value);
			t5 = space();
			p1 = element("p");
			t6 = text(t6_value);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1nouq31\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Salary of €");
			t4 = claim_text(p0_nodes, t4_value);
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, t6_value);
			p1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 22, 1, 385);
			add_location(p0, file, 23, 1, 407);
			add_location(p1, file, 24, 1, 439);
			attr_dev(section, "class", "job");
			add_location(section, file, 21, 0, 362);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t1);
			append_dev(section, t2);
			append_dev(section, p0);
			append_dev(p0, t3);
			append_dev(p0, t4);
			append_dev(section, t5);
			append_dev(section, p1);
			append_dev(p1, t6);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*job*/ 1 && title_value !== (title_value = "Job - " + /*job*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*job*/ 1 && t1_value !== (t1_value = /*job*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*job*/ 1 && t4_value !== (t4_value = /*job*/ ctx[0].amount + "")) set_data_dev(t4, t4_value);
			if (dirty & /*job*/ 1 && t6_value !== (t6_value = /*job*/ ctx[0].details + "")) set_data_dev(t6, t6_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
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

async function preload(page, session) {
	const { id } = page.params;
	const res = await this.fetch(`jobs/${id}.json`);
	const job = await res.json();
	return { job };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bidu5D", slots, []);
	let { job } = $$props;
	const writable_props = ["job"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("job" in $$props) $$invalidate(0, job = $$props.job);
	};

	$$self.$capture_state = () => ({ preload, title, job });

	$$self.$inject_state = $$props => {
		if ("job" in $$props) $$invalidate(0, job = $$props.job);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [job];
}

class U5Bidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { job: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*job*/ ctx[0] === undefined && !("job" in props)) {
			console.warn("<U5Bidu5D> was created without expected prop 'job'");
		}
	}

	get job() {
		throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set job(value) {
		throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bidu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS43Yjk5ZjM5MC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9qb2JzL1tpZF0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdFx0Y29uc3QgeyBpZCB9ID0gcGFnZS5wYXJhbXM7XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBqb2JzLyR7aWR9Lmpzb25gKTtcblx0XHRjb25zdCBqb2IgPSBhd2FpdCByZXMuanNvbigpO1xuXG5cdFx0cmV0dXJuIHsgam9iIH07XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyB0aXRsZSB9IGZyb20gXCJub2RlOnByb2Nlc3NcIjtcblxuXHRleHBvcnQgbGV0IGpvYjtcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Kb2IgLSB7am9iLnRpdGxlfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbiBjbGFzcz1cImpvYlwiPlxuXHQ8aDI+e2pvYi50aXRsZX08L2gyPlxuXHQ8cD5TYWxhcnkgb2Yg4oKse2pvYi5hbW91bnR9PC9wPlxuXHQ8cD57am9iLmRldGFpbHN9PC9wPlxuPC9zZWN0aW9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O3dCQXNCTSxHQUFHLElBQUMsS0FBSzs7Ozs7d0JBQ0MsR0FBRyxJQUFDLE1BQU07Ozs7d0JBQ3JCLEdBQUcsSUFBQyxPQUFPOzttREFORCxHQUFHLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEVBQVQsR0FBRyxJQUFDLEtBQUs7Ozs7NkRBSWxCLEdBQUcsSUFBQyxLQUFLOzZEQUNDLEdBQUcsSUFBQyxNQUFNOzZEQUNyQixHQUFHLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBdkJPLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTztTQUNsQyxFQUFFLEtBQUssSUFBSSxDQUFDLE1BQU07T0FFcEIsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtPQUNqQyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUk7VUFFakIsR0FBRzs7Ozs7O09BT0YsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
