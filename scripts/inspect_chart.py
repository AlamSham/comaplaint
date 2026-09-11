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

chart_rows = parse_sheet('xl/worksheets/sheet1.xml')
print("Total chart entries:", len(chart_rows)-1)
print(chart_rows[0])
for r in chart_rows[1:]:
    # Date, Clicks, Impressions, CTR, Position
    print(f"{r[0]} | Clicks: {float(r[1] or 0):.0f} | Impr: {float(r[2] or 0):.0f} | CTR: {r[3][:5] if r[3] else '0'} | Pos: {float(r[4] or 0):.1f}")
