<p align="center">
  <img width="300" height="300" src="https://nameforge.rf.gd/logo.png">
</p>

# NameForge

**NameForge** is a free, community-driven subdomain registry — claim your own developer subdomain under our collection of unique domains.

---

## What Is NameForge?
NameForge is a project inspired by [js.org](https://js.org), offering free subdomains to developers, creators, and hobbyists. You can point your subdomain to services like GitHub Pages, Vercel, Netlify, or any other platform supporting custom domains.

---

## Available Domains
You can request subdomains under any of the following:

- `ara.ct.ws`
- `are-you-on.my-board.org`
- `best.fanclub.rocks`
- `css-js.html-5.me`
- `it-is.my-style.in`
- `its.mydiscussion.net`

---

## Features

✅ Free subdomain via GitHub Pull Request  
🌍 Multiple root domains to choose from  
🔁 Auto DNS sync support for:
- CNAME (primary method)

🔒 GitHub Action PR validation  
💡 Fully open-source and community managed

---

## How to Register a Subdomain

No coding skills required. Just:

1. **Fork** this repository.
2. **Choose** a root domain from the list above.
3. **Create a file** at:

   ```
   domains/<domain>/<yourname>.json
   ```

4. **Add your subdomain info**:

```json
{
  "name": "yourname",
  "subdomain": "yourname.css-js.html-5.me",
  "records": {
    "CNAME": ["yourusername.github.io"]
  }
}
```

5. **Open a Pull Request**
6. Wait for approval — your subdomain will go live within 24–48h 🎉

---

## Repo Structure
```
domains/
 ├── css-js.html-5.me/
 │   └── yourname.json
 ├── ara.ct.ws/
 │   └── someone.json
 └── ...

.github/
 └── workflows/
     └── validate-subdomain-pr.yml

sync-domains.js   ← Reads and compiles all domain entries
server.js         ← Backend for DNS automation (optional)
domains.json      ← Final compiled list
```

---

## Rules

- ✅ 1 subdomain per person per root domain
- 🚫 No illegal, NSFW, or abusive content
- 🧾 Use a valid email for accountability
- 🌐 You must own the content you are pointing to

---

## Contact

- **Email:** nameforge.rf.gd@gmail.com  
- **WhatsApp:** +1 (260) 286-7493

---

## License
MIT License © 2025 NameForge Team

---

> "Name your space. Forge your presence." — *NameForge*
