# CLAUDE.md — Project Instructions

This is a **Vite + React 19 + TypeScript + Tailwind CSS 4** project. All rules below are mandatory for every code change.

---

## Mandatory Verification

After every set of changes, run in order and fix all errors before finishing:

```bash
npm run lint
npm run build
```

Zero tolerance for broken builds or lint failures.

---

## TypeScript & Linting

- **No suppressions.** Never use `eslint-disable`, `eslint-disable-next-line`, `eslint-disable-line`, `@ts-ignore`, or `@ts-expect-error`. Always fix the underlying issue.
- **No `any`.** Use explicit interfaces, types, or `unknown` — never `any`.
- **Strict typing.** Rely on strict, explicit TypeScript interfaces and types throughout.
- **Architectural fixes.** For hook/ref linting errors (e.g., `react-hooks/refs`, `react-hooks/immutability`), refactor the code properly — do not bypass the rule.

---

## React Best Practices

- **No ref mutation during render.** Use `useCallback` or effects for ref merging.
- **Derived state.** Do not `setState` inside `useEffect` when the value can be derived during render.
- **Fast Refresh compliance.** Files exporting React components must NOT also export hooks or other entities — split files when necessary (`react-refresh/only-export-components`).

---

## UI & Styling

- **Tailwind first.** Use Tailwind CSS utility classes. No inline `style={{...}}` unless absolutely required for dynamic calculated values (e.g., coordinates).
- **Component reuse.** Always use existing shared components from `src/components/` (`<Button>`, `<Modal>`, `<Tooltip>`, etc.) — never duplicate with raw HTML.
- **Context providers.** Place at feature module roots (e.g., `src/features/auth/context.tsx`) or the app entry point — not at the top of shared libraries.
- **Premium feel.** Components must be modern, responsive, and accessible (`aria` attributes, focus states, smooth interactions).

---

## Icons & SVGs

Read and follow `SVG_SPRITE_GUIDE.md` before adding or modifying any icon. Never inject raw SVG directly into the sprite or React components.

---

## Commit Messages

- No AI agent names (Claude, Cursor, Gemini, Antigravity, Copilot, etc.) in commit messages.
- No `Co-authored-by:` lines attributing work to an AI assistant.
- Write from the perspective of a human developer describing the technical change.

---

## Tool Usage

- Prefer surgical, targeted edits over full file rewrites.
- Use the most specific safe tool available for file reads and writes.
