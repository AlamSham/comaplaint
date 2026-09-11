import zipfile
import xml.etree.ElementTree as ET
import sys

def analyze():
    xlsx_file = 'shikayatkaro.com-Performance-on-Search-2026-09-11.xlsx'
    try:
        z = zipfile.ZipFile(xlsx_file, 'r')
    except Exception as e:
        print(f"Error opening zip: {e}")
        return

    # Shared strings
    strings = []
    if 'xl/sharedStrings.xml' in z.namelist():
        sst_tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
        for si in sst_tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
            text = ''.join([t.text for t in si.iter('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t') if t.text])
            strings.append(text)

    # Workbook
    wb_tree = ET.fromstring(z.read('xl/workbook.xml'))
    sheets = []
    for s in wb_tree.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheet'):
        sheets.append((s.attrib.get('name'), s.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')))

    print("Sheets found:", [s[0] for s in sheets])

    def parse_sheet(idx):
        path = f'xl/worksheets/sheet{idx}.xml'
        if path not in z.namelist():
            return []
        tree = ET.fromstring(z.read(path))
        rows = []
        for row in tree.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
            row_data = []
            for c in row.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
                t = c.attrib.get('t')
                v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
                val = v.text if v is not None else ''
                if t == 's' and val != '' and val.isdigit():
                    val = strings[int(val)]
                row_data.append(val)
            if any(row_data):
                rows.append(row_data)
        return rows

    for idx, (name, _) in enumerate(sheets, start=1):
        rows = parse_sheet(idx)
        print(f"\n==================== SHEET: {name} (Total rows: {len(rows)}) ====================")
        if not rows:
            print("Empty sheet")
            continue
        headers = rows[0]
        print(f"Header: {headers}")
        # Print top 15 rows
        for r in rows[1:25]:
            print(r)

if __name__ == '__main__':
    analyze()
