import os
import re
import shutil
from pathlib import Path

ROOT = Path(r'c:\Users\mrjek\Desktop\NewSite')
DIST = ROOT / 'dist'

if DIST.exists():
    shutil.rmtree(DIST)
DIST.mkdir(parents=True, exist_ok=True)

FILES = [
    'index.html',
    'styles.css',
    'app.js',
    'config.js',
    '1.mp4',
    '404.html',
    'manifest.webmanifest',
    'service-worker.js',
    'icon.svg',
    '.nojekyll',
    'LICENSE',
    'README.md',
]

for name in FILES:
    src = ROOT / name
    if src.exists():
        dst = DIST / name
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)

if (ROOT / 'data').exists():
    shutil.copytree(ROOT / 'data', DIST / 'data', dirs_exist_ok=True)


def minify_css(text: str) -> str:
    text = re.sub(r'/\*.*?\*/', '', text, flags=re.S)
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'\s*([{}:;,])\s*', r'\1', text)
    return text.strip()


def minify_js(text: str) -> str:
    text = re.sub(r'(^|\n)\s*//.*?(\n|$)', '\\n', text)
    text = re.sub(r'\n{2,}', '\\n', text)
    return text

css_path = DIST / 'styles.css'
if css_path.exists():
    css_path.write_text(minify_css(css_path.read_text(encoding='utf-8')), encoding='utf-8')

for js_file in ['app.js', 'config.js', 'service-worker.js']:
    p = DIST / js_file
    if p.exists():
        p.write_text(minify_js(p.read_text(encoding='utf-8')), encoding='utf-8')

print('dist build complete')
