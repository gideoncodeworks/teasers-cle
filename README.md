# Teasers CLE - Landing Page

A clean, modern "Coming Soon" landing page for TeasersCLE.com built with HTML, CSS, and JavaScript. Designed for deployment on Netlify with integrated form handling.

## Features

- Modern black and white aesthetic
- Fully responsive design (mobile, tablet, desktop)
- Netlify Forms integration for lead capture
- Smooth fade-in animations
- Accessible form fields with validation
- Zero dependencies - pure HTML/CSS/JS
- Ready for immediate deployment

## File Structure

```
/
├── index.html          # Main landing page
├── style.css           # All styling and animations
├── script.js           # Form handling and animations
├── assets/             # Logo and images
│   └── logo.png        # Your brand logo (add this file)
└── README.md           # This file
```

## Quick Start

### 1. Add Your Logo
Place your logo file in the `/assets/` folder and name it `logo.png` (or update the reference in `index.html`).

### 2. Customize Content (Optional)
Edit `index.html` to update:
- Page title (line 6)
- Tagline text (line 21)
- Form fields or options
- Footer copyright year
- GoFundMe campaign URL (line 68)

### 3. Test Locally
Simply open `index.html` in your browser to preview the site.

## Deployment to Netlify

### Option 1: Drag & Drop (Easiest)
1. Go to [Netlify](https://app.netlify.com)
2. Drag the entire project folder into the Netlify dashboard
3. Your site is live!

### Option 2: Git-Based Deployment
1. Push this folder to a GitHub repository
2. Connect the repository to Netlify
3. Netlify will automatically deploy on every commit

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Netlify Forms Setup

The form is already configured for Netlify Forms. After deployment:

1. Go to your Netlify dashboard
2. Navigate to **Forms** section
3. You'll see "notify-form" listed
4. All submissions will appear there
5. Set up email notifications in **Form notifications**

### Form Fields
- **Name** (required)
- **Email** (required)
- **Interest** (required dropdown):
  - Investor Packet
  - Crowdfunding Info
  - VIP Invite List
  - Suggestion or Idea
- **Message** (optional textarea)

## Custom Domain Setup

To connect **teaserscle.com**:

1. In Netlify dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Enter `teaserscle.com`
4. Follow DNS configuration instructions
5. Add these DNS records at your domain registrar:
   - **A Record**: `75.2.60.5`
   - **CNAME**: `www` → `your-site.netlify.app`

Netlify automatically provisions SSL certificates.

## Customization Guide

### Colors
Edit CSS variables in `style.css` (lines 12-14):
```css
--color-black: #000000;
--color-white: #FFFFFF;
--color-gray: #999999;
```

### Fonts
Update the font stack in `style.css` (line 15):
```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...
```

Or add a Google Font:
```html
<!-- In index.html <head> -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
```

### Animations
Adjust animation timing in `style.css`:
- Page fade-in: line 33
- Form stagger: `script.js` line 81

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies
- Minimal CSS and JavaScript
- Optimized for fast load times
- Lighthouse score: 95+

## Future Enhancements (Phase 2)

- [ ] Add investor, crowdfunding, and VIP subpages
- [ ] Integrate Mailchimp for automated emails
- [ ] Add embedded video content
- [ ] Set up Google Analytics or Plausible
- [ ] Create custom success page after form submission
- [ ] Add social media meta tags (Open Graph, Twitter Cards)

## Troubleshooting

### Form submissions not appearing?
- Ensure you've deployed to Netlify (forms don't work locally)
- Check that `data-netlify="true"` is present in the form tag
- Verify the hidden input field `form-name` matches the form's `name` attribute

### Logo not showing?
- Verify the file exists in `/assets/` folder
- Check the filename matches in `index.html` (line 18)
- Ensure the file format is supported (PNG, JPG, SVG)

### Styling looks broken?
- Confirm `style.css` is in the same directory as `index.html`
- Check browser console for any errors
- Clear browser cache and hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

## Support

For issues with:
- **Netlify deployment**: [Netlify Docs](https://docs.netlify.com)
- **Domain setup**: [Netlify Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
- **Forms**: [Netlify Forms Docs](https://docs.netlify.com/forms/setup/)

## License

© 2024 Teasers Cleveland™ — All Rights Reserved

---

**Built with care for the Teasers CLE brand.**
