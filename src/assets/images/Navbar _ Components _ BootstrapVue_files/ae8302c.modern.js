(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{470:function(n,l){n.exports={baseTOC:{top:"#media",title:"Media",toc:[{href:"#usage",label:"Usage"},{href:"#no-body-with-sub-components",label:"No body (with sub-components)"},{href:"#order",label:"Order"},{href:"#nesting",label:"Nesting"},{href:"#vertical-align",label:"Vertical align"},{href:"#media-list",label:"Media list"}]},titleLead:'<h1 id="media" class="bv-no-focus-ring"><span class="bd-content-title">Media</span></h1> <p class="bd-lead">The media object helps build complex and repetitive components where some media is positioned alongside content that doesn&#39;t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.</p>',body:'<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">aside</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#ccc&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;64&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-0&quot;</span>&gt;</span>Media Title<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque\n        penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">aside</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#ccc&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;64&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-0&quot;</span>&gt;</span>Nested Media<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>\n          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in\n          faucibus.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-media.vue --&gt;</span></pre></div><h2 id="usage" class="bv-no-focus-ring"><span class="bd-content-title">Usage<a class="anchorjs-link" href="#usage" aria-labelledby="usage"></a></span></h2> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">aside</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;...&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;Media Aside&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Media Body<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Some text<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-comment">&lt;!-- b-[Optional: add media children here for nesting] --&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><h2 id="no-body-with-sub-components" class="bv-no-focus-ring"><span class="bd-content-title">No body (with sub-components)<a class="anchorjs-link" href="#no-body-with-sub-components" aria-labelledby="no-body-with-sub-components"></a></span></h2> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span> <span class="hljs-attr">no-body</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-media-aside</span> <span class="hljs-attr">vertical-align</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#ccc&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;64&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;128&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-media-aside</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-media-body</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-0&quot;</span>&gt;</span>Media Title<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\n          sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce\n          condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>\n          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis\n          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">aside</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#ccc&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;64&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-0&quot;</span>&gt;</span>Nested Media<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in\n          faucibus.\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-media-body</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-media-no-body.vue --&gt;</span></pre></div><h2 id="order" class="bv-no-focus-ring"><span class="bd-content-title">Order<a class="anchorjs-link" href="#order" aria-labelledby="order"></a></span></h2> <p>Change the order of content in media objects by adding <code class="text-nowrap" translate="no">right-align</code> property.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span> <span class="hljs-attr">right-align</span> <span class="hljs-attr">vertical-align</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">aside</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#ccc&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;80&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-0 mb-1&quot;</span>&gt;</span>Media object<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n      Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac\n      nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-media-order.vue --&gt;</span></pre></div><h2 id="nesting" class="bv-no-focus-ring"><span class="bd-content-title">Nesting<a class="anchorjs-link" href="#nesting" aria-labelledby="nesting"></a></span></h2> <p>You can easily nest media objects by including another <code class="text-nowrap" translate="no">&lt;b-media&gt;</code> inside parent&#39;s body.</p> <h2 id="vertical-align" class="bv-no-focus-ring"><span class="bd-content-title">Vertical align<a class="anchorjs-link" href="#vertical-align" aria-labelledby="vertical-align"></a></span></h2> <p>Aside can be vertically aligned using <code class="text-nowrap" translate="no">vertical-align</code> prop, set to <code class="text-nowrap" translate="no">top</code>, <code class="text-nowrap" translate="no">center</code> or <code class="text-nowrap" translate="no">end</code>. The default alignment is <code class="text-nowrap" translate="no">top</code>.</p> <h2 id="media-list" class="bv-no-focus-ring"><span class="bd-content-title">Media list<a class="anchorjs-link" href="#media-list" aria-labelledby="media-list"></a></span></h2> <p>Because the media object has few structural requirements, you can use this component as a list item in HTML lists. On your <code class="text-nowrap" translate="no">&lt;ul&gt;</code> or <code class="text-nowrap" translate="no">&lt;ol&gt;</code>, add the class <code class="text-nowrap" translate="no">list-unstyled</code> to remove any browser default list styles, and then use the <code class="text-nowrap" translate="no">&lt;b-media&gt;</code> component with <code class="text-nowrap" translate="no">tag</code> prop set to <code class="text-nowrap" translate="no">li</code>. As always, use spacing utilities wherever needed to fine tune.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-unstyled&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;li&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">aside</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#abc&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;64&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-0 mb-1&quot;</span>&gt;</span>List-based media object<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;li&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-4&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">aside</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#cba&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;64&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-0 mb-1&quot;</span>&gt;</span>List-based media object<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-media</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;li&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">aside</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">blank</span> <span class="hljs-attr">blank-color</span>=<span class="hljs-string">&quot;#bac&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;64&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-0 mb-1&quot;</span>&gt;</span>List-based media object<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-media</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-media-list.vue --&gt;</span></pre></div>'}}}]);