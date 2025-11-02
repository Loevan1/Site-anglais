from PyPDF2 import PdfReader

# Ouvre le PDF
reader = PdfReader("fichier.pdf")

# Récupère le texte de chaque page
texte = ""
for page in reader.pages:
    texte += page.extract_text()

print(texte)