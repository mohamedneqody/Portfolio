import json
import re

def inject_certs():
    try:
        # Load the generated JSON
        with open('certs_output.json', 'r', encoding='utf-8') as f:
            certs_data = json.load(f)
    except Exception as e:
        print("Error loading JSON:", e)
        return

    # Read constants.ts
    constants_path = r'src\lib\constants.ts'
    with open(constants_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to replace the `export const certificates: Certificate[] = [ ... ];` block
    # Using regex to find the block
    pattern = r'export const certificates:\s*Certificate\[\]\s*=\s*\[.*?\];'
    
    # Format the new block
    # We will format it nicely
    new_block = "export const certificates: Certificate[] = [\n"
    for c in certs_data:
        # Construct the object string manually to keep it single line if possible, or nicely formatted
        c_str = f"  {{ id: {c['id']}, title: {json.dumps(c['title'], ensure_ascii=False)}, issuer: {json.dumps(c['issuer'], ensure_ascii=False)}, date: '{c['date']}', category: '{c['category']}', image: '{c['image']}', pdfUrl: '{c['pdfUrl']}' }},\n"
        new_block += c_str
    new_block += "];"
    
    # Replace
    new_content = re.sub(pattern, new_block, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(constants_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Updated constants.ts successfully.")
    else:
        print("Could not find the certificates block to replace.")

if __name__ == "__main__":
    inject_certs()
