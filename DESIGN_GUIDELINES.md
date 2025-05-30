# ERP Visual Design Guidelines

This document outlines the core visual design principles and specifications for the ERP application frontend. Adhering to these guidelines will ensure a consistent and polished user experience.

## 1. Color Palette

The color palette is defined in `frontend/src/theme.js`.

### Primary Colors
*   **Primary Main (`primary.main`):** `#5C6AC4` (Used for primary actions, selected states, highlights)
*   **Primary Contrast Text (`primary.contrastText`):** `#FFFFFF` (Text/icons on primary color backgrounds)

### Secondary Colors
*   **Secondary Main (`secondary.main`):** `#2C6ECB` (Used for secondary actions or alternative highlights)
    * _Note: This was pre-existing and can be further evaluated for its role in the new Shopify-like theme._

### Semantic Colors
*   **Success (`success.main`):** `#36A269`
*   **Warning (`warning.main`):** `#EEC200`
*   **Error (`error.main`):** `#D82C0D`

### Background Colors
*   **Default Page Background (`background.default`):** `#F4F6F8` (Used for the main background of pages)
*   **Paper Background (`background.paper`):** `#FFFFFF` (Used for cards, drawers, dialogs, etc.)
*   **Header Background (`background.header`):** `#FFFFFF` (Specifically for the main AppBar)
*   **Sidebar Background (`background.sidebar`):** `#FFFFFF` (Specifically for the navigation Drawer)

### Text Colors
*   **Primary Text (`text.primary`):** `#1A1B1C` (Default text color)
*   **Secondary Text (`text.secondary`):** `#6D7175` (For less important text, hints)
*   **Disabled Text (`text.disabled`):** `#B4B7BA`
*   **Placeholder Text (`text.placeholder`):** `#979797`

### Action Colors
*   **Hover (`action.hover`):** `#4755A9` (Hover state for primary elements)

### Other
*   **Divider (`divider`):** `#E0E0E0` (For borders, dividers)

## 2. Typography

Typography is managed via the `typography` object in `frontend/src/theme.js`.

*   **Font Family (`fontFamily`):** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
*   **Base Font Size (`fontSize`):** `14px` (Applied by MUI to the root)

### Key Type Styles:
*   **h1 (`variant="h1"`):** `1.5rem` (24px), `fontWeight: 600`
*   **h2 (`variant="h2"`):** `1.25rem` (20px), `fontWeight: 600`
*   **h4 (used for Page Titles):** `1.5rem` (effectively `h1` size, as seen in `Page.js` and `App.js`) - _Consider aliasing page titles to `h1` in theme or component for semantic correctness if `h4` is not intentional._
*   **subtitle1 (`variant="subtitle1"`):** `1rem` (16px), `fontWeight: 600`
*   **subtitle2 (`variant="subtitle2"`):** `0.875rem` (14px), `fontWeight: 600`
*   **body1 (`variant="body1"`):** `0.875rem` (14px), `fontWeight: 400`
*   **body2 (`variant="body2"`):** `0.875rem` (14px)
*   **Button Text (`MuiButton`):** `fontWeight: 600`, `textTransform: 'none'`

### Line Height
*   A global line height of `1.5` is set on the `body` element in `frontend/src/index.css` for general text readability.

## 3. Spacing

*   The theme uses `spacing: 4`. This means `theme.spacing(1)` equals `4px`. Common practice is to use multiples of this unit (e.g., `theme.spacing(2)` for `8px`, `theme.spacing(4)` for `16px`).
*   Standard padding for `AppCard` components is `theme.spacing(2.5)` (i.e., `10px`, though this was `p:2.5` which might be `2.5 * 4px = 10px` if `theme.spacing` is not used directly there, or `2.5 * default 8px spacing = 20px` if it's a direct multiplier. The `AppCard` uses `p: 2.5` which means `2.5 * theme.spacing unit`. Since spacing unit is 4, this is 10px. This should be clarified or standardized, e.g. `p: theme.spacing(2.5)` is not valid, it should be `p: 2.5` with the expectation of the spacing unit, or `padding: theme.spacing(2.5)` if it's a style override).
    *   _Clarification: `AppCard.js` uses `p: 2.5`. With `theme.spacing: 4`, this means `2.5 * 4px = 10px`. This is a bit unusual. Standard MUI practice is `theme.spacing(integer)`. Let's assume it means `10px` for now. The theme's `MuiPaper` has `p:2` which is `8px` by default._
    *   **Update for AppCard**: The `AppCard` component itself has `p: 2.5`. This directly uses the theme's spacing unit. If `theme.spacing` is `4` (as it is), then `p:2.5` means `2.5 * 4px = 10px`. This should be noted as a specific padding for AppCards. General MUI components will use `theme.spacing(X)`.

## 4. Border Radius

*   **Global Border Radius (`shape.borderRadius`):** `10px`.
*   This is applied to components like `Paper` (used by `AppCard`), `Button`, `TextField` (inputs), etc., through theme overrides.

## 5. Shadows

Subtle shadows are used to create depth and hierarchy, defined in `theme.shadows`.

*   **`shadows[0]`:** `none`
*   **`shadows[1]` (Default for `AppCard`, `AppBar`):** `'0px 1px 3px 0px rgba(0,0,0,0.07), 0px 1px 2px 0px rgba(0,0,0,0.03)'`
*   **`shadows[2]`:** `'0px 2px 5px 0px rgba(0,0,0,0.07), 0px 1px 4px 0px rgba(0,0,0,0.04)'`
*   **`shadows[3]` (Used for `DashboardCard` hover):** `'0px 4px 8px 0px rgba(0,0,0,0.07), 0px 2px 6px 0px rgba(0,0,0,0.05)'` (Example, actual value from theme array)
*   Higher elevation shadows are available in the `theme.shadows` array for elements needing more prominence.

## 6. Atomicity & Reusability

*   The frontend follows an atomic design structure (`atoms`, `molecules`, `organisms`, `templates`, `pages`).
*   **Atoms:** Basic building blocks (e.g., `AppCard`, `PrimaryButton`, `TextInput`). These should encapsulate base MUI components with any project-specific styling variations.
*   **Molecules:** Groups of atoms forming simple components (e.g., `SearchBar`, `DropdownMenu`).
*   **Organisms:** More complex UI components composed of molecules and/or atoms.
*   Strive to use and extend these reusable components rather than applying one-off styles. Modifications to the look and feel should primarily happen in `theme.js` or within these atomic components.

This document should be updated as the design system evolves.
