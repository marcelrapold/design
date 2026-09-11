"""Install the shipped OFL-licensed Inter faces for reference rendering only.
Requires fonttools. Run from the repository root, then run fc-cache -f.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
root = Path.home() / '.local/share/fonts/framework'
root.mkdir(parents=True, exist_ok=True)
for weight in (300, 400, 700):
    font = TTFont(f'node_modules/@fontsource/inter/files/inter-latin-{weight}-normal.woff')
    font.flavor = None
    font.save(root / f'Inter-{weight}.ttf')
print('Inter 300, 400 and 700 installed for reference rendering.')
