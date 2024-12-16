# Logo and Favicon Guidelines

This directory contains all logo variations and favicon assets for The Train Station website.

## Directory Structure

```
logos/
├── favicon/
│   ├── favicon.ico             # Main favicon (16x16, 32x32)
│   ├── favicon-16x16.png       # 16x16 PNG favicon
│   ├── favicon-32x32.png       # 32x32 PNG favicon
│   ├── favicon-192x192.png     # Android Chrome favicon
│   ├── favicon-512x512.png     # Android Chrome large favicon
│   ├── apple-touch-icon.png    # iOS home screen icon (180x180)
│   └── site.webmanifest        # Web app manifest file
│
├── primary/
│   ├── logo-horizontal.svg     # Horizontal layout of logo
│   ├── logo-vertical.svg       # Vertical layout of logo
│   ├── logo-symbol.svg         # Just the symbol/icon
│   └── logo-wordmark.svg       # Just the text
│
├── monochrome/
│   ├── logo-white.svg          # White version for dark backgrounds
│   ├── logo-black.svg          # Black version for light backgrounds
│   ├── logo-symbol-white.svg   # White symbol only
│   └── logo-symbol-black.svg   # Black symbol only
│
└── social/                     # Social media optimized versions
    ├── og-image.jpg           # Open Graph image (1200x630)
    ├── twitter-card.jpg       # Twitter card image (1200x600)
    └── linkedin-banner.jpg    # LinkedIn banner (1128x191)
```

## Logo Specifications

### Primary Logo Files
- Vector format (SVG)
- Include all variations (horizontal, vertical, symbol, wordmark)
- Maintain clear space around logo (included in SVG viewBox)
- Minimum size requirements documented in style guide

### Monochrome Versions
- Pure white (#FFFFFF) for dark backgrounds
- Pure black (#000000) for light backgrounds
- Single color versions for special applications

### Favicon Requirements

1. **favicon.ico**
   - Must include both 16x16 and 32x32 versions
   - Use ICO format for best browser compatibility

2. **PNG Favicons**
   - 16x16: Basic favicon for older browsers
   - 32x32: High-DPI favicon for modern displays
   - 192x192: Android Chrome icon
   - 512x512: Large Android Chrome icon

3. **Apple Touch Icon**
   - 180x180 pixels
   - Include safe zone for iOS rounded corners
   - No transparency
   - RGB color space

4. **site.webmanifest Example:**
```json
{
  "name": "The Train Station",
  "short_name": "TTS",
  "icons": [
    {
      "src": "/media/logos/favicon/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/media/logos/favicon/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

### Social Media Images

1. **Open Graph Image (og-image.jpg)**
   - Dimensions: 1200x630 pixels
   - Format: JPG
   - Max file size: 1MB
   - Used for Facebook, LinkedIn general sharing

2. **Twitter Card (twitter-card.jpg)**
   - Dimensions: 1200x600 pixels
   - Format: JPG
   - Max file size: 1MB
   - Aspect ratio: 2:1

3. **LinkedIn Banner (linkedin-banner.jpg)**
   - Dimensions: 1128x191 pixels
   - Format: JPG
   - Max file size: 2MB
   - Safe area: Keep important content in center

## Usage in HTML

Add these tags to your HTML head:

```html
<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/media/logos/favicon/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/media/logos/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/media/logos/favicon/favicon-16x16.png">
<link rel="apple-touch-icon" href="/media/logos/favicon/apple-touch-icon.png">
<link rel="manifest" href="/media/logos/favicon/site.webmanifest">

<!-- Social Media -->
<meta property="og:image" content="/media/logos/social/og-image.jpg">
<meta property="twitter:image" content="/media/logos/social/twitter-card.jpg">
```

## Color Specifications

Maintain consistent colors across all logo variations:
- Primary Brand Color: [Your primary color hex code]
- Secondary Brand Color: [Your secondary color hex code]
- Ensure colors are web-safe and maintain consistency across different formats
