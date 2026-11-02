from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools import subset

SCALE = 0.97
for weight, style in [(400, 'Regular'), (600, 'SemiBold'), (700, 'Bold')]:
    font = instantiateVariableFont(TTFont('oxanium.ttf'), {'wght': weight}, inplace=True)
    options = subset.Options()
    options.name_IDs = ['*']
    options.name_legacy = True
    options.name_languages = ['*']
    sub = subset.Subsetter(options=options)
    sub.populate(unicodes=list(range(0x20, 0x250)) + list(range(0x2000, 0x2070)) + [0x20ac, 0x2192])
    sub.subset(font)
    glyf = font['glyf']
    for name in font.getGlyphOrder():
        glyph = glyf[name]
        if glyph.isComposite():
            for component in glyph.components:
                if hasattr(component, 'x'):
                    component.x = round(component.x * SCALE)
        elif glyph.numberOfContours > 0:
            for i, (x, y) in enumerate(glyph.coordinates):
                glyph.coordinates[i] = (round(x * SCALE), y)
        if glyph.numberOfContours != 0:
            glyph.recalcBounds(glyf)
        advance, lsb = font['hmtx'][name]
        font['hmtx'][name] = (round(advance * SCALE), round(lsb * SCALE))
    for n in font['name'].names:
        vals = {1:'Skuggsja Preview', 2:style, 3:f'Skuggsja Preview {style} 1.0', 4:f'Skuggsja Preview {style}', 6:f'SkuggsjaPreview-{style}', 16:'Skuggsja Preview', 17:style}
        if n.nameID in vals:
            n.string = vals[n.nameID].encode(n.getEncoding(), errors='replace')
    font.save(f'SkuggsjaPreview-{style}.ttf')
    check = TTFont(f'SkuggsjaPreview-{style}.ttf')
    missing = ''.join(c for c in 'ÁÐÉÍÓÚÝÞÆÖáðéíóúýþæö' if ord(c) not in check.getBestCmap())
    assert not missing, missing
    print(style, len(check.getBestCmap()), 'characters; Icelandic complete')
