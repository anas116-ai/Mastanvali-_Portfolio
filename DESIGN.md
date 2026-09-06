# Design System: Impeccable (Neo Kinpaku)

## Colors

### Ground
- **Lacquer Black**: `oklch(7% 0.006 95)` — page ground
- **Lacquer Deep**: `oklch(4% 0.004 95)` — deepest inset
- **Raised Lacquer**: `oklch(11% 0.006 95)` — panels/cards
- **Graphite**: `oklch(15% 0.008 95)` — inputs/inactive

### Gold System
- **Kinpaku Gold**: `oklch(84% 0.19 80.46)` — primary accent
- **Kinpaku Rich**: `oklch(77% 0.13 82)` — active CTA
- **Kinpaku Pale**: `oklch(86% 0.07 84)` — hover lift

### Text
- **Champagne**: `oklch(91% 0 0)` — headlines
- **Body**: `oklch(88% 0 0)` — body copy
- **Muted**: `oklch(72% 0 0)` — captions

### Secondary
- **Verdigris Patina**: `oklch(70% 0.12 188)` — secondary accent
- **Patina Pale**: `oklch(82% 0.07 188)` — hover on patina

### Implementation tokens (hex)
The codebase consolidates to exactly **two** accent colors. No other accent hexes are permitted.
- **Gold (primary)**: `#F47A18` — all warm accents (amber, orange, yellow, bronze) resolve here
- **Teal / Patina (secondary)**: `#14B8A6` — all cool accents (cyan, blue, purple, green, sky) resolve here


## Typography

- **Display**: Alumni Sans, weight 100
- **Headline**: Alumni Sans, weight 300
- **Body**: Albert Sans, weight 400
- **Mono**: SFMono-Regular, Roboto Mono

## Rules

1. **Gold carries brand** — use gold as primary accent
2. **Patina has meaning** — marks improvement/state
3. **Hairline first** — use 1px borders before shadow
4. **No glass** — no decorative blur/glassmorphism
5. **Texture needs contrast** — text never sits on high-contrast texture
