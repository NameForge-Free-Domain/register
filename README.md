# ⚠️Note

**NameForge** is still under development.

# 🌐 NameForge

**NameForge** is a free, community-driven subdomain registry — claim your own developer subdomain, powered by GitHub Pull Requests.

---

## 📜 Subdomain Roots Available
Choose from these pre-approved root domains:

- `ara.ct.ws`  
- `are-you-on.my-board.org`  
- `best.fanclub.rocks`  
- `css-js.html-5.me`  
- `it-is.my-style.in`
- `its.mydiscussion.net` 

> ⚠️ You cannot choose the domain dynamically — it's specified in your JSON file.

---

## 🚀 Features

- ✅ Free subdomain via GitHub Pull Request  
- 🌍 Multiple root domains available  
- 🔁 Auto DNS sync with:
  - ✅ **CNAME support only**  
- 🛡️ GitHub Action validation to prevent abuse  
- 🧠 Fully scriptable + community managed  

---

## 📝 How to Register a Subdomain

🧑‍💻 *No coding experience required!*

1. **Fork** this repository  
2. **Create a file** in the `/domains/` directory  
   - Filename format:
     ```
     yoursub.json
     ```

3. **Use this format** inside your `.json` file:

```json
{
  "name": "yoursub",
  "subdomain": "ara.ct.ws",
  "records": {
    "CNAME": ["yourusername.github.io"]
  }
}
```

4. **Open a Pull Request**  
5. ✅ Once approved, your subdomain will go live within **24–48 hours**!

---

## 📂 Project Structure

```
📁 domains/
 ├── yoursub.json

📁 .github/
 └── workflows/
     └── validate-subdomain-pr.yml

server.js        ← Backend for live DNS automation
sync-domains.js  ← Reads + compiles domain requests
domains.json     ← Active list used by backend
```

---

## ✅ DNS Record Support

- **CNAME** only — ideal for GitHub Pages, Vercel, Netlify, etc.  
- ❌ MX, TXT, NS records are not currently supported for subdomains due to platform limitations.

---

## 🤖 Automation

- 🧠 GitHub Actions auto-validate all PRs
- 🛠️ Backend (`server.js`) updates DNS via Puppeteer (InfinityFree)
- 🌐 Cloudflare + FreeDNS support planned

---

## 📜 Rules

- One subdomain **per person per domain**
- No illegal, NSFW, or spammy content
- You **must control** the target of the CNAME
- Use a valid email for accountability

---

## 💬 Community & Support

- Instagram: [name.forge](https://www.instagram.com/name.forge)
- WhatsApp: +1 (260) 286-7493  
- Email: nameforge.rf.gd@gmail.com

---

## License

MIT License © 2025 NameForge Team

---

> 🔥 “Name your space. Forge your presence.” – *NameForge*
