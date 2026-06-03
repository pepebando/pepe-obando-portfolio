---
name: Luminous Nexus
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#d1bcff'
  on-secondary: '#3c0090'
  secondary-container: '#7000ff'
  on-secondary-container: '#ddcdff'
  tertiary: '#f7f6ff'
  on-tertiary: '#2c303a'
  tertiary-container: '#d7dae8'
  on-tertiary-container: '#5c5f6b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d1bcff'
  on-secondary-fixed: '#23005b'
  on-secondary-fixed-variant: '#5700c9'
  tertiary-fixed: '#dfe2ef'
  tertiary-fixed-dim: '#c3c6d3'
  on-tertiary-fixed: '#181b25'
  on-tertiary-fixed-variant: '#434751'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1440px
---

## Brand & Style

This design system is engineered for the next generation of spatial computing and immersive virtual reality portfolios. The brand personality is **hyper-technical, avant-garde, and ethereal**. It treats the screen not as a flat surface, but as a window into a deep-space digital environment.

The visual style is a sophisticated blend of **Glassmorphism** and **High-Tech Futurism**. It utilizes high-transparency layers, backdrop blurs, and luminous accents to simulate a heads-up display (HUD) floating in a three-dimensional void. The aesthetic goal is to evoke a sense of precision, limitless scale, and digital craftsmanship, making the user feel like an architect of the metaverse.

## Colors

The palette is rooted in the "Deep Space" aesthetic. The foundational canvas is a rich, near-black blue that provides the necessary contrast for radiant elements.

- **Primary (Neon Cyan):** Used for interactive states, primary actions, and "active" data streams. It represents the "light" within the digital void.
- **Secondary (Electric Purple):** Used for accentuating depth, secondary highlights, and brand-heavy gradients.
- **Neutral (Slate):** Desaturated tones used for secondary text and structural borders to prevent visual fatigue.

Functional colors (Success, Warning, Error) should be infused with high-vibrancy neon variants of green, amber, and magenta to maintain the futuristic chromatic intensity.

## Typography

The typography strategy focuses on a "Technical-Humanist" balance. 

**Sora** is utilized for headlines to provide a geometric, wide-stanced futuristic feel. Its circularity mimics lens flares and UI apertures. **Geist** serves as the primary body face, offering a clean, minimal, and highly legible experience for long-form technical descriptions. For metadata, code snippets, and UI coordinates, **JetBrains Mono** is used to reinforce the "built environment" of the portfolio.

Apply a subtle text-shadow to headlines using the Primary color at 20% opacity to simulate a light-emission effect common in VR interfaces.

## Layout & Spacing

The layout follows a **Fluid Grid** model with expansive margins to create a "centered focus" effect, mimicking a VR headset's field of view. 

A 12-column grid is standard for desktop, but elements frequently break the grid or use asymmetric positioning to avoid a "flat website" feel. Spacing is strictly based on an 8px scale to maintain mathematical precision. Components should utilize large internal padding to enhance the feeling of "breathable" glass surfaces. 

On mobile devices, margins are tightened, and complex horizontal HUD elements should reflow into vertical "stacks" with increased depth layering to preserve the immersive quality.

## Elevation & Depth

Depth in this design system is achieved through **Optical Layering** rather than traditional drop shadows.

1.  **Glassmorphism:** Use `backdrop-filter: blur(20px)` and semi-transparent backgrounds (e.g., `rgba(10, 14, 23, 0.6)`).
2.  **Luminous Outlines:** Instead of shadows, use 1px solid borders with a 10-20% opacity of the Primary or Secondary colors. For high-priority elements, add a soft `box-shadow: 0 0 15px rgba(0, 242, 255, 0.3)` to simulate a glow hitting the "glass."
3.  **Z-Axis Stacking:** Higher elevation elements should have higher background transparency and more intense "inner glow" border-strokes to appear closer to the user.

## Shapes

The shape language is defined by **Soft Precision**. We avoid 0px sharp corners to prevent the UI from feeling aggressive, opting instead for a subtle `0.25rem` (4px) base radius. This mimics the machined edges of high-end hardware.

- **Standard Elements:** 4px radius.
- **Floating Containers:** `rounded-lg` (8px) for larger surface areas.
- **Interactive Accents:** Small elements like status indicators or "tags" may use 2px radii for a sharper, more data-heavy appearance.
- **Clip Paths:** Use diagonal 45-degree corner cuts on decorative elements to reinforce the "sci-fi" aesthetic.

## Components

### Buttons
Primary buttons should be semi-transparent with a 1px Primary color border. On hover, the button should fill with a gradient from Primary to Secondary and gain a soft external glow. Use **JetBrains Mono** for button labels to emphasize the technical nature.

### Cards & Project Tiles
Cards act as the primary "glass containers." They must feature a subtle gradient stroke (Cyan to Purple) and a high backdrop blur. Imagery inside cards should use a "scanline" overlay or a slight desaturation that brightens on hover.

### Inputs
Input fields are "Ghost" style—transparent backgrounds with a 1px bottom border. Upon focus, the border should expand into a full-box glow, and the label should shift to the `label-caps` typography style in the Primary color.

### Navigation (HUD)
The navigation should be treated as a persistent "Head-Up Display." It is often fixed to the top or bottom of the viewport, using a heavily blurred glass background and thin-line icons.

### Icons
Icons must be thin-stroke (1px to 1.5px), geometric, and strictly monochromatic (Neutral or Primary). Avoid filled icons; stick to "outline" styles to maintain the lightweight, airy feel of the interface.