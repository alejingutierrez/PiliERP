# ERP Visual Design Guidelines (Material Web Components Edition)

This document outlines the core visual design principles and specifications for the ERP application frontend, now based on **Material Web Components (MWC)**. Adhering to these guidelines will ensure a consistent and polished user experience.

## 1. Component Library: Material Web Components (MWC)

The application has transitioned from Material UI (MUI) to Material Web Components (@material/web) to align with the latest Material Design standards directly from Google.

MWC are integrated into the React application using the `@lit/react` library, which provides a `createComponent` function to wrap MWC elements for idiomatic React usage. These wrapped components are typically stored in `frontend/src/mwc_wrappers/`.

## 2. Theming with CSS Custom Properties

Theming is now centralized in `frontend/src/mwc_theme.css`. This file defines Material Design tokens (for color, typography, shape, etc.) using CSS Custom Properties. These tokens are based on the Material Design 3 system.

MWC elements are designed to consume these CSS Custom Properties automatically. Global styles and component-specific overrides can also leverage these tokens.

### Key Theming Files:
*   **`frontend/src/mwc_theme.css`**: Contains all global CSS Custom Property definitions for MWC theming. This is where you define your application's visual identity.
*   **`frontend/src/index.js`**: Imports `mwc_theme.css` to apply the theme globally.

## 3. Core Theme Tokens (Defined in `mwc_theme.css`)

Refer to `frontend/src/mwc_theme.css` for the complete list of tokens. Below is a conceptual overview:

### a. Color Palette
Colors are defined using MWC's system color tokens (e.g., `--md-sys-color-primary`, `--md-sys-color-on-surface`, `--md-sys-color-error-container`). The palette in `mwc_theme.css` has been translated from the previous MUI theme and includes:
*   Primary, Secondary, Tertiary palettes
*   Error palette
*   Neutral background and surface colors (including various container shades for elevation)
*   Outline colors
*   Specific "on-" colors for accessible text/icons on colored backgrounds.

### b. Typography
Typography is managed via MWC's system typescale tokens (e.g., `--md-sys-typescale-body-large-font-family`, `--md-sys-typescale-headline-small-font-size`).
*   **Font Family**: Defined by tokens like `--md-sys-typescale-font-family-brand` and `--md-sys-typescale-font-family-plain`. Currently set to 'Inter' and system fallbacks.
*   **Typescale**: A comprehensive set of predefined roles (body, label, title, headline, display) with corresponding font sizes, weights, and line heights are available. The base body font size is typically `body-large` (14px).

### c. Shape
Shape characteristics, primarily corner radius, are defined using MWC's shape tokens (e.g., `--md-sys-shape-corner-medium`).
*   A range of corner sizes are available (extra-small, small, medium, large, etc.).
*   The `--md-sys-shape-corner-medium` token has been set to `10px` in `mwc_theme.css` to align with the previous application-wide border radius. MWC components will use these tokens for their border radiuses.

## 4. Component Usage

*   **Prefer Wrapped MWC Components:** When building UI, prioritize using the React-wrapped MWC components from `frontend/src/mwc_wrappers/` or creating new wrappers for MWC elements as needed.
*   **Styling:**
    *   Leverage the global CSS Custom Properties from `mwc_theme.css` for styling.
    *   MWC components often expose their own CSS Custom Properties for more granular styling. Refer to the individual MWC component documentation for these.
    *   Avoid inline styles or one-off CSS classes where a theme token or component-specific token can achieve the same result.

## 5. Atomicity & Reusability

The frontend should continue to follow an atomic design structure (`atoms`, `molecules`, `organisms`, `templates`, `pages`) where possible, but now constructing these elements from wrapped MWC components.

*   **Atoms:** Basic building blocks (e.g., a wrapped MWC button, a wrapped MWC card). These should encapsulate the MWC element and its React wrapper, exposing necessary props and events.
*   **Molecules:** Groups of atoms forming simple components.
*   **Organisms:** More complex UI components composed of molecules and/or atoms.

Strive to use and extend these reusable components. Modifications to the look and feel should primarily happen in `mwc_theme.css` or by adjusting how MWC components are used and styled within the reusable React components.

This document should be updated as the design system and MWC integration evolve.
