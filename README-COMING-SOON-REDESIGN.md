# ORYN Products — Coming Soon Preview Redesign

This update refreshes the product cards for Taxoryn, Eduoryn and Servoryn while keeping the existing ORYN website structure and Taxoryn destination.

## What's changed

- Eduoryn and Servoryn use distinct, product-specific dashboard preview artwork.
- The Coming Soon label is more prominent and paired with a subtle Product Preview label.
- Product-specific capability chips explain the intended value at a glance.
- Purple is used for Eduoryn and mint/teal for Servoryn, matching their visual identities.
- The card layout, preview region, and status footer are consistent across products.
- Copy is more compelling but does not claim that the upcoming products are already live or promise a launch date.
- Taxoryn remains the live flagship product with its current workspace preview and Explore Taxoryn link.

## Apply the update

1. Extract this ZIP.
2. Copy `src/components/ProductsSection.tsx` and `src/data/siteData.ts` into the matching locations in your existing repository.
3. Copy these files from `public/` into your existing `public/` directory:
   - `eduoryn-dashboard-preview.webp`
   - `servoryn-dashboard-preview.webp`
   - `taxoryn-workspace-preview.svg`
4. Commit and push to GitHub `main`; Vercel should then deploy the changes.

The package includes the website source for reference, but copying the four files above is sufficient for this update. This package has not been deployed to the live website.
