# ORYN Solutions signature label refinement

This update refines only the ORYN SOLUTIONS label in the Solutions section.

## Design changes
- Uses the existing `BrandWordmark` component so the amber sunrise arc sits above the O in ORYN, not between ORYN and SOLUTIONS.
- Makes the amber gradient arc fuller and more visible while retaining the existing brand palette.
- Keeps SOLUTIONS in the existing blue-violet-cyan gradient, with stronger weight and refined spacing.
- Leaves the heading, subtitle, description, and other sections unchanged.

## Files changed
- `src/components/SolutionsSection.tsx`
- `src/components/BrandWordmark.tsx`
- `src/index.css`

Copy these files into the matching paths in the project, commit and push to `main`, then confirm the Vercel deployment.
