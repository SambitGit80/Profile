# Portfolio (static site)

**Live site (free GitHub Pages):** [https://sambitgit80.github.io/](https://sambitgit80.github.io/) — after the repo is named `SambitGit80.github.io` and Pages is enabled on `main` / root.

### Shorter URL (no `/Profile/` in the path)

1. On GitHub: **Settings → General → Repository name** → rename to **`SambitGit80.github.io`** (must match your username exactly).
2. On your machine, point `origin` at the new URL:

   ```bash
   git remote set-url origin https://github.com/SambitGit80/SambitGit80.github.io.git
   ```

3. **Settings → Pages**: source **main**, folder **`/` (root)**.
4. Wait a minute, then open **https://sambitgit80.github.io/**

Until you rename, Pages stays at `https://sambitgit80.github.io/Profile/`; canonical links in HTML assume the user-site URL above.
