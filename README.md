# Portfolio

Static HTML/CSS portfolio site.

## Custom domain (live URL you own)

You need a **domain name** from a registrar (e.g. [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/), Namecheap, Google Domains). Then point it at **GitHub Pages** and tell GitHub which hostname to use.

### 1. GitHub (your repo)

1. **Settings** → **Pages** → **Custom domain**
2. Enter your hostname, e.g. `www.yourname.com` or `yourname.com` → **Save**  
   GitHub may open a PR or suggest adding a `CNAME` file; if not, add a file named **`CNAME`** (no extension) in the **repository root** with **one line**: your exact hostname (e.g. `www.yourname.com`). No `https://`.

3. After DNS propagates and a certificate is issued, enable **Enforce HTTPS** on the same page.

Official reference: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

### 2. DNS at your registrar

**Subdomain** (e.g. `www.yourname.com` or `portfolio.yourname.com`):

| Type  | Name / host | Target / value        |
|-------|----------------|------------------------|
| CNAME | `www` (or your subdomain) | `SambitGit80.github.io` |

**Apex** (`yourname.com` only, no `www`):

Add **four** `A` records for host `@` (or blank, depending on the provider):

`185.199.108.153` · `185.199.109.153` · `185.199.110.153` · `185.199.111.153`

Optional IPv6: four `AAAA` records for `@` — see the same GitHub doc for the current `2606:50c0:…` values.

If your DNS provider supports **ALIAS/ANAME** on the apex, you can point `@` to `SambitGit80.github.io` instead of using the fixed `A`/`AAAA` list.

### 3. Optional: SEO canonicals

After the domain is final, you can add per-page `<link rel="canonical" href="https://YOURDOMAIN/...">` in each HTML `<head>` so search engines prefer your custom URL.
