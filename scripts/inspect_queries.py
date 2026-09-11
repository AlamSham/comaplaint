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

queries_rows = parse_sheet('xl/worksheets/sheet2.xml')
print(f"Total queries: {len(queries_rows)-1}")
print(queries_rows[0])
# Sort by impressions descending
sorted_by_impr = sorted(queries_rows[1:], key=lambda x: float(x[2]) if x[2] else 0, reverse=True)
print("\n--- TOP 35 QUERIES BY IMPRESSIONS ---")
for r in sorted_by_impr[:35]:
    print(f"Query: {r[0]:<45} | Impr: {float(r[2] or 0):<6.0f} | Clicks: {float(r[1] or 0):<4.0f} | Pos: {float(r[4] or 0):<5.1f} | CTR: {r[3]}")

# Sort by clicks descending
sorted_by_clicks = sorted(queries_rows[1:], key=lambda x: float(x[1]) if x[1] else 0, reverse=True)
print("\n--- TOP 20 QUERIES BY CLICKS ---")
for r in sorted_by_clicks[:20]:
    print(f"Query: {r[0]:<45} | Clicks: {float(r[1] or 0):<4.0f} | Impr: {float(r[2] or 0):<6.0f} | Pos: {float(r[4] or 0):<5.1f} | CTR: {r[3]}")
