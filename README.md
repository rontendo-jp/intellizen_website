# Intellizen Website Component

This component handles the entire Intellizen.jp website structure, including navigation, routing, and page layouts.

## Usage

This component is the main application entry point. It comes with a built-in `HashRouter` and layout wrapper.

```tsx
import IntellizenWebsite from '@/sd-components/973f43c5-5350-4346-9c0c-542acd4560b8';

export default function App() {
  return <IntellizenWebsite />;
}
```

## Structure

- **Core**: `/src/Component.tsx` (Layout shell)
- **Router**: `/src/App.tsx` (Main entry with Routes)
- **Pages**:
  - `Home`: `/` (Landing page with split-screen entry)
  - `Services`: `/services` (Real Estate & Import details)
  - `Company`: `/company` (Profile & Trust)
  - `Contact`: `/contact` (Inquiry form)

## Features

- Sticky Navigation with Scroll Effect
- Bilingual Toggle UI (Frontend Only)
- Animated Page Transitions (Entry effects)
- Responsive Design (Mobile/Desktop)
