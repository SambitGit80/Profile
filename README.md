# Portfolio

Static HTML/CSS portfolio site.

## Deploy on Vercel

1. Push this repo to GitHub (if it is not already).
2. Go to [vercel.com](https://vercel.com) → sign in → **Add New…** → **Project** → **Import** your repository.
3. **Configure Project**
   - **Project Name:** must be **all lowercase** (e.g. `profile` or `sambit-portfolio`). Repo names like `Profile` are invalid until you change this field.
   - **Framework Preset:** **Other** (no framework).
   - **Root Directory:** `.` (leave default).
   - **Build Command:** leave **empty** (there is no build step).
   - **Output Directory:** leave **empty** so the repo root is served as static files.

4. Click **Deploy**. Vercel gives you a URL like `your-project.vercel.app`.

Official overview: [Deploying a static site on Vercel](https://vercel.com/docs/frameworks/static).

---

## Custom domain on Vercel

1. Buy a domain from any registrar (Cloudflare, Namecheap, etc.).
2. In Vercel: open the project → **Settings** → **Domains** → add your domain (apex `example.com` and/or `www.example.com`).
3. Vercel shows the **exact DNS records** to create at your registrar (often a **CNAME** to `cname.vercel-dns.com` or **A** records for the apex). Add those records, wait for propagation, then confirm in the dashboard.

Docs: [Add a domain to a Vercel project](https://vercel.com/docs/concepts/projects/domains/add-a-domain).

**Optional:** After the domain works, add per-page `<link rel="canonical" href="https://YOURDOMAIN/...">` in each HTML `<head>` for SEO.

---

## Alternative: GitHub Pages

If you use GitHub Pages instead: **Settings** → **Pages** → branch `main`, folder `/`, optional **Custom domain** + root **`CNAME`** file. DNS for GitHub is different from Vercel — follow [GitHub’s custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
