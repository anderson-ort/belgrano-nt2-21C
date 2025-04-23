# Frontend Performance Cheatsheet

## Modular Architecture with Splitting
Frontend Performance Tips

## Performance Optimization Techniques

### 1. SELECTIVE RENDERING
Display only visible elements to optimize rendering performance
- Above the fold: Show content immediately visible to users
- Below the fold: Load when needed

### 2. CODE SPLITTING
Split a bigger application bundle into multiple smaller bundles for efficient loading
- Main app bundle: app.js 5 mb
- Split into smaller modules:
  - home.js: 1.5 mb
  - products.js: 3 mb
  - about.js: 0.5 mb

### 3. COMPRESSION
Compress files before sending them over the network
- Reduce file size before transfer
- Optimize bandwidth usage

### 4. DYNAMIC IMPORTS
Load code modules dynamically based on user actions to optimize the initial loading times
```javascript
GET /bundle.js render
GET /picker.js render
```
Load module when needed

### 5. PRE-FETCHING
Proactively fetch or cache resources that are likely to be needed in the near future
- Store page in cache
- Pre-Fetch Page Sequences (Steps 1-3)
- Fetch only when needed
- Serve Page from cache
- Browser Cache implementation

### 6. TREE SHAKING
Remove code that will never be used from the final JS bundle
- Identify dead code
- Remove unused functions
- Optimize bundle size

### 7. PRIORITY-BASED LOADING
Load resources that the page will need before they are needed
Priority order:
1. HTML
2. JS
3. CSS
4. IMAGE

Timeline:
- 150 ms: Critical resources
- 300 ms: Secondary resources
- 450 ms: Non-critical resources

### 8. LOADING SEQUENCE
Load critical resources and above the fold content first to improve user experience
1. HTML (Critical structure)
2. CSS (Styling)
3. JS (Interactivity)

The key to frontend performance is implementing a modular architecture that optimizes loading sequences based on priority and user needs. This ensures the best possible user experience while maintaining efficient resource utilization.
