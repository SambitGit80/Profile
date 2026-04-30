# Portfolio

Static HTML/CSS portfolio site. Source repo: [github.com/SambitGit80/Profile](https://github.com/SambitGit80/Profile).

## Deploy this site on Vercel (from GitHub)

1. **Connect GitHub to Vercel** (required once)  
   If you see *“install the GitHub integration first”*: finish installing the **Vercel** GitHub App and grant access to **`SambitGit80/Profile`** (GitHub → **Settings** → **Applications** → **Installed GitHub Apps** → **Vercel** → **Configure** → repository access).

2. Open [vercel.com/new](https://vercel.com/new) → **Import** → choose **`SambitGit80/Profile`** → branch **`main`**.

3. **Configure Project**
   - **Project Name:** **all lowercase** only (e.g. `sambit-portfolio`). This becomes your live URL: `https://<project-name>.vercel.app`
   - **Framework Preset:** **Other**
   - **Root Directory:** `.` (default)
   - **Build Command:** **empty**
   - **Output Directory:** **empty** (site files are at the repo root)

4. Click **Deploy**. When it shows **Ready**, open **Overview** or visit **`https://<your-project-name>.vercel.app`** — the root `index.html` redirects visitors to `./home/`.

After the first deploy, every **`git push`** to `main` triggers a new production deployment automatically (if the project stayed connected to that repo).

Reference: [Deploying a static site on Vercel](https://vercel.com/docs/frameworks/static).

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
