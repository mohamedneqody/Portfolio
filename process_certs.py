import os
from pathlib import Path
import json

def run():
    # Paths
    base_dir = Path(r"C:\شهادتي")
    pdf_dir = base_dir / "pdf"
    img_dir = base_dir / "صور"
    
    out_dir = Path(r"C:\Users\zbook\.gemini\antigravity\scratch\portfolio\public\certificates\images")
    
    # We will generate certificates JSON
    certificates = []
    cert_id = 1
    
    categories = [
        'AI_and_Data',
        'Automation',
        'Backend_and_Databases',
        'DevOps_and_Linux',
        'Web_Development',
        'LLM_and_Generative_AI'
    ]
    
    category_map = {
        'AI_and_Data': 'AI & Machine Learning',
        'Automation': 'Automation & n8n',
        'Backend_and_Databases': 'Python & Backend',
        'DevOps_and_Linux': 'Cloud & DevOps',
        'Web_Development': 'Data Science',
        'LLM_and_Generative_AI': 'LLM & Generative AI'
    }

    try:
        import fitz  # PyMuPDF
        from PIL import Image
    except ImportError:
        print("MISSING_DEPS")
        return

    # Process PDFs
    if pdf_dir.exists():
        for cat in categories:
            cat_dir = pdf_dir / cat
            if not cat_dir.exists(): continue
            
            for pdf_file in cat_dir.glob("*.pdf"):
                title = pdf_file.stem
                category = category_map.get(cat, 'الكل')
                
                # Output image path
                out_filename = f"cert_{cert_id}.webp"
                out_path = out_dir / out_filename
                out_path.parent.mkdir(parents=True, exist_ok=True)
                
                # Convert PDF to Image
                doc = fitz.open(pdf_file)
                page = doc.load_page(0)
                pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) # higher res
                img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
                img.save(out_path, "WEBP", quality=80)
                
                verify_url = f"https://ude.my/{title}" if title.startswith("UC-") else ""
                
                certificates.append({
                    "id": cert_id,
                    "title": title,
                    "issuer": "Udemy" if title.startswith("UC-") else ("Coursera" if "Coursera" in title else "Unknown"),
                    "date": "2026",
                    "category": category,
                    "image": f"/certificates/images/{out_filename}",
                    "pdfUrl": "",
                    "verifyUrl": verify_url
                })
                cert_id += 1

    # Process Images
    if img_dir.exists():
        for cat in categories:
            cat_dir = img_dir / cat
            if not cat_dir.exists(): continue
            
            for ext in ["*.jpg", "*.jpeg", "*.png", "*.webp"]:
                for img_file in cat_dir.glob(ext):
                    title = img_file.stem
                    category = category_map.get(cat, 'الكل')
                    
                    # Output image path
                    out_filename = f"cert_{cert_id}.webp"
                    out_path = out_dir / out_filename
                    out_path.parent.mkdir(parents=True, exist_ok=True)
                    
                    # Convert Image to WebP
                    img = Image.open(img_file)
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                    img.save(out_path, "WEBP", quality=80)
                    
                    verify_url = f"https://ude.my/{title}" if title.startswith("UC-") else ""
                    
                    certificates.append({
                        "id": cert_id,
                        "title": title.replace("WhatsApp Image", "Certificate").strip(),
                        "issuer": "Udemy" if title.startswith("UC-") else "Online Platform",
                        "date": "2026",
                        "category": category,
                        "image": f"/certificates/images/{out_filename}",
                        "pdfUrl": "",
                        "verifyUrl": verify_url
                    })
                    cert_id += 1
                    
    with open('certs_output.json', 'w', encoding='utf-8') as f:
        json.dump(certificates, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    run()
