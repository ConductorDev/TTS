# SVG Graphics Assets

This directory contains all SVG graphics used throughout The Train Station website. These graphics are organized by their purpose and usage type.

## Directory Structure

```
graphics/
├── decorative/               # Decorative elements and accents
│   ├── boots.svg            # Cowboy boots graphic
│   ├── choo-choo.svg        # Train graphic
│   ├── music-notes.svg      # Musical notes decoration
│   ├── mountain-range.svg   # Mountain silhouette
│   ├── railroad.svg         # Railroad tracks
│   ├── guitar.svg           # Guitar decoration
│   ├── banjo.svg           # Banjo decoration
│   └── venue-sketch.svg     # Artistic venue sketch
│
├── icons/                   # Functional icons used in UI
│   ├── navigation/         # Navigation-related icons
│   │   ├── menu.svg
│   │   ├── close.svg
│   │   └── arrow.svg
│   ├── social/            # Social media icons
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   └── twitter.svg
│   └── features/          # Feature section icons
│       ├── calendar.svg
│       ├── microphone.svg
│       └── ticket.svg
│
└── illustrations/          # Larger illustrative elements
    ├── train-station.svg   # Detailed station illustration
    ├── stage-setup.svg     # Performance stage layout
    ├── venue-map.svg       # Venue layout/map
    └── background/         # Background patterns and textures
        ├── mountain-pattern.svg
        ├── music-pattern.svg
        └── railroad-pattern.svg
```

## SVG Specifications

### Decorative Elements
- **boots.svg**
  - Purpose: Section divider or accent
  - Style: Rustic, hand-drawn appearance
  - Recommended size: 64x64px to 128x128px
  - Colors: Should work in both light and dark themes

- **choo-choo.svg**
  - Purpose: Playful accent, loading animations
  - Style: Simple, iconic train silhouette
  - Recommended size: 128x64px
  - Animation: Can include CSS animation points

- **music-notes.svg**
  - Purpose: Musical decoration
  - Style: Flowing, dynamic
  - Recommended size: Variable (scalable)
  - Usage: Background elements or section breaks

### Implementation Guidelines

1. **SVG Optimization**
   - Optimize all SVGs using SVGO
   - Remove unnecessary attributes
   - Ensure proper viewBox settings
   - Use relative paths instead of absolute

2. **Color Management**
   - Use currentColor for single-color SVGs
   - Define fill="currentColor" for theme compatibility
   - Use CSS custom properties for multi-color SVGs

3. **Accessibility**
   - Include proper aria-labels
   - Add role="img" when appropriate
   - Include meaningful titles and descriptions

## Usage Examples

### In React/Next.js Components
```tsx
// As an inline SVG
import { ReactComponent as BootsIcon } from '@/public/media/graphics/decorative/boots.svg'

// Usage
<BootsIcon className="w-16 h-16 text-primary" />

// As an image
<Image 
  src="/media/graphics/decorative/choo-choo.svg"
  alt="Decorative train graphic"
  width={128}
  height={64}
/>
```

### CSS Background
```css
.section-background {
  background-image: url('/media/graphics/illustrations/background/mountain-pattern.svg');
  background-repeat: repeat-x;
  background-position: bottom;
}
```

### Animation Example
```css
.animated-train {
  animation: choo-choo 10s linear infinite;
}

@keyframes choo-choo {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
```

## Naming Conventions

1. Use kebab-case for all file names
2. Be descriptive but concise
3. Include size in filename if size-specific
4. Group related files with common prefixes

## Best Practices

1. **Optimization**
   - Keep files under 10KB when possible
   - Remove unnecessary paths and groups
   - Use appropriate precision for path data

2. **Compatibility**
   - Test across major browsers
   - Provide PNG fallbacks for complex graphics
   - Ensure scaling works properly

3. **Performance**
   - Lazy load non-critical SVGs
   - Use appropriate caching headers
   - Consider sprite sheets for multiple small icons

4. **Maintenance**
   - Keep source files (AI/Sketch) in separate storage
   - Document any special usage requirements
   - Maintain consistent style across graphics
