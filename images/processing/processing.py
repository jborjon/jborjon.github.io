from PIL import Image
import PIL
import os
import glob

pic = Image.open('../happy-child.jpg')
width = pic.size[0]
height = pic.size[1]
print(f'Image size: {width}x{height}')
print(f'Aspect ratio: {(width / height):.4f}')
