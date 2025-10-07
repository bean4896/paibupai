# Social Media Integration Guide

## Overview
A reusable social media links component has been created for the Paibupai Photography website. This component displays Instagram, TikTok, and Facebook links with consistent styling and is currently integrated into the footer.

## Files Created

### 1. `/components/ui/SocialLinks.tsx`
Reusable component that displays social media icons with hover effects.

**Features:**
- ✅ Instagram, TikTok, and Facebook icons
- ✅ Responsive design
- ✅ Theme color integration (orange hover states)
- ✅ Accessibility with aria-labels
- ✅ Opens links in new tabs
- ✅ Customizable styling via props

### 2. `/lib/social-config.ts`
Centralized configuration file for all social media URLs.

## How to Update Social Media URLs

Edit the file `/lib/social-config.ts`:

```typescript
export const socialMediaConfig = {
  instagram: {
    url: 'https://www.instagram.com/paibupai', // Update this
    handle: '@paibupai',
    name: 'Instagram',
  },
  tiktok: {
    url: 'https://www.tiktok.com/@paibupai', // Update this
    handle: '@paibupai',
    name: 'TikTok',
  },
  facebook: {
    url: 'https://www.facebook.com/paibupai', // Update this
    handle: 'paibupai',
    name: 'Facebook',
  },
}
```

**Important:** Replace the placeholder URLs with your actual social media profile URLs.

## Using the SocialLinks Component

The component is already integrated into the footer, but you can use it anywhere:

```tsx
import { SocialLinks } from '@/components/ui'

// Basic usage
<SocialLinks />

// With custom styling
<SocialLinks className="my-custom-classes" />
```

### Props

- `className` (optional): Additional CSS classes for the container
- `iconClassName` (optional): Additional CSS classes for the icons

## Current Integration

### Footer (`/components/ui/footer.tsx`)
The SocialLinks component is displayed in the footer with:
- Centered on mobile
- Right-aligned on desktop
- Proper spacing and margins
- Theme colors (orange)

## Styling

The component uses the following color scheme:
- **Default state**: Orange background (`bg-primary-100`), orange icons (`text-primary-500`)
- **Hover state**: Solid orange background (`bg-primary-500`), white icons (`text-white`)
- **Transition**: Smooth 150ms ease-in-out

## Adding More Social Media Platforms

To add additional platforms (e.g., LinkedIn, YouTube):

1. **Update configuration** (`/lib/social-config.ts`):
```typescript
export const socialMediaConfig = {
  // ... existing platforms
  linkedin: {
    url: 'https://www.linkedin.com/company/paibupai',
    handle: 'paibupai',
    name: 'LinkedIn',
  },
}
```

2. **Update component** (`/components/ui/SocialLinks.tsx`):
```typescript
{
  name: 'LinkedIn',
  href: socialMediaConfig.linkedin.url,
  ariaLabel: 'Follow us on LinkedIn',
  icon: (
    <svg className={`w-8 h-8 fill-current ${iconClassName}`} viewBox="0 0 32 32">
      {/* Add LinkedIn SVG path here */}
    </svg>
  ),
}
```

## Best Practices

1. **Always use HTTPS** for social media URLs
2. **Test links** after updating to ensure they work
3. **Use actual profile URLs** - remove placeholder values
4. **Keep icons consistent** - maintain the 32x32 viewBox for SVGs
5. **Update aria-labels** to match the platform name

## Troubleshooting

### Links not working
- Check that URLs in `social-config.ts` are correct
- Ensure URLs start with `https://`
- Verify the social media profiles exist

### Styling issues
- The component uses Tailwind CSS classes
- Orange theme colors come from `tailwind.config.js`
- Check that `primary-500` and `primary-100` colors are defined

### Icons not displaying
- Ensure SVG paths are correctly copied
- Check that viewBox is set to "0 0 32 32"
- Verify the `fill-current` class is applied

## Support

For issues or customization requests:
1. Check the component file for inline documentation
2. Review the configuration file for available options
3. Test in both mobile and desktop viewports
