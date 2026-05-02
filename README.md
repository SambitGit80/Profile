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

## Custom domain on Vercel (e.g. `www.sambit.com`)

You **cannot** turn `sambit-portfolio-three.vercel.app` into `www.sambit.com` by renaming. You **add** `www.sambit.com` on top; the `.vercel.app` URL can stay as a backup.

1. **Register `sambit.com`** (you need the apex to own `www`) at a registrar: [Cloudflare](https://www.cloudflare.com/products/registrar/), [Namecheap](https://www.namecheap.com/), etc., and control **DNS**.

2. **Vercel** → your project (e.g. `sambit-portfolio-three`) → **Settings** → **Domains** → **Add**:
   - Add **`www.sambit.com`** (what you want visitors to type).
   - Optionally add **`sambit.com`** (apex) and set a **redirect** in the Domains UI so `https://sambit.com` → `https://www.sambit.com` (or the other way around).

3. **DNS at your registrar** — use the **exact** records Vercel shows after each add. Usually:
   - **`www`:** **CNAME** for host `www` → value Vercel gives (often `cname.vercel-dns.com` or similar).
   - **Apex** (`sambit.com`): **A** or **ALIAS** as Vercel lists.

4. Wait until the domain shows **Valid** and HTTPS works. Then prefer sharing **`https://www.sambit.com`**.

5. **`*.vercel.app`** still works; optional redirect from Vercel subdomain to your custom domain is configured in **Domains**, not in this repo.

Docs: [Add a domain to a Vercel project](https://vercel.com/docs/concepts/projects/domains/add-a-domain).

**SEO:** Canonical in this repo is `https://www.sambit.com/`. If you use a different hostname, replace `https://www.sambit.com` in the HTML files.

---

## Alternative: GitHub Pages

If you use GitHub Pages instead: **Settings** → **Pages** → branch `main`, folder `/`, optional **Custom domain** + root **`CNAME`** file. DNS for GitHub is different from Vercel — follow [GitHub’s custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
