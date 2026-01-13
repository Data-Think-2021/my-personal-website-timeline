# Personal Website - Xia He-Bleinagel

A professional website showcasing my journey in tech, expertise in data engineering, and cloud solutions.

## Features

- Professional timeline of experience
- Mentoring services (Transition to Tech, Career Growth, Entrepreneur Journey, Women Empowerment)
- Contact form integration
- Calendly booking integration
- Responsive design

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Formspree for contact form
- Calendly for scheduling

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Setup Instructions

1. In your GitHub repository settings, go to "Pages" section:
   - Set the source to "Deploy from a branch"
   - Select the "gh-pages" branch
   - Save the settings

2. Add your custom domain:
   - In the repository settings under "Pages"
   - Enter your custom domain (e.g., www.yourname.com)
   - Save

3. Configure your DNS:
   - Go to your domain registrar's DNS settings
   - Add these records:
     ```
     Type  Name  Value
     A     @     185.199.108.153
     A     @     185.199.109.153
     A     @     185.199.110.153
     A     @     185.199.111.153
     CNAME www   your-username.github.io
     ```

4. Add a CNAME file:
   ```bash
   echo "www.yourname.com" > public/CNAME
   ```

5. Push to main branch to trigger deployment:
   ```bash
   git add .
   git commit -m "Add CNAME for custom domain"
   git push origin main
   ```

The GitHub Action will:
- Build your project
- Deploy it to the gh-pages branch
- Make it available at your custom domain

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

## License

MIT
