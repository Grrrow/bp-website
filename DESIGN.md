# Design System Document

## 1. Overview & Creative North Star: "The Ethereal Stage"

This design system is engineered to capture the gravitas, drama, and refinement of the operatic stage. Rather than following standard web layouts, this system adopts a **High-End Editorial** approach. 

The Creative North Star is **"The Ethereal Stage."** Much like a soprano standing in a spotlight on a dark stage, the UI uses deep, ink-like blacks and purposeful negative space to make content "perform." We move beyond the "template" look by utilizing intentional asymmetry—where images might bleed off-screen or sit slightly offset from text—creating a sense of movement and rhythm. Typography is not merely for reading; it is a visual anchor that dictates the emotional tempo of the page.

---

## 2. Colors

The palette is rooted in tonal depth, utilizing a sophisticated spectrum of dark grays and teals to create an immersive, premium environment.

### Color Tokens (Material Design Convention)
*   **Surface/Background:** `#0e0e0e` (Deep charcoal, the foundation of the experience).
*   **Primary (Accent):** `#aecdc4` (A soft, desaturated teal used for focus and high-priority action).
*   **On-Surface:** `#e7e5e4` (Off-white for high-readability text).
*   **Surface-Container-Low:** `#131313` (For subtle sectioning).
*   **Surface-Container-High:** `#1f2020` (For elevated interactive elements).

### The "No-Line" Rule
To maintain a high-fashion, editorial feel, **1px solid borders for sectioning are strictly prohibited.** Do not use horizontal rules or bordered boxes to separate content sections. Instead, boundaries must be defined solely through background color shifts. Transition from `surface` to `surface-container-low` to signal a new thematic area.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create depth:
*   **Layer 1:** `surface` (#0e0e0e) for the main page body.
*   **Layer 2:** `surface-container-low` (#131313) for performance listing backgrounds.
*   **Layer 3:** `surface-container-highest` (#262626) for active cards or floating menu states.

### The "Glass & Gradient" Rule
For floating elements like navigation bars or music players, utilize **Glassmorphism**. Use a semi-transparent `surface-variant` with a `20px` backdrop-blur. To provide "soul," primary CTAs should utilize a subtle linear gradient from `primary` (#aecdc4) to `primary-container` (#3b5851) at a 135-degree angle.

---

## 3. Typography

The typography scale is a dialogue between the classical (Serif) and the modern (Sans-Serif).

*   **Display & Headlines (Noto Serif):** These are the "voice" of the brand. Use large scales (`display-lg` at 3.5rem) with generous letter-spacing for a dramatic, cinematic feel. 
*   **Body & Labels (Manrope):** A clean, architectural Sans-Serif used for long-form biography text and metadata. It provides a steady, legible counterpoint to the expressive Serif headings.
*   **Identity Hierarchy:** 
    *   **Headlines:** Convey authority and artistic heritage.
    *   **Body Text:** Convey professionalism and accessibility.
    *   **Labels:** Use `label-md` (0.75rem) in all-caps with `0.1rem` tracking for subtitles like "SOPRANO" or "CALENDARIO."

---

## 4. Elevation & Depth

In this system, depth is achieved through **Tonal Layering** rather than drop shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card (#000000) on a `surface-container-low` section (#131313). The 1% difference in luminosity creates a soft, natural lift that feels like fine paper.
*   **Ambient Shadows:** If an element must float (e.g., a modal), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(0,0,0,0.4)`. Avoid high-contrast black shadows; let the background swallow the edges naturally.
*   **The "Ghost Border" Fallback:** For buttons or input fields where a boundary is required for accessibility, use the `outline-variant` (#484848) at **20% opacity**. This creates a hint of a container without breaking the dark, immersive flow.

---

## 5. Components

### Buttons
*   **Primary:** Filled with the Primary Teal gradient. High-contrast `on-primary` text.
*   **Secondary (Outlined):** Use the "Ghost Border" (20% opacity outline-variant). `DEFAULT` roundedness (1rem).
*   **Tertiary:** Text-only with a subtle `primary` underline that expands on hover.

### Performance Cards
*   **Style:** No borders. Background: `surface-container-low`. 
*   **Spacing:** Use `spacing-6` (2rem) for internal padding.
*   **Interaction:** On hover, the background shifts to `surface-container-high`. Do not use "Lift" animations; use "Glow" (a subtle opacity increase of the primary accent).

### Performance Lists
*   **No Dividers:** Forbid the use of divider lines between performance dates. Use `spacing-8` (2.75rem) of vertical white space to separate entries. This creates an open, luxurious feel typical of premium event programs.

### Navigation Menu
*   **Style:** Minimalist. `body-md` typography.
*   **State:** The active link is denoted by a small `3px` primary teal dot centered underneath the text, rather than a bold font weight.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Let a portrait of the artist overlap two different background-color sections.
*   **Do** use the `xl` (3rem) roundedness for large image containers to soften the "tech" feel of the dark theme.
*   **Do** prioritize high-quality, desaturated photography that matches the #0e0e0e background depth.

### Don't
*   **Don't** use 100% white (#ffffff) for body text. Use `on-surface` (#e7e5e4) to reduce eye strain and maintain the sophisticated mood.
*   **Don't** use standard "drop shadows." They appear muddy on dark backgrounds. Rely on tonal shifts.
*   **Don't** clutter the screen. If a section feels "full," increase the spacing token by two levels (e.g., move from `spacing-16` to `spacing-24`).