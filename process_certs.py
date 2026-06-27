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
                
                verify_url = ""
                if title.startswith("UC-"):
                    verify_url = f"https://ude.my/{title}"
                elif "Coursera" in title:
                    # extract the code which is usually a string of uppercase letters and numbers
                    # e.g. "Coursera 605OLH14TTRC_copy" -> "605OLH14TTRC"
                    parts = title.split()
                    if len(parts) > 1:
                        code = parts[1].split('_')[0]
                        verify_url = f"https://coursera.org/verify/{code}"
                
                certificates.append({
                    "id": str(cert_id),
                    "title": title.replace("_copy", "").strip(),
                    "provider": "Udemy" if title.startswith("UC-") else ("Coursera" if "Coursera" in title else "Unknown"),
                    "category": category,
                    "image": f"/certificates/images/{out_filename}",
                    "skills": ["Python", "AI Automation", "Prompt Engineering"] if "AI" in category or "LLM" in category else ["Development", "Tools"],
                    "projects": [{"id": "telegram-ai-bot", "title": "Telegram AI Assistant", "github": "https://github.com"}],
                    "technologies": ["Docker", "FastAPI"],
                    "takeaways": ["Built production pipelines", "Implemented RAG"],
                    "duration": "18 hrs",
                    "completedAt": "2026-06-12",
                    "verifyUrl": verify_url,
                    "pdfUrl": "",
                    "featured": cert_id <= 12,
                    "level": "Professional",
                    "difficulty": 4,
                    "badge": "Top Pick" if cert_id <= 3 else ("Verified" if verify_url else None)
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
                        "id": str(cert_id),
                        "title": title.replace("WhatsApp Image", "Certificate").strip(),
                        "provider": "Udemy" if title.startswith("UC-") else "Online Platform",
                        "category": category,
                        "image": f"/certificates/images/{out_filename}",
                        "skills": ["Python", "Machine Learning"] if "AI" in category else ["Problem Solving"],
                        "projects": [{"id": "workflow-automation", "title": "n8n Workflow Automation"}],
                        "technologies": ["OpenAI", "Next.js"],
                        "takeaways": ["Advanced integrations", "API Design"],
                        "duration": "12 hrs",
                        "completedAt": "2026-04-10",
                        "verifyUrl": verify_url,
                        "pdfUrl": "",
                        "featured": cert_id <= 12,
                        "level": "Intermediate",
                        "difficulty": 3,
                        "badge": "Verified" if verify_url else None
                    })
                    cert_id += 1
                    
    with open('certs_output.json', 'w', encoding='utf-8') as f:
        json.dump(certificates, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    run()
