# Hero Component Layout Notes

## Desktop (md+)
- Text block (`h1` + subtitle) is positioned **high up** in the cloud area of the photo using `md:mt-[-35vh]` (negative top margin).
- Buttons (Kontakta oss, Boka service, Våra tjänster) + WeatherWidget are absolutely positioned at `bottom-16` of the hero section.
- Buttons rendered via `hidden md:block absolute bottom-16` block.

## Mobile (< md)
- Text block has **no negative margin** — it stays centered naturally in the flex layout.
- Buttons + WeatherWidget render directly below the text via `md:hidden` block.
- Layout: flex column, text → buttons → weather widget, all centered.

## Image
- Source: `https://raw.githubusercontent.com/hermanhillberg-blip/djurobatvarv/main/src/img/hero_spring.jpeg`
- Full-bleed cover, `objectPosition: center`.
- Overlay gradient: `from-[#1e3a5f]/30 via-[#1e3a5f]/15 to-[#1e3a5f]/40`

## Key rule
> **Never apply negative marginTop to the text block on mobile.** Only apply it on `md+` via Tailwind responsive prefix.