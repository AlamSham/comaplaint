import zipfile
import xml.etree.ElementTree as ET

z = zipfile.ZipFile('shikayatkaro.com-Performance-on-Search-2026-09-11.xlsx', 'r')
strings = []
if 'xl/sharedStrings.xml' in z.namelist():
    sst_tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
    for si in sst_tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
        strings.append(''.join([t.text for t in si.iter('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t') if t.text]))

def parse_sheet(path):
    tree = ET.fromstring(z.read(path))
    rows = []
    for row in tree.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
        r_data = []
        for c in row.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            t = c.attrib.get('t')
            v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            val = v.text if v is not None else ''
            if t == 's' and val.isdigit():
                val = strings[int(val)]
            r_data.append(val)
        if any(r_data):
            rows.append(r_data)
    return rows

pages = parse_sheet('xl/worksheets/sheet3.xml')
queries = parse_sheet('xl/worksheets/sheet2.xml')

print("TOP 30 PAGES BY IMPRESSIONS:")
print(f"{'Page':<65} | {'Clicks':<6} | {'Impr':<6} | {'CTR':<6} | {'Pos':<5}")
print("-" * 95)
# Sort by impressions desc
sorted_pages = sorted(pages[1:], key=lambda x: float(x[2]) if x[2] else 0, reverse=True)
for p in sorted_pages[:30]:
    page_url = p[0].replace('https://shikayatkaro.com', '')
    clicks = float(p[1] or 0)
    impr = float(p[2] or 0)
    ctr = p[3][:5] if p[3] else '0'
    pos = float(p[4] or 0)
    print(f"{page_url:<65} | {clicks:<6.0f} | {impr:<6.0f} | {ctr:<6} | {pos:<5.1f}")
