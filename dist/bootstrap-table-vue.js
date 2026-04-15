import { createElementBlock as e, openBlock as t } from "vue";
//#region \0plugin-vue:export-helper
var n = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, r = window.jQuery, i = (e) => e === void 0 ? e : r.fn.bootstrapTable.utils.extend(!0, Array.isArray(e) ? [] : {}, e), a = {
	name: "BootstrapTable",
	props: {
		columns: {
			type: Array,
			require: !0
		},
		data: {
			type: [Array, Object],
			default() {}
		},
		options: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return { optionsChangedIdx: 0 };
	},
	mounted() {
		this.$table = r(this.$el), this.$table.on("all.bs.table", (e, t, n) => {
			let i = r.fn.bootstrapTable.events[t];
			i = i.replace(/([A-Z])/g, "-$1").toLowerCase(), this.$emit("on-all", ...n), this.$emit(i, ...n);
		}), this._initTable();
	},
	beforeUnmount() {
		this.$table.bootstrapTable("destroy");
	},
	methods: {
		_initTable() {
			let e = {
				...i(this.options),
				columns: i(this.columns),
				data: i(this.data)
			};
			this._hasInit ? this.refreshOptions(e) : (this.$table.bootstrapTable(e), this._hasInit = !0);
		},
		...(() => {
			let e = {};
			for (let t of r.fn.bootstrapTable.methods) e[t] = function(...e) {
				return this.$table.bootstrapTable(t, ...e);
			};
			return e;
		})()
	},
	watch: {
		options: {
			handler() {
				this.optionsChangedIdx++;
			},
			deep: !0
		},
		columns: {
			handler() {
				this.optionsChangedIdx++;
			},
			deep: !0
		},
		optionsChangedIdx() {
			this._initTable();
		},
		data: {
			handler() {
				this.load(i(this.data));
			},
			deep: !0
		}
	}
};
function o(n, r, i, a, o, s) {
	return t(), e("table");
}
//#endregion
//#region src/vue/index.js
var s = /* @__PURE__ */ n(a, [["render", o]]);
//#endregion
export { s as default };
