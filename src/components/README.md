# Components

This directory contains the reusable, accessible UI components for the Vital project, organized using a two-tier **Atomic Design** structure.

## Architecture

- **`atoms/`**: Single-purpose, prop-driven building blocks. No complex state, no context consumption. Examples: `Button`, `Input`, `Toggle`, `Select`, `Textarea`, `Stepper`, `Autosearch`, `Tooltip`, `LazyImage`, `Card`, `ErrorBoundary`, `SvgSpriteLoader`.
- **`molecules/`**: Slightly more complex components formed by grouping atoms together (e.g., input fields with labels, search bars with filters).
- **`organisms/`**: Composed sections of the interface that manage local state, consume React Context, or handle sophisticated DOM interactions. Examples: `Modal`, `Toast`, `Dropdown`, `Tabs`, `Header`, `Footer`.

### State model

All shared state (`AuthContext`, `ToastContext`, `ModalContext`) lives in `src/contexts/` and is mounted globally in `app.tsx`. Components in this directory are stateless or use local state only — they consume contexts via hooks (`useToast`, `useModal`, etc.) but do not own them.

---

## Atoms

### Button

A fully accessible, multi-variant button with built-in loading state and SVG icon support.

**Import:** `import { Button } from 'components/atoms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger' \| 'link'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Size preset |
| `icon` | `string` | — | SVG sprite icon name to render inside the button |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Which side the icon appears on |
| `isLoading` | `boolean` | `false` | Shows a spinning loader icon and sets `aria-busy` |
| `block` | `boolean` | `false` | Expands to full container width |

- Forwards a `ref` to the underlying `<button>`.
- Defaults `type="button"` to prevent accidental form submission.
- Disables and sets `aria-disabled` automatically when `isLoading` is true.

```tsx
<Button variant="primary" icon="save" isLoading={saving} onClick={handleSave}>
  Save
</Button>
```

---

### Input

A labeled, accessible text input with error state and an optional right-side slot.

**Import:** `import { Input } from 'components/atoms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Renders a `<label>` above the input; also auto-generates `id` |
| `error` | `string` | — | Error message; switches border to red and adds `aria-invalid` |
| `fullWidth` | `boolean` | `true` | Makes the input fill its container |
| `rightElement` | `ReactNode` | — | Renders an element inside the input on the right (e.g., an icon) |

- Forwards a `ref` to the underlying `<input>`.
- Links label → input via `htmlFor`/`id`; links error → input via `aria-describedby`.

```tsx
<Input label="Email" type="email" error={errors.email} />
<Input placeholder="Search" rightElement={<SvgIcon name="search" />} />
```

---

### Textarea

Same API as `Input` but renders a `<textarea>`.

**Import:** `import { Textarea } from 'components/atoms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Renders a `<label>` above the textarea |
| `error` | `string` | — | Error message with red border and `aria-invalid` |
| `fullWidth` | `boolean` | `true` | Fill container width |

- Forwards a `ref` to the underlying `<textarea>`.

```tsx
<Textarea label="Notes" rows={4} error={errors.notes} />
```

---

### Select

A fully custom-built select with inline search, viewport-aware flip, and full keyboard navigation. Accepts native `<option>` children for form compatibility.

**Import:** `import { Select } from 'components/atoms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Renders a `<label>` above the select |
| `error` | `string` | — | Error message |
| `fullWidth` | `boolean` | `true` | Fill container width |
| `value` | `string` | — | Controlled value |
| `onChange` | `(e: ChangeEvent<HTMLSelectElement>) => void` | — | Change handler (fires a synthetic event matching native API) |

- A hidden native `<select>` is kept in the DOM for form submission and ref forwarding.
- The visible custom dropdown flips upward when insufficient space exists below.
- Keyboard: `Enter`/`Space`/`ArrowDown` to open, `ArrowUp`/`ArrowDown` to navigate, `Enter` to select, `Escape` to close.

```tsx
<Select label="Country" value={country} onChange={e => setCountry(e.target.value)}>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</Select>
```

---

### Toggle

An accessible checkbox-based toggle switch with optional label and description.

**Import:** `import { Toggle } from 'components/atoms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Text label beside the toggle |
| `description` | `string` | — | Secondary description line below the label |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Toggle size |
| `containerClassName` | `string` | `''` | Class applied to the outer wrapper |

- Forwards a `ref` to the underlying `<input type="checkbox">`.
- Implemented purely with CSS peer selectors — no JavaScript state for the checked state.

```tsx
<Toggle label="Enable notifications" description="Receive email alerts" defaultChecked />
```

---

### Stepper

An integer increment/decrement control with min/max bounds. Supports controlled and uncontrolled modes.

**Import:** `import { Stepper } from 'components/atoms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | Controlled value |
| `defaultValue` | `number` | `0` | Uncontrolled initial value |
| `onChange` | `(value: number) => void` | — | Called on each increment/decrement |
| `min` | `number` | `0` | Minimum allowed value |
| `max` | `number` | `999` | Maximum allowed value |
| `disabled` | `boolean` | `false` | Disables both buttons |

```tsx
<Stepper value={qty} onChange={setQty} min={1} max={10} />
```

---

### Autosearch

A combobox-style search input with a filterable options list rendered via React Portal. Supports controlled and uncontrolled modes.

**Import:** `import { Autosearch } from 'components/atoms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `AutosearchOption[]` | required | `{ value: string; label: string }[]` |
| `label` | `string` | — | Renders a `<label>` above the input |
| `error` | `string` | — | Error message |
| `fullWidth` | `boolean` | `true` | Fill container width |
| `value` | `string` | — | Controlled input text value |
| `onChange` | `(value: string) => void` | — | Called on every keystroke |
| `onSelectOption` | `(option: AutosearchOption) => void` | — | Called when the user selects an item from the list |
| `placeholder` | `string` | `'Search...'` | Input placeholder |

- The dropdown portal targets the nearest `<dialog>` ancestor if one exists, otherwise `document.body`.
- Updates its fixed position on scroll and window resize.
- Keyboard: `ArrowUp`/`ArrowDown` to navigate, `Enter` to select, `Escape` to close. Auto-selects when only one filtered option remains.
- A clear (`✕`) button appears inside the input when a value is present.

```tsx
<Autosearch
  label="Assign to"
  options={users}
  value={assignee}
  onChange={setAssignee}
  onSelectOption={opt => setAssigneeId(opt.value)}
/>
```

---

### Tooltip

A zero-dependency tooltip rendered via React Portal into `document.body`. Avoids clipping from `overflow: hidden` ancestors.

**Import:** `import { Tooltip } from 'components/atoms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `ReactNode` | required | Tooltip content |
| `children` | `ReactElement` | required | A single React element that serves as the trigger |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Preferred placement |
| `delay` | `number` | `200` | Hover delay in ms before the tooltip appears |
| `className` | `string` | `''` | Additional classes for the tooltip bubble |

- Attaches `aria-describedby="tooltip-content"` to the trigger while visible.
- Recalculates position on scroll and window resize.
- Merges its own `ref` with any existing `ref` on the trigger child.

```tsx
<Tooltip content="Delete this item" position="bottom">
  <Button variant="ghost" icon="trash" />
</Tooltip>
```

---

### Card

A composable card layout built from four sub-components.

**Import:** `import { Card, CardHeader, CardTitle, CardContent, CardFooter } from 'components/atoms'`

All sub-components forward a `ref`, accept `className` for overrides, and pass through all native `<div>` / `<h3>` props.

| Component | Element | Notes |
|---|---|---|
| `Card` | `<div>` | Outer wrapper: rounded, shadowed, bordered |
| `CardHeader` | `<div>` | Top section with light gray background |
| `CardTitle` | `<h3>` | Semibold heading inside the header |
| `CardContent` | `<div>` | Scrollable main area with padding |
| `CardFooter` | `<div>` | Bottom strip with light gray background |

```tsx
<Card>
  <CardHeader>
    <CardTitle>Usage Summary</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Details here...</p>
  </CardContent>
  <CardFooter>
    <Button>Export</Button>
  </CardFooter>
</Card>
```

---

### LazyImage

An image that defers loading until it enters the viewport (via `IntersectionObserver`) and fades in on load.

**Import:** `import { LazyImage } from 'components/atoms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | required | Image URL |
| `alt` | `string` | required | Alt text |
| `className` | `string` | `''` | Applied to the outer container |
| `width` | `number` | — | Container width in px |
| `height` | `number` | — | Container height in px |
| `style` | `CSSProperties` | — | Inline styles for dynamic sizing |

- Shows a gray skeleton placeholder with a `default-image` SVG icon until the image loads.
- Uses `loading="lazy"` and `decoding="async"` on the underlying `<img>`.

```tsx
<LazyImage src={product.imageUrl} alt={product.name} width={400} height={300} />
```

---

### BackButton

A navigation button that calls `navigate(-1)` or navigates to a fixed route.

**Import:** `import { BackButton } from 'components/atoms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `to` | `string` | — | If provided, navigates to this path instead of the browser history |
| `label` | `string` | `'Back'` | Button label text |
| `variant` | `ButtonVariant` | `'link'` | Passed through to `Button` |

Accepts all `ButtonProps` except `onClick` (which is managed internally).

```tsx
<BackButton />
<BackButton to="/dashboard" label="Return to Dashboard" />
```

---

### SvgIcon

Renders a single icon from the loaded SVG sprite sheet using `<use href="#name">`.

**Import:** `import { SvgIcon } from 'components/atoms/svg-sprite-loader'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | required | The icon `id` in the sprite file |
| `width` | `string \| number` | `'24'` | SVG width |
| `height` | `string \| number` | `'24'` | SVG height |
| `fill` | `string` | `'currentColor'` | Fill color |
| `stroke` | `string` | — | Stroke color |
| `strokeWidth` | `string` | — | Stroke width |
| `aria-label` | `string` | — | Accessible label (for standalone decorative icons) |
| `aria-hidden` | `boolean` | `false` | Set `true` when icon is purely decorative |
| `onClick` | `() => void` | — | Makes the SVG interactive (`role="button"`, `tabIndex=0`) |

- Shows an animated pulse skeleton while the sprite is loading.
- Shows an error placeholder (`?`) in dev if the sprite fails to load.

```tsx
<SvgIcon name="check-circle" width="20" height="20" aria-hidden />
<SvgIcon name="trash" aria-label="Delete item" onClick={handleDelete} />
```

---

### ErrorBoundary

Two pre-configured boundary variants for different failure scopes.

**Import:** `import { ErrorBoundary, AppErrorFallback, PageErrorFallback } from 'components/atoms/error-boundary'`

| Variant | Scope | Usage |
|---|---|---|
| `AppErrorFallback` | Outermost — catastrophic failures | Wrap the entire app tree |
| `PageErrorFallback` | Per-route — isolates page crashes | Wrap each `<Route>` subtree |

```tsx
<ErrorBoundary fallbackRender={PageErrorFallback}>
  <SomePage />
</ErrorBoundary>
```

---

## Organisms

### Toast

A self-dismissing notification system. Controlled entirely through `useToast()` — do not render `<Toast>` directly.

**Import:** `import { useToast } from 'hooks/useToast'`

```tsx
const { showToast } = useToast();

showToast({
  variant: 'success',   // 'success' | 'error' | 'warning' | 'info'
  title: 'Saved',       // optional
  message: 'Your changes have been saved.',
  duration: 3000,       // ms before auto-dismiss; default 3000
});
```

- `role="alert"` for `error`/`warning`, `role="status"` for `success`/`info`.
- Slides and fades out with a 300 ms exit animation before removal.
- `ToastContainer` is mounted once in `app.tsx` — never add it to individual pages.

---

### Modal

A dialog component built on the native `<dialog>` element. Controlled entirely through `useModal()`.

**Import:** `import { useModal } from 'hooks/useModal'`

```tsx
const { showModal, hideModal } = useModal();

showModal({
  title: 'Confirm Delete',            // optional
  content: <p>Are you sure?</p>,      // required — any ReactNode
  actions: (                          // optional footer
    <>
      <Button variant="ghost" onClick={hideModal}>Cancel</Button>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </>
  ),
  size: 'md',                         // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  hideCloseButton: false,             // optional
});
```

- Native `<dialog>` provides free focus trapping and Escape key handling.
- Backdrop click closes the dialog (polyfilled for browsers without `closedby="any"`).
- `ModalContainer` is mounted once in `app.tsx` — never add it to individual pages.

---

### Dropdown

A context menu that opens relative to any trigger element. Rendered via React Portal to avoid clipping.

**Import:** `import { Dropdown } from 'components/organisms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `DropdownItem[]` | required | Menu items |
| `children` | `ReactElement` | required | The trigger element |
| `align` | `'left' \| 'right'` | `'left'` | Horizontal alignment of the menu |
| `fullWidth` | `boolean` | `false` | Menu matches trigger width |
| `className` | `string` | `''` | Additional classes on the menu panel |

`DropdownItem`:

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique key |
| `label` | `ReactNode` | Item text/content |
| `onClick` | `() => void` | Action handler |
| `danger` | `boolean` | Renders red destructive style |
| `icon` | `string` | Optional SVG sprite icon name |

- Flips upward automatically when insufficient space below.
- Keyboard: `Enter`/`Space`/`ArrowDown` on trigger to open; `ArrowUp`/`ArrowDown` to navigate items; `Escape` to close and return focus to trigger.

```tsx
<Dropdown
  align="right"
  items={[
    { id: 'edit', label: 'Edit', icon: 'pencil', onClick: handleEdit },
    { id: 'delete', label: 'Delete', icon: 'trash', danger: true, onClick: handleDelete },
  ]}
>
  <Button variant="ghost" icon="dots-vertical" size="icon" />
</Dropdown>
```

---

### Tabs

An accessible tab container with full keyboard navigation and ARIA roles.

**Import:** `import { Tabs } from 'components/organisms'`

| Prop | Type | Default | Description |
|---|---|---|---|
| `tabs` | `TabItem[]` | required | Tab definitions |
| `defaultActiveId` | `string` | first tab | Initially active tab id |
| `onChange` | `(id: string) => void` | — | Called when the active tab changes |
| `className` | `string` | `''` | Applied to the outer wrapper |

`TabItem`:

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier |
| `label` | `ReactNode` | Tab button content |
| `content` | `ReactNode` | Panel content |

- Implements `role="tablist"`, `role="tab"`, `role="tabpanel"` with `aria-selected` and `aria-controls`.
- Keyboard: `ArrowLeft`/`ArrowRight` to cycle tabs; `Home`/`End` to jump to first/last.
- Inactive panels use `hidden` (not unmounted) to preserve internal state.

```tsx
<Tabs
  defaultActiveId="details"
  onChange={id => console.log('active:', id)}
  tabs={[
    { id: 'details', label: 'Details', content: <DetailsPanel /> },
    { id: 'history', label: 'History', content: <HistoryPanel /> },
  ]}
/>
```

---

## Guidelines for New Components

1. **Zero dependencies.** Rely on native CSS, HTML5, and React features. Do not install a library for something achievable with browser APIs.
2. **WCAG compliance by default.** Every component requires correct ARIA roles, keyboard operability, and `focus-visible` focus rings.
3. **Escape `overflow` with portals.** Overlays (tooltips, dropdowns, modals, popovers) must use `createPortal(..., document.body)` to avoid clipping.
4. **Tailwind only.** Use utility classes. No inline `style={{}}` unless the value is dynamically calculated (e.g., pixel coordinates from `getBoundingClientRect()`).
5. **No context ownership here.** Components may consume contexts via hooks, but context providers belong in `src/contexts/` or a future `src/features/<name>/` directory — not inside `src/components/`.
6. **Follow SVG_SPRITE_GUIDE.md** for any icon work. Never inject raw SVG directly.
