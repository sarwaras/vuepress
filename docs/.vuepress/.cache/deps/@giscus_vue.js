import {
  createCommentVNode,
  createElementBlock,
  defineComponent,
  onMounted,
  openBlock,
  ref
} from "./chunk-ZT2TARZU.js";
import "./chunk-VNKCJBW6.js";
import "./chunk-NRPQOLJN.js";

// node_modules/@giscus/vue/dist/index.es.js
var _hoisted_1 = ["id", "repo", "repoid", "category", "categoryid", "mapping", "term", "reactionsenabled", "emitmetadata", "inputposition", "theme", "lang", "loading"];
var _sfc_main = defineComponent({
  __name: "Giscus",
  props: {
    id: null,
    repo: null,
    repoId: null,
    category: null,
    categoryId: null,
    mapping: null,
    term: null,
    theme: null,
    reactionsEnabled: null,
    emitMetadata: null,
    inputPosition: null,
    lang: null,
    loading: null
  },
  setup(__props) {
    const mounted = ref(false);
    onMounted(() => {
      mounted.value = true;
      import("./giscus.es-ZXIR5RZO.js");
    });
    return (_ctx, _cache) => {
      return mounted.value ? (openBlock(), createElementBlock("giscus-widget", {
        key: 0,
        id: __props.id,
        repo: __props.repo,
        repoid: __props.repoId,
        category: __props.category,
        categoryid: __props.categoryId,
        mapping: __props.mapping,
        term: __props.term,
        reactionsenabled: __props.reactionsEnabled,
        emitmetadata: __props.emitMetadata,
        inputposition: __props.inputPosition,
        theme: __props.theme,
        lang: __props.lang,
        loading: __props.loading
      }, null, 8, _hoisted_1)) : createCommentVNode("", true);
    };
  }
});

// dep:@giscus_vue
var giscus_vue_default = _sfc_main;
export {
  giscus_vue_default as default
};
//# sourceMappingURL=@giscus_vue.js.map
