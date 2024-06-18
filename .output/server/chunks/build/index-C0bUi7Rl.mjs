import { defineComponent, ref, provide, createElementBlock, resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(_attrs)} data-v-7f1eb679><div class="copyright" data-v-7f1eb679> \u041E\u041E\u041E \u201C\u0421\u0432\u0430\u0439\u043F \u0410\u043F\u201D </div><div class="navigation" data-v-7f1eb679><button class="buttons-navi" onclick="window.location.href=&#39;#&#39;" data-v-7f1eb679> \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435 </button><button class="buttons-navi" onclick="window.location.href=&#39;#&#39;" data-v-7f1eb679> \u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 </button><button class="buttons-navi" onclick="window.location.href=&#39;#&#39;" data-v-7f1eb679> \u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C </button><button class="buttons-navi" onclick="window.location.href=&#39;#&#39;" data-v-7f1eb679> \u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C </button></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7f1eb679"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-9d29fc45><div class="post" data-v-9d29fc45><div class="content" data-v-9d29fc45><p class="txt1" data-v-9d29fc45> \u041D\u0430\u043A\u043E\u043F\u0438\u043B\u043E\u0441\u044C \u043C\u043D\u043E\u0433\u043E \u043D\u0435\u043D\u0443\u0436\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0439? </p><p class="txt2" data-v-9d29fc45> \u041E\u0431\u043C\u0435\u043D\u044F\u0439 \u0438\u0445 \u043D\u0430 \u043D\u0443\u0436\u043D\u044B\u0435 \u0441\u043E Swipe Up </p><button class="button-place" data-v-9d29fc45> \u0420\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 </button></div><hr class="hr-line" data-v-9d29fc45></div><div class="how" data-v-9d29fc45><div class="txt" data-v-9d29fc45><p class="txt1" data-v-9d29fc45> \u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442? </p><button class="button-more" data-v-9d29fc45> \u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u2192 </button></div><div class="guide" data-v-9d29fc45><div class="container" id="container1" data-v-9d29fc45><p class="txt_guide" data-v-9d29fc45> 1. \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 </p></div><div class="container" id="container2" data-v-9d29fc45><p class="txt_guide" data-v-9d29fc45> 2. \u0414\u043E\u0436\u0434\u0438\u0442\u0435\u0441\u044C, \u043A\u043E\u0433\u0434\u0430 \u0432\u0430\u0448\u0435\u0439 \u0432\u0435\u0448\u044C\u044E \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0442\u0441\u044F </p></div><div class="container" id="container3" data-v-9d29fc45><p class="txt_guide" data-v-9d29fc45> 3. \u041E\u0431\u043C\u0435\u043D\u044F\u0439\u0442\u0435\u0441\u044C </p></div></div></div><hr class="hr-line" data-v-9d29fc45></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/post.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Post = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9d29fc45"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      const _component_server_only = resolveComponent("server-only");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(ssrRenderComponent(_component_server_only, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Post, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Post)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_server_only, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Footer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Footer)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C0bUi7Rl.mjs.map
