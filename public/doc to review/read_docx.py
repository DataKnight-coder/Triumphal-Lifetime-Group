import zipfile
import xml.etree.ElementTree as ET

def read_docx(file_path):
    try:
        with zipfile.ZipFile(file_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            
            # The namespace for Word XML
            namespace = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text = []
            for paragraph in tree.iterfind('.//w:p', namespace):
                paragraph_text = []
                for node in paragraph.iterfind('.//w:t', namespace):
                    if node.text:
                        paragraph_text.append(node.text)
                if paragraph_text:
                    text.append(''.join(paragraph_text))
            
            return '\n'.join(text)
    except Exception as e:
        return f"Error: {str(e)}"

print(read_docx('DOC INFO.docx'))
