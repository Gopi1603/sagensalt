# Known Issues & Solutions

## Hydration Warning from Browser Extensions

### Issue
You may see a hydration error in the browser console:
```
Hydration failed because the server rendered HTML didn't match the client
- webcrx=""
```

### Cause
This error is caused by **browser extensions** (specifically WebCRX or similar extensions) that inject attributes into the HTML before React loads. This is NOT a bug in your code.

### Solution
We've added `suppressHydrationWarning` to the root layout to handle third-party script interference. This is a common issue with:
- WebCRX extension
- Grammarly
- Google Translate
- Ad blockers
- Other browser extensions that modify the DOM

### For Development
If you want to see real hydration errors during development:
1. Test in an incognito/private window (no extensions)
2. Or disable all browser extensions temporarily
3. Or use a clean browser profile

### For Production
This is completely normal and does not affect your users. The warning only appears in development mode and will not show in production builds.

## Next.js Version Warning

### Issue
Console shows: "Next.js (15.1.0) is outdated"

### Solution
This is just an informational message. To update:
```bash
npm install next@latest react@latest react-dom@latest
```

However, the current version (15.1.0) is stable and works perfectly for this project.
