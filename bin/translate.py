"""
translate with aws translate api
"""
import boto3
import os

region = 'us-east-1'

src = 'en'
tar = os.environ['tar']
txt = os.environ['txt']

translate = boto3.client(
  service_name='translate',
  region_name=region,
  use_ssl=True
)
result = translate.translate_text(
  Text=txt,
  SourceLanguageCode=src or 'auto',
  TargetLanguageCode=tar
)
trans = result.get('TranslatedText') or ''
transCodeSrc = result.get('SourceLanguageCode') or 'unknown'
transCodeTar = result.get('TargetLanguageCode') or 'unknown'
print(trans)
