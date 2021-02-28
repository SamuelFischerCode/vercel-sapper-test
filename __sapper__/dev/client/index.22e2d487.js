import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as validate_each_argument, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, p as set_data_dev, a as space, q as query_selector_all, c as claim_space, n as noop, r as destroy_each } from './client.54a844f2.js';

/* src/routes/jobs/index.svelte generated by Svelte v3.34.0 */

const file = "src/routes/jobs/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (21:2) {#each jobs as job}
function create_each_block(ctx) {
	let li;
	let a;
	let t_value = /*job*/ ctx[1].title + "";
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", a_href_value = `jobs/${/*job*/ ctx[1].id}`);
			attr_dev(a, "class", "svelte-5hhp8b");
			add_location(a, file, 21, 7, 352);
			attr_dev(li, "class", "svelte-5hhp8b");
			add_location(li, file, 21, 3, 348);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*jobs*/ 1 && t_value !== (t_value = /*job*/ ctx[1].title + "")) set_data_dev(t, t_value);

			if (dirty & /*jobs*/ 1 && a_href_value !== (a_href_value = `jobs/${/*job*/ ctx[1].id}`)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(21:2) {#each jobs as job}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let section1;
	let h2;
	let t1;
	let t2;
	let ul;
	let t3;
	let section0;
	let a;
	let t4;
	let each_value = /*jobs*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			section1 = element("section");
			h2 = element("h2");
			t1 = text("All Current Jobs");
			t2 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			section0 = element("section");
			a = element("a");
			t4 = text("Add New Job");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1g10hit\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", {});
			var section1_nodes = children(section1);
			h2 = claim_element(section1_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "All Current Jobs");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section1_nodes);
			ul = claim_element(section1_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			t3 = claim_space(section1_nodes);
			section0 = claim_element(section1_nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			a = claim_element(section0_nodes, "A", { rel: true, href: true, class: true });
			var a_nodes = children(a);
			t4 = claim_text(a_nodes, "Add New Job");
			a_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "All Jobs";
			add_location(h2, file, 18, 1, 291);
			attr_dev(ul, "class", "svelte-5hhp8b");
			add_location(ul, file, 19, 1, 318);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", "/jobs/create");
			attr_dev(a, "class", "btn");
			add_location(a, file, 26, 2, 446);
			attr_dev(section0, "class", "anchor svelte-5hhp8b");
			add_location(section0, file, 25, 1, 419);
			add_location(section1, file, 17, 0, 280);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section1, anchor);
			append_dev(section1, h2);
			append_dev(h2, t1);
			append_dev(section1, t2);
			append_dev(section1, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			append_dev(section1, t3);
			append_dev(section1, section0);
			append_dev(section0, a);
			append_dev(a, t4);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*jobs*/ 1) {
				each_value = /*jobs*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section1);
			destroy_each(each_blocks, detaching);
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
	const res = await this.fetch("/jobs.json");
	const jobs = await res.json();
	return { jobs };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Jobs", slots, []);
	let { jobs } = $$props;
	const writable_props = ["jobs"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Jobs> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("jobs" in $$props) $$invalidate(0, jobs = $$props.jobs);
	};

	$$self.$capture_state = () => ({ preload, jobs });

	$$self.$inject_state = $$props => {
		if ("jobs" in $$props) $$invalidate(0, jobs = $$props.jobs);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [jobs];
}

class Jobs extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { jobs: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Jobs",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*jobs*/ ctx[0] === undefined && !("jobs" in props)) {
			console.warn("<Jobs> was created without expected prop 'jobs'");
		}
	}

	get jobs() {
		throw new Error("<Jobs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set jobs(value) {
		throw new Error("<Jobs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Jobs;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjJlMmQ0ODcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvam9icy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UsIHNlc3Npb24pIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKFwiL2pvYnMuanNvblwiKTtcblx0XHRjb25zdCBqb2JzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuXHRcdHJldHVybiB7IGpvYnMgfTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgam9icztcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5BbGwgSm9iczwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cblx0PGgyPkFsbCBDdXJyZW50IEpvYnM8L2gyPlxuXHQ8dWw+XG5cdFx0eyNlYWNoIGpvYnMgYXMgam9ifVxuXHRcdFx0PGxpPjxhIGhyZWY9e2Bqb2JzLyR7am9iLmlkfWB9Pntqb2IudGl0bGV9PC9hPjwvbGk+XG5cdFx0ey9lYWNofVxuXHQ8L3VsPlxuXG5cdDxzZWN0aW9uIGNsYXNzPVwiYW5jaG9yXCI+XG5cdFx0PGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiL2pvYnMvY3JlYXRlXCIgY2xhc3M9XCJidG5cIj5BZGQgTmV3IEpvYjwvYT5cblx0PC9zZWN0aW9uPlxuPC9zZWN0aW9uPlxuXG48c3R5bGU+XG5cdHVsIHtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cdGxpIHtcblx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdH1cblx0bGkgYSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0cGFkZGluZzogMTVweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRtYXJnaW46IDEwcHggYXV0bztcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdH1cblx0bGkgYTpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogI2ZiZmJmYjtcblx0fVxuXHQuYW5jaG9yIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFxQm1DLEdBQUcsSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUFwQixHQUFHLElBQUMsRUFBRTs7Ozs7Ozs7Ozs7OzREQUFLLEdBQUcsSUFBQyxLQUFLOzs4RUFBcEIsR0FBRyxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBRHJCLEdBQUk7Ozs7Z0NBQVQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFBQyxHQUFJOzs7OytCQUFULE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFuQmUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO09BQ3BDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7T0FDbkMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJO1VBRWxCLElBQUk7Ozs7OztPQUtILElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
