(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{464:function(n,t){n.exports={baseTOC:{top:"#image",title:"Image",toc:[{href:"#image-src-resolving",label:"Image src resolving"},{href:"#styling-images",label:"Styling images",toc:[{href:"#responsive-images",label:"Responsive images"},{href:"#image-thumbnails",label:"Image thumbnails"},{href:"#rounded-corners",label:"Rounded corners"},{href:"#aligning-images",label:"Aligning images"}]},{href:"#blank-or-solid-color-images",label:"Blank (or solid color) images"},{href:"#srcset-support",label:"srcset support"},{href:"#lazy-loaded-images",label:"Lazy loaded images",toc:[{href:"#usage",label:"Usage"},{href:"#force-show-of-lazy-loaded-image",label:"Force show of lazy loaded image"},{href:"#lazy-loaded-srcset-support",label:"Lazy loaded srcset support"}]}]},titleLead:'<h1 id="image" class="bv-no-focus-ring"><span class="bd-content-title">Image</span></h1> <p class="bd-lead">Documentation and examples for opting images (via <code class="text-nowrap" translate="no">&lt;b-img&gt;</code> component) into responsive behavior (so they never become larger than their parent elements), optionally adding lightweight styles to them — all via props.</p>',body:'<p>BootstrapVue&#39;s image components support rounded images, thumbnail styling, alignment, and even the ability to create blank images with an optional solid background color. Support for lazy loaded images is available via the <code class="text-nowrap" translate="no">&lt;b-img-lazy&gt;</code> complimentary component.</p> <h2 id="image-src-resolving" class="bv-no-focus-ring"><span class="bd-content-title">Image src resolving<a class="anchorjs-link" href="#image-src-resolving" aria-labelledby="image-src-resolving"></a></span></h2> <p>The <code class="text-nowrap" translate="no">src</code> prop (and <code class="text-nowrap" translate="no">blank-src</code> prop of <code class="text-nowrap" translate="no">&lt;b-img-lazy&gt;</code>), out of the box, works only with absolute or fully-qualified-domain-name URLs. If you are using project assets as image sources, please refer to <a href="/docs/reference/images" class="font-weight-bold">Component img src resolving</a> for configuring <code class="text-nowrap" translate="no">vue-loader</code> to understand custom component props that specify image sources.</p> <h2 id="styling-images" class="bv-no-focus-ring"><span class="bd-content-title">Styling images<a class="anchorjs-link" href="#styling-images" aria-labelledby="styling-images"></a></span></h2> <p>Several props are available for styling the rendered image element. The following sub-sections cover the various options.</p> <h3 id="responsive-images" class="bv-no-focus-ring"><span class="bd-content-title">Responsive images<a class="anchorjs-link" href="#responsive-images" aria-labelledby="responsive-images"></a></span></h3> <p>Images in BootstrapVue can be made responsive with the <code class="text-nowrap" translate="no">fluid</code> prop (which sets <code class="text-nowrap" translate="no">max-width: 100%; height: auto;</code> via CSS classes) so that it scales with the parent element - up to the maximum native width of the image.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/1024/400/?image=41&quot;</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Responsive image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-fluid.vue --&gt;</span></pre></div><p>To make a fluid image that will grow to fill the width of its container, use the <code class="text-nowrap" translate="no">fluid-grow</code> prop. Note this may cause blurring on small bitmap images.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Small image with <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>fluid<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/300/150/?image=41&quot;</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Fluid image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-3&quot;</span>&gt;</span>Small image with <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>fluid-grow<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/300/150/?image=41&quot;</span> <span class="hljs-attr">fluid-grow</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Fluid-grow image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-fluid-grow.vue --&gt;</span></pre></div><p>Use the <code class="text-nowrap" translate="no">block</code> prop to force the image to display as a block element rather than the browser default of inline-block element.</p> <p><strong>Note:</strong> <em>In Internet Explorer 10, SVG images with <code class="text-nowrap" translate="no">fluid</code> are disproportionately sized. To fix this, add the style <code class="text-nowrap" translate="no">width: 100% \\9;</code> where necessary. This fix improperly sizes other image formats, so Bootstrap v4 doesn&#39;t apply it automatically.</em></p> <h3 id="image-thumbnails" class="bv-no-focus-ring"><span class="bd-content-title">Image thumbnails<a class="anchorjs-link" href="#image-thumbnails" aria-labelledby="image-thumbnails"></a></span></h3> <p>You can use prop <code class="text-nowrap" translate="no">thumbnail</code> to give an image a rounded light border appearance.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-container</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-4 bg-dark&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">thumbnail</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/250/250/?image=54&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">thumbnail</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/250/250/?image=58&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">thumbnail</span> <span class="hljs-attr">fluid</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/250/250/?image=59&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-thumbnail.vue --&gt;</span></pre></div><h3 id="rounded-corners" class="bv-no-focus-ring"><span class="bd-content-title">Rounded corners<a class="anchorjs-link" href="#rounded-corners" aria-labelledby="rounded-corners"></a></span></h3> <p>You can control which corners are rounded by setting the rounded prop to one of the following values:</p> <ul> <li><code class="text-nowrap" translate="no">true</code> (or prop present with no value): round all corners</li> <li><code class="text-nowrap" translate="no">false</code> (or prop not present): no explicit rounding or corners (default)</li> <li><code class="text-nowrap" translate="no">&#39;top&#39;</code>: round the top corners</li> <li><code class="text-nowrap" translate="no">&#39;right&#39;</code>: round the right corners</li> <li><code class="text-nowrap" translate="no">&#39;bottom&#39;</code>: round the bottom corners</li> <li><code class="text-nowrap" translate="no">&#39;left&#39;</code>: round the left corners</li> <li><code class="text-nowrap" translate="no">&#39;circle&#39;</code>: make a circle (if square image) or oval (if not square) border</li> <li><code class="text-nowrap" translate="no">&#39;0&#39;</code>: explicitly turn off rounding of corners</li> </ul> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">rounded</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Rounded image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Top-rounded image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Right-rounded image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Bottom-rounded image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Left-rounded image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Circle image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">rounded</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Not rounded image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">mainProps</span>: { <span class="hljs-attr">blank</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">blankColor</span>: <span class="hljs-string">&#x27;#777&#x27;</span>, <span class="hljs-attr">width</span>: <span class="hljs-number">75</span>, <span class="hljs-attr">height</span>: <span class="hljs-number">75</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;m1&#x27;</span> }\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-rounded.vue --&gt;</span></pre></div><h3 id="aligning-images" class="bv-no-focus-ring"><span class="bd-content-title">Aligning images<a class="anchorjs-link" href="#aligning-images" aria-labelledby="aligning-images"></a></span></h3> <p>Align images with the boolean props <code class="text-nowrap" translate="no">left</code> (floats left) <code class="text-nowrap" translate="no">right</code>(floats right), and <code class="text-nowrap" translate="no">center</code> (auto left+right margins). You can also center images by placing them in a container that has the class <code class="text-nowrap" translate="no">text-center</code>.</p> <p><strong>Left an Right aligned (float):</strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;clearfix&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">left</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/125/125/?image=58&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Left image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">right</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/125/125/?image=58&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Right image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-left-right.vue --&gt;</span></pre></div><p><strong>Center aligned (block):</strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">center</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/125/125/?image=58&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Center image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-center.vue --&gt;</span></pre></div><p>Note: <code class="text-nowrap" translate="no">left</code> takes precedence over <code class="text-nowrap" translate="no">right</code> which takes precedence over <code class="text-nowrap" translate="no">center</code>.</p> <h2 id="blank-or-solid-color-images" class="bv-no-focus-ring"><span class="bd-content-title">Blank (or solid color) images<a class="anchorjs-link" href="#blank-or-solid-color-images" aria-labelledby="blank-or-solid-color-images"></a></span></h2> <p><code class="text-nowrap" translate="no">&lt;b-img&gt;</code> provides built-in support for generating blank images (transparent by default) of any width and height, by setting the <code class="text-nowrap" translate="no">blank</code> prop, and specifying <code class="text-nowrap" translate="no">width</code> and <code class="text-nowrap" translate="no">height</code> values (in pixels). You can apply any of the other <code class="text-nowrap" translate="no">&lt;b-img&gt;</code> props to change the style/behavior of the generated image.</p> <p>Use the <code class="text-nowrap" translate="no">blank-color</code> prop to set the blank image color. The <code class="text-nowrap" translate="no">blank-color</code>prop can accept any CSS color value:</p> <ul> <li>Named colors — i.e. <code class="text-nowrap" translate="no">orange</code> or <code class="text-nowrap" translate="no">blue</code></li> <li>Hex colors — i.e. <code class="text-nowrap" translate="no">#FF9E2C</code></li> <li>RGB and RGBa colors — i.e. <code class="text-nowrap" translate="no">rgb(255, 158, 44)</code> and <code class="text-nowrap" translate="no">rgba(255, 158, 44, .5)</code></li> <li>HSL and HSLa colors — i.e. <code class="text-nowrap" translate="no">hsl(32, 100%, 59%)</code> and <code class="text-nowrap" translate="no">hsla(32, 100%, 59%, .5)</code></li> </ul> <p>The default <code class="text-nowrap" translate="no">blank-color</code> is <code class="text-nowrap" translate="no">transparent</code>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Transparent image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#777&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;HEX shorthand color image (#777)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;red&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Named color image (red)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;black&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Named color image (black)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#338833&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;HEX color image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;rgba(128, 255, 255, 0.5)&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;RGBa color image&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#88f&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;HEX shorthand color (#88f)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">mainProps</span>: { <span class="hljs-attr">blank</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">width</span>: <span class="hljs-number">75</span>, <span class="hljs-attr">height</span>: <span class="hljs-number">75</span>, <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;m1&#x27;</span> }\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-blank.vue --&gt;</span></pre></div><p><strong>Notes:</strong></p> <ul> <li>In blank image mode, if only one of width or height is set, the image will be have both width and height set to the same value.</li> <li>In blank image mode, if width and height are not set, both width and height will internally be set to 1.</li> <li>The <code class="text-nowrap" translate="no">blank</code> prop takes precedence over the <code class="text-nowrap" translate="no">src</code> prop. If you set both and later set <code class="text-nowrap" translate="no">blank</code> to <code class="text-nowrap" translate="no">false</code> the image specified in <code class="text-nowrap" translate="no">src</code> will then be displayed.</li> <li>Blank images are rendered using SVG image data URLs.</li> <li>The <code class="text-nowrap" translate="no">width</code> and <code class="text-nowrap" translate="no">height</code> props will also apply the <code class="text-nowrap" translate="no">width</code> and <code class="text-nowrap" translate="no">height</code> attributes to the rendered <code class="text-nowrap" translate="no">&lt;img&gt;</code> tag, even if <code class="text-nowrap" translate="no">blank</code> is not set.</li> </ul> <h2 id="srcset-support" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">srcset</code> support<a class="anchorjs-link" href="#srcset-support" aria-labelledby="srcset-support"></a></span></h2> <p><code class="text-nowrap" translate="no">&lt;b-img&gt;</code> supports the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset" target="_blank" rel="noopener"><code class="text-nowrap" translate="no">srcset</code> and <code class="text-nowrap" translate="no">sizes</code> attributes</a> on images. The props accept either a string value, or an array of strings (the array of strings will be converted into a single string separated by commas).</p> <p>For details on usage of these attributes, refer to <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images" target="_blank" rel="noopener">MDN&#39;s Responsive Images</a> guide.</p> <p><strong>Notes:</strong></p> <ul> <li>If the <code class="text-nowrap" translate="no">blank</code> prop is set, then <code class="text-nowrap" translate="no">srcset</code> and <code class="text-nowrap" translate="no">sizes</code> props are ignored</li> <li>IE 11 does not support <code class="text-nowrap" translate="no">srcset</code> and <code class="text-nowrap" translate="no">sizes</code>, so ensure you have a value for the <code class="text-nowrap" translate="no">src</code> prop</li> <li>Vue-loader does not support project relative URLs (asset URLs) on the <code class="text-nowrap" translate="no">srcset</code> attribute. Instead use <code class="text-nowrap" translate="no">require(...)</code> to resolve the individual URL paths. Be cautious of creating a string of data URI&#39;s longer than supported by the maximum attribute value length of the browser. If your webpack config has a limit for the <code class="text-nowrap" translate="no">url-loader</code> and you want to prevent inline data-urls, you may have to overwrite the loader limits: <code class="text-nowrap" translate="no">require(&#39;!!url-loader?limit=0!./assets/photo.jpg&#39;)</code></li> <li>Support for <code class="text-nowrap" translate="no">srcset</code> and <code class="text-nowrap" translate="no">sizes</code> was added in release <code class="text-nowrap" translate="no">2.1.0</code></li> </ul> <h2 id="lazy-loaded-images" class="bv-no-focus-ring"><span class="bd-content-title">Lazy loaded images<a class="anchorjs-link" href="#lazy-loaded-images" aria-labelledby="lazy-loaded-images"></a></span></h2> <p class="bd-lead">Use our complementary <code class="text-nowrap" translate="no">&lt;b-img-lazy&gt;</code> image component (based on <code class="text-nowrap" translate="no">&lt;b-img&gt;</code>) to lazy load images as they are scrolled into view (or within <code class="text-nowrap" translate="no">offset</code> pixels of the viewport).</p> <p>Lazy loading images uses <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener"><code class="text-nowrap" translate="no">IntersectionObserver</code></a> if supported by the browser (or via a polyfill) to detect when the image should be shown. If <code class="text-nowrap" translate="no">IntersectionObserver</code> support is <em>not detected</em>, then the image will <em>always</em> be shown.</p> <h3 id="usage" class="bv-no-focus-ring"><span class="bd-content-title">Usage<a class="anchorjs-link" href="#usage" aria-labelledby="usage"></a></span></h3> <p>Set the <code class="text-nowrap" translate="no">src</code> prop to the URL of the image you want loaded lazily, and either specify a placeholder image URL via the prop <code class="text-nowrap" translate="no">blank-src</code>, or have a blank placeholder image generated for you by leaving <code class="text-nowrap" translate="no">blank-src</code> as <code class="text-nowrap" translate="no">null</code>.</p> <p>Specify the width and height of the placeholder via the <code class="text-nowrap" translate="no">blank-width</code> and <code class="text-nowrap" translate="no">blank-height</code> props. If these props are not set, then they will fall back to the <code class="text-nowrap" translate="no">width</code> and <code class="text-nowrap" translate="no">height</code> props (which are applied to the image specified via <code class="text-nowrap" translate="no">src</code>).</p> <p>Control the generated blank image color by setting the prop <code class="text-nowrap" translate="no">blank-color</code>.</p> <p>Placeholder images (either explicitly provided, or dynamically generated) should have the same width and height values, or at least the same aspect ratio, as the <code class="text-nowrap" translate="no">src</code> image.</p> <p>Feel free to use the <code class="text-nowrap" translate="no">fluid</code>, <code class="text-nowrap" translate="no">fluid-grow</code>, <code class="text-nowrap" translate="no">thumbnail</code>, and <code class="text-nowrap" translate="no">rounded</code> props of <code class="text-nowrap" translate="no">&lt;b-img&gt;</code>.</p> <p>The <code class="text-nowrap" translate="no">offset</code> prop specifies the number of pixels that an image needs to be near to the viewport to trigger it to be shown. The default value is <code class="text-nowrap" translate="no">360</code>.</p> <p>The <code class="text-nowrap" translate="no">throttle</code> prop controls how long (in ms) after a <code class="text-nowrap" translate="no">scroll</code> (or <code class="text-nowrap" translate="no">resize</code>, or <code class="text-nowrap" translate="no">orientationchange</code>, or <code class="text-nowrap" translate="no">transitionend</code>) event happens before checking if the image has come within view (or within <code class="text-nowrap" translate="no">offset</code> of view). The default is <code class="text-nowrap" translate="no">100</code> (ms). <code class="text-nowrap" translate="no">throttle</code> has no effect if IntersectionObserver support is detected.</p> <p>Once an image has come into view and is shown, the event listeners and/or Intersection Observer are removed.</p> <p><strong>Example usage:</strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;getImageUrl(80)&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;getImageUrl(82)&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;getImageUrl(84)&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;getImageUrl(85)&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 4&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;getImageUrl(88)&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 5&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;getImageUrl(90)&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 6&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;getImageUrl(92)&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 7&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-img-lazy</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;mainProps&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;getImageUrl(94)&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Image 8&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img-lazy</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">mainProps</span>: {\n          <span class="hljs-attr">center</span>: <span class="hljs-literal">true</span>,\n          <span class="hljs-attr">fluidGrow</span>: <span class="hljs-literal">true</span>,\n          <span class="hljs-attr">blank</span>: <span class="hljs-literal">true</span>,\n          <span class="hljs-attr">blankColor</span>: <span class="hljs-string">&#x27;#bbb&#x27;</span>,\n          <span class="hljs-attr">width</span>: <span class="hljs-number">600</span>,\n          <span class="hljs-attr">height</span>: <span class="hljs-number">400</span>,\n          <span class="hljs-attr">class</span>: <span class="hljs-string">&#x27;my-5&#x27;</span>\n        }\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      <span class="hljs-function"><span class="hljs-title">getImageUrl</span>(<span class="hljs-params">imageId</span>)</span> {\n        <span class="hljs-keyword">const</span> { width, height } = <span class="hljs-built_in">this</span>.mainProps\n        <span class="hljs-keyword">return</span> <span class="hljs-string">`https://picsum.photos/<span class="hljs-subst">${width}</span>/<span class="hljs-subst">${height}</span>/?image=<span class="hljs-subst">${imageId}</span>`</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-img-lazy.vue --&gt;</span></pre></div><h3 id="force-show-of-lazy-loaded-image" class="bv-no-focus-ring"><span class="bd-content-title">Force show of lazy loaded image<a class="anchorjs-link" href="#force-show-of-lazy-loaded-image" aria-labelledby="force-show-of-lazy-loaded-image"></a></span></h3> <p>To force the final image to be shown, set the <code class="text-nowrap" translate="no">show</code> prop to <code class="text-nowrap" translate="no">true</code>. The <code class="text-nowrap" translate="no">show</code> prop supports the Vue <code class="text-nowrap" translate="no">.sync</code> modifier, and will be updated to <code class="text-nowrap" translate="no">true</code> when the final image is shown.</p> <h3 id="lazy-loaded-srcset-support" class="bv-no-focus-ring"><span class="bd-content-title">Lazy loaded <code class="text-nowrap" translate="no">srcset</code> support<a class="anchorjs-link" href="#lazy-loaded-srcset-support" aria-labelledby="lazy-loaded-srcset-support"></a></span></h3> <p><code class="text-nowrap" translate="no">&lt;b-img-lazy&gt;</code> supports setting the <a href="#srcset-support" class="font-weight-bold"><code class="text-nowrap" translate="no">srcset</code> and <code class="text-nowrap" translate="no">sizes</code></a> attributes on the rendered <code class="text-nowrap" translate="no">&lt;img&gt;</code> element. These props will only be applied to the image once it has come into view.</p> <p>See <a href="#srcset-support" class="font-weight-bold"><code class="text-nowrap" translate="no">srcset</code> support</a> above for prop usage details and limitations.</p> <p>Support for <code class="text-nowrap" translate="no">srcset</code> and <code class="text-nowrap" translate="no">sizes</code> was added in release <code class="text-nowrap" translate="no">2.1.0</code>.</p>'}}}]);