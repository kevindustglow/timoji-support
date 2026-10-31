# Fonts

Self-hosted so the site loads no external fonts (the privacy policy says so). All three families are licensed under the SIL Open Font License 1.1 (https://openfontlicense.org), which allows bundling and redistribution.

| File | Family | Source | Notes |
|---|---|---|---|
| `inter-latin.woff2`, `inter-latin-ext.woff2` | Inter (© The Inter Project Authors) | Google Fonts | Variable, instanced to weights 400–600 |
| `nunito-600-latin.woff2`, `nunito-600-latin-ext.woff2` | Nunito (© The Nunito Project Authors) | Google Fonts | SemiBold 600 only |
| `noto-sans-tc-site-subset.woff2` | Noto Sans TC (© Google LLC) | Google Fonts | Variable 400–600, **subset to the characters the site uses** |

## Regenerating the Noto Sans TC subset

When new Chinese copy adds characters, regenerate the subset, otherwise new characters fall back to the system font.

1. Collect every character above U+2000 from all `*.html` files, plus 「選單」.
2. Request `https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600&display=swap&text=<URL-encoded characters>` with a Chrome user agent, and download the `woff2` URL it returns.
3. Instance it to weights 400–600 with fontTools (`fontTools.varLib.instancer`, `{"wght": (400, 600)}`), save as WOFF2, and replace `noto-sans-tc-site-subset.woff2`.
