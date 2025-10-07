# Event Banner Update Guide

## Overview
The home page hero section now displays a dynamic event banner that can be easily updated by your internal team. The banner is controlled by a simple JSON configuration file.

## How to Update the Event Banner

### 1. Locate the Configuration File
The event banner data is stored in: `/data/events.json`

### 2. Update Event Information
Edit the `currentEvent` object in the JSON file with your new event details:

```json
{
  "currentEvent": {
    "isActive": true,
    "title": "Your Event Title",
    "subtitle": "Your Event Subtitle",
    "description": "Brief description of your event",
    "date": "March 15-16, 2024",
    "location": "Marina Bay Sands, Singapore",
    "ctaText": "Register Now",
    "ctaLink": "/contact",
    "backgroundImage": "/images/event-banner-bg.jpg",
    "badge": "Limited Spots Available"
  }
}
```

### 3. Field Descriptions

| Field | Description | Example |
|-------|-------------|---------|
| `isActive` | Show/hide the banner | `true` or `false` |
| `title` | Main event title | "Singapore Photography Workshop 2024" |
| `subtitle` | Secondary title | "Master the Art of Event Photography" |
| `description` | Event description | "Join our exclusive photography workshop..." |
| `date` | Event date(s) | "March 15-16, 2024" |
| `location` | Event venue | "Marina Bay Sands, Singapore" |
| `ctaText` | Button text | "Register Now" |
| `ctaLink` | Button link | "/contact" or external URL |
| `backgroundImage` | Optional background image | "/images/event-banner-bg.jpg" |
| `badge` | Optional badge text | "Limited Spots Available" |

### 4. Hide the Banner
To hide the event banner, simply set `isActive` to `false`:

```json
{
  "currentEvent": {
    "isActive": false,
    // ... other fields can remain
  }
}
```

### 5. Common Updates

#### New Workshop/Event
```json
{
  "currentEvent": {
    "isActive": true,
    "title": "Corporate Photography Masterclass",
    "subtitle": "Professional Business Photography",
    "description": "Learn professional photography techniques for corporate events and business settings.",
    "date": "April 20, 2024",
    "location": "Orchard Central, Singapore",
    "ctaText": "Book Your Spot",
    "ctaLink": "/contact",
    "badge": "Early Bird Discount"
  }
}
```

#### Special Promotion
```json
{
  "currentEvent": {
    "isActive": true,
    "title": "Limited Time Offer",
    "subtitle": "50% Off Photography Services",
    "description": "Get professional photography services at half price. Valid until end of month.",
    "date": "Valid until March 31, 2024",
    "location": "All Singapore Locations",
    "ctaText": "Get Quote",
    "ctaLink": "/contact",
    "badge": "Limited Time"
  }
}
```

#### Holiday/Seasonal Event
```json
{
  "currentEvent": {
    "isActive": true,
    "title": "Chinese New Year Photography Special",
    "subtitle": "Capture Your Festive Moments",
    "description": "Special photography packages for Chinese New Year celebrations and family gatherings.",
    "date": "February 1-15, 2024",
    "location": "Singapore Wide",
    "ctaText": "Book Now",
    "ctaLink": "/contact",
    "badge": "Festive Special"
  }
}
```

## Design Features

### Visual Elements
- **Orange Gradient Background** - Matches your brand colors
- **Animated Elements** - Smooth fade-in animations
- **Responsive Design** - Works on all devices
- **Professional Layout** - Clean, modern design

### Interactive Elements
- **Call-to-Action Button** - Directs users to contact page
- **Event Details** - Date and location with icons
- **Badge System** - Optional promotional badges
- **Hover Effects** - Smooth button interactions

## Technical Notes

### File Structure
```
/data/
  └── events.json          # Event configuration
/components/ui/
  └── EventBanner.tsx      # Banner component
/app/(default)/
  └── page.tsx            # Home page (uses EventBanner)
```

### Dependencies
- The banner automatically updates when you save the JSON file
- No code changes required for content updates
- Works with your existing orange theme (#fb4d20)

## Best Practices

1. **Keep Titles Concise** - Short, impactful titles work best
2. **Clear Call-to-Action** - Use action words like "Register", "Book", "Get Quote"
3. **Accurate Information** - Always double-check dates and locations
4. **Test Links** - Ensure CTA links work correctly
5. **Mobile Preview** - Check how the banner looks on mobile devices

## Support
If you need help updating the event banner or have questions about the system, contact your development team.
