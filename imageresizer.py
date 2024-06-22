from PIL import Image

def resize_image(image_path, output_path, size):
    with Image.open(image_path) as image:
        image.thumbnail(size)
        image.save(output_path)

# Example usage
# resize_image('images/bt11.png', 'images/bt11.png', (30, 30))

resize_image('public/icons/periodictable.png', 'public/icons/periodictable2.png', (256, 256))
