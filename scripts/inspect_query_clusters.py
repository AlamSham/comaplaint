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

queries = parse_sheet('xl/worksheets/sheet2.xml')
pages = parse_sheet('xl/worksheets/sheet3.xml')

# Let's see what keywords correlate with our top pages
keywords_map = {
    'flipkart': [],
    'consumer': [],
    'amazon': [],
    'post': [],
    'meesho': [],
    'airline': [],
    'rbi': [],
    'irctc': [],
    'insurance': [],
    'electric': [],
    'rc': [],
    'recovery': [],
    'zomato': [],
    'medical': [],
    'cyber': [],
    'epf': [],
    'water': [],
    'upi': [],
    'rera': [],
    'passport': [],
    'home loan': [],
}

for q in queries[1:]:
    query_str = (q[0] or '').lower()
    impr = float(q[2] or 0)
    clicks = float(q[1] or 0)
    pos = float(q[4] or 0)
    for k in keywords_map:
        if k in query_str:
            keywords_map[k].append((q[0], impr, clicks, pos))

for k, v in keywords_map.items():
    if v:
        v_sorted = sorted(v, key=lambda x: x[1], reverse=True)[:5]
        print(f"\n=== KEYWORD CLUSTER: {k.upper()} ===")
        for item in v_sorted:
            print(f"  {item[0]:<50} | Impr: {item[1]:<4.0f} | Clicks: {item[2]:<2.0f} | Pos: {item[3]:.1f}")
