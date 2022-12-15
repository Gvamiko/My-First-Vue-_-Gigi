(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{460:function(n,t){n.exports={baseTOC:{top:"#form-spinbutton",title:"Form Spinbutton",toc:[{href:"#overview",label:"Overview"},{href:"#v-model-value",label:"v-model value"},{href:"#min-max-and-step",label:"Min, max, and step"},{href:"#number-wrapping",label:"Number wrapping"},{href:"#styling",label:"Styling",toc:[{href:"#size",label:"Size"},{href:"#inline",label:"Inline"},{href:"#vertical",label:"Vertical"},{href:"#width",label:"Width"},{href:"#number-formatting-and-locale",label:"Number formatting and locale"}]},{href:"#disabled-and-readonly-states",label:"Disabled and readonly states"},{href:"#validation-states",label:"Validation states",toc:[{href:"#required-prop",label:"Required prop"}]},{href:"#events",label:"Events"},{href:"#accessibility",label:"Accessibility"},{href:"#implementation-notes",label:"Implementation notes"},{href:"#see-also",label:"See also"}]},titleLead:'<h1 id="form-spinbutton" class="bv-no-focus-ring"><span class="bd-content-title">Form Spinbutton</span></h1> <p class="bd-lead">Spin buttons are a BootstrapVue custom numerical range form control. Spin buttons allow for incrementing or decrementing a numerical value within a range of a minimum and maximum number, with optional step value.</p>',body:'<h2 id="overview" class="bv-no-focus-ring"><span class="bd-content-title">Overview<a class="anchorjs-link" href="#overview" aria-labelledby="overview"></a></span></h2> <p>The component <code class="text-nowrap" translate="no">&lt;b-form-spinbutton&gt;</code> is <a href="https://www.w3.org/TR/wai-aria-practices-1.2/#spinbutton" target="_blank" rel="noopener">WAI-ARIA compliant</a>, allowing for <a href="#accessibility" class="font-weight-bold">keyboard control</a>, and supports both horizontal (default) and vertical layout.</p> <p>Similar to <a href="/docs/components/form-input#range-type-input" class="font-weight-bold">range type inputs</a>, BootstrapVue&#39;s <code class="text-nowrap" translate="no">&lt;b-form-spinbutton&gt;</code> <em>does not</em> allow the user to type in a value.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;demo-sb&quot;</span>&gt;</span>Spin Button<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;demo-sb&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;100&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Value: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-number">50</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-spinbutton-demo.vue --&gt;</span></pre></div><p>The <kbd class="notranslate" translate="no">ArrowUp</kbd> and <kbd class="notranslate" translate="no">ArrowDown</kbd> keys can be used to increment or decrement the value.</p> <p>To be submitted via native browser form submits, the spinbutton must have a name set via the <code class="text-nowrap" translate="no">name</code> prop. This will create a hidden input containing the current value of the spinbutton. If the spinbutton does not have a value, the hidden input&#39;s value will be an empty string.</p> <h2 id="v-model-value" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">v-model</code> value<a class="anchorjs-link" href="#v-model-value" aria-labelledby="v-model-value"></a></span></h2> <p>The <code class="text-nowrap" translate="no">v-model</code> always returns the value as a number. The <code class="text-nowrap" translate="no">v-model</code> can be <code class="text-nowrap" translate="no">null</code> if no initial value is set.</p> <p>If the initial value is <code class="text-nowrap" translate="no">null</code> no value will be displayed in the spinbutton. Use the <code class="text-nowrap" translate="no">placeholder</code> prop to show a string when the spinbutton has no value (i.e. <code class="text-nowrap" translate="no">placeholder=&quot;--&quot;</code>).</p> <h2 id="min-max-and-step" class="bv-no-focus-ring"><span class="bd-content-title">Min, max, and step<a class="anchorjs-link" href="#min-max-and-step" aria-labelledby="min-max-and-step"></a></span></h2> <p>Spinbuttons have a default range from <code class="text-nowrap" translate="no">1</code> to <code class="text-nowrap" translate="no">100</code>, which can be changed by setting the <code class="text-nowrap" translate="no">min</code> and <code class="text-nowrap" translate="no">max</code> props. The default step increment is <code class="text-nowrap" translate="no">1</code>, and can be changed via the <code class="text-nowrap" translate="no">step</code> prop (decimal values allowed).</p> <p>When <code class="text-nowrap" translate="no">step</code> is set, the value will always be a multiple of the step size plus the minimum value.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-step&quot;</span>&gt;</span>Spin button with step of 0.25<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span>\n      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-step&quot;</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n      <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span>\n      <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;10&quot;</span>\n      <span class="hljs-attr">step</span>=<span class="hljs-string">&quot;0.25&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-spinbutton-step.vue --&gt;</span></pre></div><h2 id="number-wrapping" class="bv-no-focus-ring"><span class="bd-content-title">Number wrapping<a class="anchorjs-link" href="#number-wrapping" aria-labelledby="number-wrapping"></a></span></h2> <p>By default, when the value is increased to the <code class="text-nowrap" translate="no">max</code> value, it pressing the increment button will have no effect. Similarly when the value is as the <code class="text-nowrap" translate="no">min</code> value, pressing the decrement button will have no effect.</p> <p>To allow the spin button to wrap from max to min when incrementing (or min to max when decrementing), set the <code class="text-nowrap" translate="no">wrap</code> prop to <code class="text-nowrap" translate="no">true</code>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-wrap&quot;</span>&gt;</span>Wrapping value spin button<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-wrap&quot;</span> <span class="hljs-attr">wrap</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;25&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;--&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-spinbutton-wrap.vue --&gt;</span></pre></div><h2 id="styling" class="bv-no-focus-ring"><span class="bd-content-title">Styling<a class="anchorjs-link" href="#styling" aria-labelledby="styling"></a></span></h2> <h3 id="size" class="bv-no-focus-ring"><span class="bd-content-title">Size<a class="anchorjs-link" href="#size" aria-labelledby="size"></a></span></h3> <p>As with other form controls, <code class="text-nowrap" translate="no">&lt;b-form-spinbutton&gt;</code> supports small and large sizing via setting the <code class="text-nowrap" translate="no">size</code> prop to either <code class="text-nowrap" translate="no">&#39;sm&#39;</code> or <code class="text-nowrap" translate="no">&#39;lg&#39;</code>, respectively.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-small&quot;</span>&gt;</span>Spin button - Small size<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-small&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;--&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-default&quot;</span>&gt;</span>Spin button - Default size<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-default&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;--&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-large&quot;</span>&gt;</span>Spin button - Large size<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-large&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;--&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-spinbutton-size.vue --&gt;</span></pre></div><h3 id="inline" class="bv-no-focus-ring"><span class="bd-content-title">Inline<a class="anchorjs-link" href="#inline" aria-labelledby="inline"></a></span></h3> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-inline&quot;</span>&gt;</span>Inline spin button<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-inline&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">inline</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-number">50</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-spinbutton-inline.vue --&gt;</span></pre></div><p>The spin button will automatically adjust it&#39;s width to fit the displayed value. See the <a href="#width" class="font-weight-bold">Width section</a> below for details on controlling or setting the width.</p> <h3 id="vertical" class="bv-no-focus-ring"><span class="bd-content-title">Vertical<a class="anchorjs-link" href="#vertical" aria-labelledby="vertical"></a></span></h3> <p>Spinbuttons can be oriented in vertical mode:</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-vertical&quot;</span>&gt;</span>Vertical spin button<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-vertical&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-number">50</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-spinbutton-vertical.vue --&gt;</span></pre></div><p>Vertical spin buttons can also be sized using the <a href="#size" class="font-weight-bold"><code class="text-nowrap" translate="no">size</code> prop</a>. When in vertical mode, the spin button is rendered as an inline element.</p> <p>The spin button will automatically adjust it&#39;s width to fit the displayed value. See the <a href="#width" class="font-weight-bold">Width section</a> below for details on controlling or setting the width.</p> <h3 id="width" class="bv-no-focus-ring"><span class="bd-content-title">Width<a class="anchorjs-link" href="#width" aria-labelledby="width"></a></span></h3> <p>The control (when not <code class="text-nowrap" translate="no">vertical</code> or <code class="text-nowrap" translate="no">inline</code>) will expand to the maximum width of the parent container You can control width via utility classes such as <code class="text-nowrap" translate="no">w-25</code>, <code class="text-nowrap" translate="no">w-50</code>, <code class="text-nowrap" translate="no">w-75</code>, or use styles to set the width.</p> <p>When either <code class="text-nowrap" translate="no">vertical</code> or <code class="text-nowrap" translate="no">inline</code> is set, the control will adjust its width based on the displayed value. You can use css style to control the overall width of the control (i.e. <code class="text-nowrap" translate="no">style=&quot;width: 10rem;</code>).</p> <h3 id="number-formatting-and-locale" class="bv-no-focus-ring"><span class="bd-content-title">Number formatting and locale<a class="anchorjs-link" href="#number-formatting-and-locale" aria-labelledby="number-formatting-and-locale"></a></span></h3> <p>By default <code class="text-nowrap" translate="no">&lt;b-form-spinbutton&gt;</code> will format the displayed number in the users browser default locale. You can change the localized formatting by specifying a locale (or array of locales) via the <code class="text-nowrap" translate="no">locale</code> prop. Number format localization is performed via <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" target="_blank" rel="noopener"><code class="text-nowrap" translate="no">Intl.NumberFormat</code></a>. The locales available will be dependent on the browser implementation. Localization only controls the presentation of the value to the user, and does not affect the <code class="text-nowrap" translate="no">v-model</code>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-locales&quot;</span>&gt;</span>Locale<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-select</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-locales&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;locale&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;locales&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-select</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-local&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2&quot;</span>&gt;</span>Spin button with locale<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span>\n      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-locale&quot;</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n      <span class="hljs-attr">:locale</span>=<span class="hljs-string">&quot;locale&quot;</span>\n      <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span>\n      <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;10&quot;</span>\n      <span class="hljs-attr">step</span>=<span class="hljs-string">&quot;0.125&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Value: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>,\n        <span class="hljs-attr">locale</span>: <span class="hljs-string">&#x27;fr-CA&#x27;</span>,\n        <span class="hljs-attr">locales</span>: [\n          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;en&#x27;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;English&#x27;</span> },\n          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;de&#x27;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;German&#x27;</span> },\n          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;fr-CA&#x27;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;French (Canadian)&#x27;</span> },\n          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;fa&#x27;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Persian&#x27;</span> },\n          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;ar-EG&#x27;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Arabic (Egyptian)&#x27;</span> }\n        ]\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-spinbutton-locale.vue --&gt;</span></pre></div><p>Alternatively, you can provide your own number formatter function to format the value displayed. This is useful for displaying text instead of a number, or if you want to implement different features of <code class="text-nowrap" translate="no">Intl.NumberFormat</code>.</p> <p>To provide a formatter function, set the prop <code class="text-nowrap" translate="no">formatter-fn</code> to a method reference. The formatter is passed a single argument which is the current value. Note the formatter only affects the value displayed to the user and does not affect the <code class="text-nowrap" translate="no">v-model</code>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-days&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2&quot;</span>&gt;</span>Spin button with formatter<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span>\n      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-days&quot;</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n      <span class="hljs-attr">:formatter-fn</span>=<span class="hljs-string">&quot;dayFormatter&quot;</span>\n      <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span>\n      <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;6&quot;</span>\n      <span class="hljs-attr">wrap</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Value: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>,\n        <span class="hljs-attr">days</span>: [<span class="hljs-string">&#x27;Sunday&#x27;</span>, <span class="hljs-string">&#x27;Monday&#x27;</span>, <span class="hljs-string">&#x27;Tuesday&#x27;</span>, <span class="hljs-string">&#x27;Wednesday&#x27;</span>, <span class="hljs-string">&#x27;Thursday&#x27;</span>, <span class="hljs-string">&#x27;Friday&#x27;</span>, <span class="hljs-string">&#x27;Saturday&#x27;</span>]\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      <span class="hljs-function"><span class="hljs-title">dayFormatter</span>(<span class="hljs-params">value</span>)</span> {\n        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.days[value]\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-spinbutton-formatter.vue --&gt;</span></pre></div><h2 id="disabled-and-readonly-states" class="bv-no-focus-ring"><span class="bd-content-title">Disabled and readonly states<a class="anchorjs-link" href="#disabled-and-readonly-states" aria-labelledby="disabled-and-readonly-states"></a></span></h2> <p>Setting the prop <code class="text-nowrap" translate="no">disabled</code> places the component in a disabled, non-interactive state. The <code class="text-nowrap" translate="no">readonly</code> prop places the component in a readonly state (focusable, but the value cannot be changed by the user).</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-disabled&quot;</span>&gt;</span>Disabled spin button<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-disabled&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-readonly&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>Readonly spin button<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-readonly&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-number">50</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-spinbutton-disabled-readonly.vue --&gt;</span></pre></div><p>Disabled spinbuttons will not be submitted during native browser form submission, while a readonly spinbutton will be submitted (as long as a name has been set via the <code class="text-nowrap" translate="no">name</code> prop).</p> <h2 id="validation-states" class="bv-no-focus-ring"><span class="bd-content-title">Validation states<a class="anchorjs-link" href="#validation-states" aria-labelledby="validation-states"></a></span></h2> <p>When you default to a <code class="text-nowrap" translate="no">null</code> value, and the user has not selected a value, you can use the <code class="text-nowrap" translate="no">state</code> prop to apply one of the contextual validation styles to the component.</p> <ul> <li><code class="text-nowrap" translate="no">true</code> applies the valid styling to the component</li> <li><code class="text-nowrap" translate="no">false</code> applies the invalid styling to the component</li> <li><code class="text-nowrap" translate="no">null</code> applies no contextual styling (the default)</li> </ul> <h3 id="required-prop" class="bv-no-focus-ring"><span class="bd-content-title">Required prop<a class="anchorjs-link" href="#required-prop" aria-labelledby="required-prop"></a></span></h3> <p>Note that the required prop only generates the <code class="text-nowrap" translate="no">aria-required=&quot;true&quot;</code> attribute on the component, and does not perform any validation on form submit. You must validate the <code class="text-nowrap" translate="no">v-model</code> in your application logic.</p> <p>Note that if the prop <code class="text-nowrap" translate="no">required</code> is set, and the <code class="text-nowrap" translate="no">v-model</code> is <code class="text-nowrap" translate="no">null</code>, the attribute <code class="text-nowrap" translate="no">aria-invalid=&quot;true&quot;</code> will be rendered on the component.</p> <h2 id="events" class="bv-no-focus-ring"><span class="bd-content-title">Events<a class="anchorjs-link" href="#events" aria-labelledby="events"></a></span></h2> <p>The <code class="text-nowrap" translate="no">input</code> event is used to update the <code class="text-nowrap" translate="no">v-model</code> and is emitted any time the value changes.</p> <p>The <code class="text-nowrap" translate="no">change</code> event is emitted once the user releases the mouse button (when pressing the increment or decrement buttons) or when the user releases the <kbd class="notranslate" translate="no">ArrowDown</kbd> or <kbd class="notranslate" translate="no">ArrowUp</kbd> key. This can be handy when you need to debounce the input.</p> <p>The following example illustrates the difference between the <code class="text-nowrap" translate="no">input</code> and <code class="text-nowrap" translate="no">change</code> events. Click and hold the increment or decrement button (or use the up/down arrow keys).</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;sb-input&quot;</span>&gt;</span>Spin button - input and change events<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-spinbutton</span>\n      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;sb-input&quot;</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>\n      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;value2 = $event&quot;</span>\n      <span class="hljs-attr">wrap</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-spinbutton</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Input event: {{ value1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Change event: {{ value2 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value1</span>: <span class="hljs-number">0</span>,\n        <span class="hljs-attr">value2</span>: <span class="hljs-literal">null</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-spinbutton-events.vue --&gt;</span></pre></div><h2 id="accessibility" class="bv-no-focus-ring"><span class="bd-content-title">Accessibility<a class="anchorjs-link" href="#accessibility" aria-labelledby="accessibility"></a></span></h2> <p>The following keyboard controls are available when the spin button is focused:</p> <ul> <li><kbd class="notranslate" translate="no">Home</kbd> Sets the value to the <code class="text-nowrap" translate="no">min</code> value</li> <li><kbd class="notranslate" translate="no">End</kbd> Sets the value to the <code class="text-nowrap" translate="no">max</code> value</li> <li><kbd class="notranslate" translate="no">ArrowUp</kbd> Increases the value by the step amount</li> <li><kbd class="notranslate" translate="no">ArrowDown</kbd> Decreases the value by the step amount</li> <li><kbd class="notranslate" translate="no">PageUp</kbd> Increases the value by the step amount times the <code class="text-nowrap" translate="no">repeat-step-multiplier</code> amount</li> <li><kbd class="notranslate" translate="no">PageDown</kbd> Decreases the value by the step amount times the <code class="text-nowrap" translate="no">repeat-step-multiplier</code> amount</li> </ul> <p>Pressing an holding the <kbd class="notranslate" translate="no">ArrowUp</kbd>, <kbd class="notranslate" translate="no">ArrowDown</kbd>, <kbd class="notranslate" translate="no">PageUp</kbd>, or <kbd class="notranslate" translate="no">PageDown</kbd> keys will auto-repeat the increment or decrement (after an initial delay). Holding down the <kbd class="notranslate" translate="no">ArrowUp</kbd> or <kbd class="notranslate" translate="no">ArrowDown</kbd> keys for an extended period will multiply the increment or decrement amount by the <code class="text-nowrap" translate="no">repeat-step-multiplier</code> amount.</p> <p>Note the the <code class="text-nowrap" translate="no">repeat-delay</code>, <code class="text-nowrap" translate="no">repeat-threshold</code> and <code class="text-nowrap" translate="no">repeat-interval</code> only applies to the <kbd class="notranslate" translate="no">ArrowUp</kbd> or <kbd class="notranslate" translate="no">ArrowDown</kbd> keys.</p> <h2 id="implementation-notes" class="bv-no-focus-ring"><span class="bd-content-title">Implementation notes<a class="anchorjs-link" href="#implementation-notes" aria-labelledby="implementation-notes"></a></span></h2> <p><code class="text-nowrap" translate="no">&lt;b-form-spinbutton&gt;</code> uses a mixture of Bootstrap v4 utility classes (border, alignment, flex), form-control and button classes, along with additional custom BootstrapVue SCSS/CSS.</p> <h2 id="see-also" class="bv-no-focus-ring"><span class="bd-content-title">See also<a class="anchorjs-link" href="#see-also" aria-labelledby="see-also"></a></span></h2> <ul> <li><a href="/docs/components/form-input#range-type-input" class="font-weight-bold">Range type input</a></li> </ul>'}}}]);