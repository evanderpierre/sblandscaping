# S.B. Landscaping New Client Media Inventory

Inventory created July 30, 2026. The source folder contained six photos, three videos, and one macOS `.DS_Store` file. The `.DS_Store` file was excluded because it is not media.

## Photos

| Original filename | Original details | Optimized filename | Category | What it shows | Recommended placement | Notes |
|---|---|---|---|---|---|---|
| `1BD3CB43-D578-4309-9B0F-D1804D25BF0B.jpg` | JPEG, 3072×4096, 29 MB | `photos/optimized/lawn-care-branded-yard-sign-01.webp` (1350×1800, 838 KB) | Lawn Care / Brand | Fresh residential lawn with mowing stripes and an S.B. Landscaping yard sign | Projects gallery | Strong brand proof, but the portrait crop is not stronger than the current horizontal hero image. |
| `IMG_2604.png` | PNG, 4032×3024, 17 MB | `photos/optimized/lawn-maintenance-stripes-01.webp` (1800×1350, 720 KB) | Lawn Maintenance | Wide backyard lawn with fresh mowing stripes | Weekly/Biweekly Maintenance service card and Projects gallery | Clean wide composition and an accurate maintenance match. |
| `IMG_2641.png` | PNG, 5712×4284, 38 MB | `photos/optimized/garden-bed-planting-01.webp` (1350×1800, 770 KB) | Plant Install | Newly arranged hostas and perennials in a prepared garden bed | Garden Design & Plant Install service card and Projects gallery | Phone orientation corrected during optimization. |
| `IMG_2653.png` | PNG, 5712×4284, 35 MB | `photos/optimized/lawn-maintenance-striped-yard-02.webp` (1800×1350, 653 KB) | Lawn Maintenance | Finished striped backyard lawn beside a white fence | Projects gallery | Useful secondary lawn-maintenance result. Phone orientation corrected. |
| `IMG_2697.png` | PNG, 5712×4284, 38 MB | `photos/optimized/lawn-maintenance-stone-wall-01.webp` (1350×1800, 787 KB) | Lawn & Property Care | Maintained lawn beside an existing natural stone border, with work equipment visible | Projects gallery | Labeled as property care rather than a hardscape installation because the photo does not document construction of the wall. Phone orientation corrected. |
| `IMG_7506.png` | PNG, 3952×4632, 25 MB | `photos/optimized/mulch-shrub-maintenance-01.webp` (1536×1800, 831 KB) | Mulch & Shrub Care | Fresh dark mulch beds, maintained shrubs, lawn, and an S.B. Landscaping sign | Projects gallery | Strong finished-property image and credible brand proof. |

## Videos

| Original filename | Original details | Optimized filename | Poster filename | Category | What it shows | Recommended placement | Notes |
|---|---|---|---|---|---|---|---|
| `5b110aebbb4749529f22d711426b5fc4.mov` | MOV, 1080×1920, 14.12 sec, 12 MB | `videos/optimized/plant-installation-in-progress-01.mp4` (404×720, 5.5 MB) | `videos/posters/plant-installation-in-progress-01.webp` (506×900, 136 KB) | Plant Install / Recent Work | S.B. Landscaping crew installing hostas in a long prepared planting bed | Projects gallery | Native controls, `preload="none"`, poster-first loading, and no autoplay. |
| `IMG_2274.MOV` | MOV, 1920×1080, 10.24 sec, 11 MB | `videos/optimized/shrub-trimming-finished-01.mp4` (1280×720, 9.3 MB) | `videos/posters/shrub-trimming-finished-01.webp` (900×506, 130 KB) | Shrub Trimming / Finished Work | Walkthrough of shaped shrubs, clean beds, and maintained lawn | Projects gallery | Native controls, `preload="none"`, poster-first loading, and no autoplay. |
| `video-413_singular_display.mov` | MOV, 1536×2048, 9.29 sec, 20 MB | `videos/optimized/shrub-trimming-in-progress-01.mp4` (540×720, 4.5 MB) | `videos/posters/shrub-trimming-in-progress-01.webp` (675×900, 171 KB) | Shrub Trimming / Recent Work | Close-up, first-person view of powered evergreen shrub trimming | Projects gallery | Native controls, `preload="none"`, poster-first loading, and no autoplay. |

## Placement Decisions

- **Hero:** unchanged. The existing branded white-colonial image remains the stronger horizontal hero composition.
- **Services:** the new garden-bed image now represents Garden Design & Plant Install; the new striped-lawn image now represents Weekly/Biweekly Maintenance.
- **Projects:** all six photos and all three videos are included with accurate labels and captions.
- **About:** unchanged because the media does not include a clear owner, team portrait, or equipment portrait suited to the story section.
- **Seasonal offer:** unchanged because none of the new media clearly shows fall cleanup, aeration, overseeding, or snow removal.

## Performance Notes

- Photos are WebP derivatives capped at 1800px and served through the existing responsive image component.
- Videos are 720p H.264-compatible MP4 assets with fast-start encoding.
- Videos use poster images, native controls, `playsInline`, and `preload="none"`; they do not autoplay or load above the fold.
- Original files are preserved under the requested `originals` folders and are not referenced by the page.
