# Portfolio

Static HTML/CSS portfolio site: **one scrollable page** (`index.html`) with sections `#home` … `#contact`. Source repo: [github.com/SambitGit80/Profile](https://github.com/SambitGit80/Profile).

## Deploy this site on Vercel (from GitHub)

1. **Connect GitHub to Vercel** (required once)  
   If you see *“install the GitHub integration first”*: finish installing the **Vercel** GitHub App and grant access to **`SambitGit80/Profile`** (GitHub → **Settings** → **Applications** → **Installed GitHub Apps** → **Vercel** → **Configure** → repository access).

2. Open [vercel.com/new](https://vercel.com/new) → **Import** → choose **`SambitGit80/Profile`** → branch **`main`**.

3. **Configure Project**
   - **Project Name:** **all lowercase** only (e.g. `sambit-portfolio`). This becomes your live URL: `https://<project-name>.vercel.app`
   - **Framework Preset:** **Other** (not Next.js — this repo is static HTML only; `vercel.json` also sets `"framework": null` so Git deploys stay on **Other**.)
   - **Root Directory:** `.` (default — must match where `index.html` lives)
   - **Build Command:** **empty** (override on if needed, then clear the field)
   - **Output Directory:** **empty** (site files are at the repo root)

   If the build says **“No Next.js version detected”**, the project was set to Next.js. Set Framework to **Other** as above, or rely on the committed **`vercel.json`** and redeploy.

4. Click **Deploy**. When it shows **Ready**, open **Overview** or visit **`https://<your-project-name>.vercel.app`** — the site is one scrollable page at `/` (nav uses in-page anchors like `#about`). Old paths such as `/home/` redirect to the matching section.

After the first deploy, every **`git push`** to `main` triggers a new production deployment automatically (if the project stayed connected to that repo).

Reference: [Deploying a static site on Vercel](https://vercel.com/docs/frameworks/static).

---

## Custom domain on Vercel (e.g. `sambit.com`)

You only get `something.vercel.app` until you attach a domain **you register** (check availability — short names like `sambit.com` are often already owned).

1. **Buy `sambit.com`** (or another name) at a registrar: [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/), [Namecheap](https://www.namecheap.com/), etc. You need control of that domain’s **DNS**.

2. **Vercel** → open project **`sambit-portfolio-three`** (or whatever your project is named) → **Settings** → **Domains** → **Add**:
   - Add **`sambit.com`** (apex).
   - Optionally add **`www.sambit.com`**; Vercel can redirect `www` ↔ apex in the Domains UI.

3. **DNS at your registrar** — copy what Vercel shows after you add each hostname. Typical patterns:
   - **Apex** (`sambit.com`): **A** records to Vercel’s IPs, or **ALIAS/ANAME** to `76.76.21.21` / the target Vercel displays (follow the live instructions in the dashboard).
   - **`www`:** **CNAME** `www` → `cname.vercel-dns.com` or the exact hostname Vercel gives you.

4. Wait for DNS to propagate (minutes to a few hours). When Vercel marks the domain **Valid**, turn on **Redirect** if you want only `https://sambit.com` (or only `www`) as the canonical URL.

5. **`*.vercel.app` still works**; visitors can use either until you rely only on the custom domain.

Docs: [Add a domain to a Vercel project](https://vercel.com/docs/concepts/projects/domains/add-a-domain).

**SEO:** Root `index.html` uses `<link rel="canonical" href="https://sambit.com/">`. Subpaths redirect to `/#section` with the same canonical. If your real domain differs, replace `https://sambit.com` in the HTML files.

---

## Alternative: GitHub Pages

If you use GitHub Pages instead: **Settings** → **Pages** → branch `main`, folder `/`, optional **Custom domain** + root **`CNAME`** file. DNS for GitHub is different from Vercel — follow [GitHub’s custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
