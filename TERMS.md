# ✅ Pull Request Guidelines for NameForge

Welcome to NameForge! 🎉

By submitting a pull request (PR) to this repository, you agree to the following terms:

---

## 📌 You Agree That:

- You are the rightful owner of the domain or content you're pointing the subdomain to.
- You are not impersonating another brand, project, or person.
- You will not host any **illegal**, **malicious**, or **NSFW** content.
- You will maintain the subdomain so it doesn't go stale, broken, or misused.
- We may remove or disable your subdomain if it violates these rules or poses a security risk.

---

## ✅ Submission Requirements

- One subdomain per person per domain (e.g., one under `ara.ct.ws`)
- Use your GitHub username, handle, or project name as the subdomain for clarity.
- Your PR should follow this format:

```json
{
  "name": "yoursub",
  "subdomain": ".ara.ct.ws",
  "records": {
    "CNAME": ["yourusername.github.io"]
  }
}
