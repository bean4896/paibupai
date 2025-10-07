# Design System

This design system provides a consistent set of reusable UI components for the project.

## Base Components

### Button
A flexible button component with multiple variants and sizes.

**Variants:**
- `primary` - Blue background, white text (default)
- `secondary` - White background, gray text
- `outline` - Transparent background, blue border
- `ghost` - Transparent background, gray text

**Sizes:**
- `sm` - Small button
- `md` - Medium button (default)
- `lg` - Large button

**Props:**
- `children` - Button content
- `variant` - Button style variant
- `size` - Button size
- `href` - Link URL (renders as Link component)
- `onClick` - Click handler
- `className` - Additional CSS classes
- `disabled` - Disabled state
- `type` - Button type (button, submit, reset)
- `fullWidth` - Full width button

### Card
A container component with consistent styling and variants.

**Variants:**
- `default` - White background
- `elevated` - White background with shadow
- `outlined` - White background with border
- `dark` - Dark background with white text

**Padding:**
- `none` - No padding
- `sm` - Small padding
- `md` - Medium padding (default)
- `lg` - Large padding

### Section
A layout component for consistent page sections.

**Variants:**
- `default` - No background
- `gray` - Gray background
- `dark` - Dark background

**Padding:**
- `sm` - Small padding
- `md` - Medium padding (default)
- `lg` - Large padding
- `xl` - Extra large padding

### Heading
A semantic heading component with consistent typography.

**Levels:**
- `1` - h1 (largest)
- `2` - h2 (default)
- `3` - h3
- `4` - h4
- `5` - h5
- `6` - h6 (smallest)

**Variants:**
- `default` - Standard heading
- `display` - Large display heading with Cabinet Grotesk font
- `section` - Section heading with Cabinet Grotesk font

### Badge
A small status or label component.

**Variants:**
- `default` - Gray background
- `primary` - Blue background
- `secondary` - Light gray background
- `success` - Green background
- `warning` - Yellow background
- `error` - Red background

## Composite Components

### PricingCard
A specialized card for displaying pricing information.

**Props:**
- `title` - Plan name
- `price` - Price (string or number)
- `period` - Billing period (default: "/mo")
- `description` - Plan description
- `features` - Array of feature strings
- `buttonText` - CTA button text
- `buttonHref` - CTA button link
- `popular` - Show "Most Popular" badge
- `variant` - Card variant (default or dark)

### TestimonialCard
A card for displaying customer testimonials.

**Props:**
- `image` - Customer photo
- `name` - Customer name
- `handle` - Social media handle
- `quote` - Testimonial text
- `buttonText` - Optional CTA button text
- `buttonHref` - Optional CTA button link

### BlogCard
A card for displaying blog post previews.

**Props:**
- `image` - Post featured image
- `title` - Post title
- `excerpt` - Post excerpt
- `authorName` - Author name
- `authorImage` - Author photo
- `href` - Post link

### GalleryItem
A component for displaying gallery images with overlay information.

**Props:**
- `image` - Gallery image
- `authorName` - Author name
- `authorHandle` - Author handle
- `authorImage` - Author photo
- `likes` - Like count
- `href` - Image link
- `categories` - Array of category IDs
- `currentCategory` - Currently selected category

### CategoryButton
A button for category filtering.

**Props:**
- `children` - Category name
- `count` - Item count
- `isActive` - Active state
- `onClick` - Click handler

## Usage Guidelines

### Importing Components
```tsx
import { Button, Card, Section, Heading } from './ui'
```

### Consistent Spacing
Use the Section component for consistent page layout:
```tsx
<Section padding="lg" variant="gray">
  <Heading level={2} variant="section">Section Title</Heading>
  {/* Content */}
</Section>
```

### Button Usage
```tsx
<Button href="/signup" variant="primary" fullWidth>
  Join The Community
</Button>
```

### Card Usage
```tsx
<Card variant="elevated" padding="lg">
  <Heading level={3}>Card Title</Heading>
  <p>Card content</p>
</Card>
```

## Color Palette

- **Primary Orange:** `#fb4d20` (primary-500)
- **Secondary Gray:** `#6B7280` (gray-500)
- **Success Green:** `#10B981` (emerald-500)
- **Warning Yellow:** `#F59E0B` (yellow-500)
- **Error Red:** `#EF4444` (red-500)

## Typography

- **Display Font:** Cabinet Grotesk (for headings)
- **Body Font:** Inter (for body text)
- **Font Sizes:** Use Tailwind's responsive typography scale

## Best Practices

1. **Consistency:** Always use the design system components instead of custom styling
2. **Accessibility:** Components include proper ARIA labels and semantic HTML
3. **Responsive:** All components are mobile-first and responsive
4. **TypeScript:** All components are fully typed for better development experience
5. **Reusability:** Components are designed to be flexible and reusable across the application
