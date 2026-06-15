
--- Guide for interest-triggered-tooltips ---
# Show a tooltip when hovering

Users expect to see additional related information without completely changing their context. Showing a tooltip when a user is interested in more information can be useful to provide definitions for a term, clarifying the action an icon-only button will take, or provide additional form field guidance.

## Creating the tooltip

You can create a popover with the required behavior by adding the `popover="hint"` attribute to a `<div>` or other semantically appropriate element. When the user opens the tooltip, this hides other `popover="hint"` tooltips, but doesn't hide `auto` or `manual` tooltips. It also handles dismissing nested tooltips.

It also provides light dismiss behavior, so when a user clicks or otherwise focuses outside of the popover, the popover is dismissed.

The tooltip element must have an `id` attribute with a unique value:

```html
<!-- MANDATORY: The tooltip container `<div>` must have a `popover` attribute.
     the value of `"hint"` ensures it can be "light dismissed". -->
<div popover="hint" id="tooltip">Tooltip content</div>
```

A user expresses interest in the additional information by hovering or focusing on an `<a>` or `<button>` element. The element must have an `interestfor` attribute that matches the `id` attribute of the tooltip.

```html
<!-- The `interestfor` attribute can be applied to a `<button>` element: -->
<button interestfor="tooltip">Tooltip trigger</button>

<!-- The `interestfor` attribute can also be applied to an `<a>` element: -->
<a interestfor="tooltip" href="">Tooltip trigger</a>
```

The trigger must have a visual indicator to indicate that there is additional information available by interacting with the trigger.

### Accessibility built in to `interestfor`

`interestfor` handles the assistive-technology wiring for you, so you generally do not need to add ARIA attributes manually:

- A target with `popover="hint"` gains an implicit minimum role of `tooltip`. **DO NOT** set `role="tooltip"` yourself.
- The browser implicitly associates the source element with the target via `aria-describedby` when the target is plaintext, or via `aria-details` when the target contains interactive content. **DO NOT** add `aria-describedby` or `aria-details` to the trigger.
- Because the association switches to `aria-details` when needed, the target IS allowed to contain interactive content (e.g. a link inside an "interest card").

### Accessibility Constraints (WCAG 1.4.13)

Even with `interestfor` handling the semantics above, your implementation MUST still satisfy WCAG 1.4.13 (Content on Hover or Focus):
- **Dismissible:** Users must be able to dismiss the tooltip without moving pointer hover or keyboard focus (e.g., by pressing the `Escape` key). The native `popover` attribute manages this binding automatically.
- **Hoverable:** The pointer must be able to move over the tooltip content itself without the tooltip disappearing. This allows users with magnification tools to read the tooltip text safely.
- **Persistent:** The tooltip must remain visible until the hover or focus trigger is removed, the user explicitly dismisses it, or its content is no longer valid.

### Positioning the tooltip

The tooltip can be positioned using anchor positioning. When the tooltip is opened using `interestfor`, the trigger becomes an implicit anchor for the tooltip, meaning you don't have to add `anchor-name` or `position-anchor` CSS properties. However, to support browsers without anchor positioning you must use the anchor positioning polyfill, which has several limitations for popovers. **MANDATORY:** Implicit anchors are NOT supported by the polyfill, so YOU MUST explicitly set an `anchor-name` on the trigger and `position-anchor` on the popover.


```css
/* MANDATORY: use explicit anchor names for compatibility with the polyfill */
button[interestfor="tooltip-dom"] {
  anchor-name: --tooltip-dom;
}
#tooltip-dom {
  position-anchor: --tooltip-dom;
}
```

Also, the polyfill does not support `position-area` on popovers, so **MANDATORY:** DO position using `anchor()` functions, and **YOU MUST** include a `position-try` fallback (e.g. `flip-block` or `flip-inline`).

```css
[popover]{
  /* MANDATORY: use anchor functions and a position-try fallback for the polyfill */
  top: anchor(bottom);
  left: anchor(center);
  position-try: flip-block;
  margin: unset;
}
```


### Fallback strategies

Interest invokers has limited availability.
Supported by: Chrome 142 (Oct 2025) and Edge 142 (Oct 2025).
Unsupported in: Firefox and Safari.

Interest invokers must be conditionally polyfilled using the `interestfor` polyfill package from NPM. Do prefer bundling the polyfill over using the CDN.

```html
<script type="module">
  if(!HTMLButtonElement.prototype.hasOwnProperty("interestForElement")){
    // CDN link only used for example, prefer bundling.
    await import("https://unpkg.com/interestfor@latest");
  }
</script>
```

Baseline status for Popover: Newly available. It's been Baseline since 2025-01-27.
Supported by: Chrome 116 (Aug 2023), Edge 116 (Aug 2023), Firefox 125 (Apr 2024), Safari 17 (Sep 2023), and Safari iOS 18.3 (Jan 2025).
popover="hint" has limited availability.
Supported by: Chrome 133 (Feb 2025), Edge 133 (Feb 2025), and Firefox 149 (Mar 2026).
Unsupported in: Safari.

Popover and popover hint must conditionally be polyfilled with the `@oddbird/popover-polyfill` polyfill. The hint behavior will not be polyfilled in browsers that support `popover` but not `popover="hint"`. For those browsers, a tooltip opened via focus may stay open when a second tooltip opened via hover.

```html
<script type="module">
  if(!HTMLElement.prototype.hasOwnProperty("popover")){
    await import("https://unpkg.com/@oddbird/popover-polyfill@latest");
  }
</script>
```

Anchor positioning is not natively supported by any major browser yet.

**MANDATORY:** To support browsers without anchor positioning, you MUST use the `@oddbird/css-anchor-positioning` polyfill. It does not support implicit anchors, so you MUST add anchor names to the trigger. Additionally, `position-area` is not supported on popovers by the polyfill, so you MUST use `anchor()` on the desired insets. 

```html
<!-- MANDATORY: Conditionally install the anchor positioning polyfill -->
<script type="module">
  if (!("anchorName" in document.documentElement.style)) {
    await import("https://unpkg.com/@oddbird/css-anchor-positioning");
  }
</script>
```

```css
button[interestfor="tooltip-attrs"] {
  /* MANDATORY: Each trigger and popover pair must have a unique anchor name, referenced by `anchor-name` on the trigger and `position-anchor` on the popover. */
  anchor-name: --tooltip-attrs;
}
#tooltip-attrs {
  position-anchor: --tooltip-attrs;
  /* If using the anchor positioning polyfill with a popover, DO use `anchor()` functions, and not `position-area. */
  top: anchor(bottom);
  left: anchor(right);
  margin: unset;
}
```

--- Guide for position-aware-tooltips ---
When building tooltips or popovers with CSS Anchor Positioning, the browser can automatically "flip" the element to a fallback position if it would otherwise overflow the viewport. When this happens, you may want to adjust the style of the positioned content, for instance to reposition an arrow that points from the positioned content to the anchor.

**Anchored Container Queries** solve this by allowing you to query the active positioning state of an element and apply styles accordingly.

## The problem

Imagine a tooltip that appears above its anchor by default. It has a "down" arrow at the bottom. If the user scrolls and the tooltip flips to appear *below* the anchor, the arrow is now pointing the wrong way and is on the wrong side of the tooltip.

## The solution: Anchored Container Queries

By setting `container-type: anchored` on your positioned element, you turn it into a query container that knows about its own anchor-positioned state. You can then use the `@container anchored()` query to update its descendants or pseudo-elements.

### 1. Create the tooltip and trigger

Use the Popover API to create a tooltip. This creates an implicit anchor connection that can be used for positioning.

```html
<button popovertarget="tooltip" id="anchor" aria-describedby="tooltip">anchor</button>
<div id="tooltip" popover role="tooltip"></div>
```

Reset the popover inset and margin styles for use with anchor positioning, but only if anchor positioning is supported.

```css
@supports (anchor-name: --my-anchor) {
  [popover] {
    inset: auto;
    margin: unset;
  }
}
```

### 2. Set up the container

Apply `container-type: anchored` to the element being positioned. This element must also have `position-try-fallbacks` defined to enable the flipping behavior.

```css
#tooltip {
  position: fixed;
  position-area: block-start;
  position-try-fallbacks: flip-block;

  /* Enable anchored container queries */
  container-type: anchored;
}
```

### 3. Style based on the fallback

Use `@container anchored(fallback: <value>)` to apply styles when a specific fallback is active.

Like all container queries, `@container` can only style **descendants** of the container. A common strategy to create the arrows is with the `::before` and `::after` pseudo-elements, which are treated as descendants and can be styled directly. However, to style the tooltip itself (as seen in step 4), we will add a child element to the tooltip, and create the arrow in its `::before` pseudo-element.

```html
<div id="tooltip" popover role="tooltip">
  <div class="tooltip-content">Tooltip</div>
</div>
```

```css
.tooltip-content::before {
  /* Default "down" arrow for the 'top' position */
  content: "▼";
  position: absolute;
  inset-block-end: 0;
  inset-inline-start: 1rem;
}

/* Update to an "up" arrow when the 'flip-block' fallback (bottom) is active */
@container anchored(fallback: flip-block) {
  .tooltip-content::before {
    content: "▲";
    inset-block-start: 0;
    inset-block-end: auto;
  }
}
```

## 4. Styling the container itself

If you need to change properties on the container itself (like `margin` or `background-color`) when it flips, you should use an **inner wrapper element**.

1. Apply `container-type: anchored` to the outer positioned element.
2. Target the inner element inside the `@container` block.


```css
@container anchored(fallback: flip-block) {
  .tooltip-content {
    border-radius: 0 0 .5rem .5rem;
    margin-block-start: 0.25rem;
  }
}
```

## Best practices

- **Prefer logical fallbacks**: Use keywords like `flip-block` and `flip-inline` in `position-try-fallbacks` for simpler queries that handle RTL and different writing modes automatically.
- **Use pseudo-elements for arrows**: Tooltip arrows are purely decorative and are perfect candidates for `::before` or `::after`, which can be styled via anchored container queries without extra DOM.


## Fallback strategies

Anchor position container queries has limited availability.
Supported by: Chrome 143 (Dec 2025) and Edge 143 (Dec 2025).
Unsupported in: Firefox and Safari.

Positioning the arrow based on the applied fallback is a progressive enhancement, and there is not another way of reacting to the fallback position. To hide the arrow in browsers that don't support anchor position container queries, test for CSS support with `@supports (container-type: anchored)`.

```css
@supports (container-type: anchored) {
  .tooltip-content::before {
    content: "▼";
  }
}
```

### Polyfilling the Popover Attribute

Baseline status for Popover: Newly available. It's been Baseline since 2025-01-27.
Supported by: Chrome 116 (Aug 2023), Edge 116 (Aug 2023), Firefox 125 (Apr 2024), Safari 17 (Sep 2023), and Safari iOS 18.3 (Jan 2025).

To support the `popover` attribute in older browsers, use the `@oddbird/popover-polyfill`.

MANDATORY: Feature detect popover support by checking for the `popover` property on the `HTMLElement` prototype. Conditionally initialize the polyfill only if native support is missing.

**Option 1: Using a package manager**
Install the package (`npm install @oddbird/popover-polyfill`).

```javascript
// MANDATORY: Feature detect 'popover' on HTMLElement.prototype.
if (!('popover' in HTMLElement.prototype)) {
  import('@oddbird/popover-polyfill/fn').then(({ apply }) => {
    apply();
  });
}
```

**Option 2: Manual installation without npm**
If you are not using a package manager, dynamically import the polyfill directly from a CDN (such as unpkg) inside a `<script type="module">`.

```html
<script type="module">
  // MANDATORY: Feature detect 'popover' on HTMLElement.prototype.
  // Conditionally load the popover-polyfill from a CDN only in browsers lacking native support.
  if (!('popover' in HTMLElement.prototype)) {
    import('https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover-fn.js').then(({ apply }) => {
      apply();
    });
  }
</script>
```

Browsers without support for the Popover API also do not support anchor positioning, so the tooltip will appear in the center of the screen.
