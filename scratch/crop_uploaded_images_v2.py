import os
from PIL import Image, ImageFilter, ImageOps

def crop_and_clean_image(src_path, dest_path, box, threshold=30, blur_radius=1.2):
    """
    Crops a box, detects the white background starting from the edges,
    and applies a blurred alpha mask to feather the edges and eliminate jaggedness.
    """
    img = Image.open(src_path)
    cropped = img.crop(box).convert("RGBA")
    width, height = cropped.size
    
    # 1. Start with a binary mask of the background.
    # We will do a flood fill from the borders to identify the background.
    # 0 = foreground (opaque), 255 = background (transparent)
    mask = Image.new("L", (width, height), 0)
    mask_pixels = mask.load()
    cropped_pixels = cropped.load()
    
    # Visited grid for BFS
    visited = [[False for _ in range(height)] for _ in range(width)]
    queue = []
    
    # Add all edge pixels as starting points
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
        visited[x][0] = True
        visited[x][height - 1] = True
        
    for y in range(1, height - 1):
        queue.append((0, y))
        queue.append((width - 1, y))
        visited[0][y] = True
        visited[width - 1][y] = True
        
    while queue:
        cx, cy = queue.pop(0)
        r, g, b, a = cropped_pixels[cx, cy]
        
        # Check if pixel is close to white
        # Since it's connected to the border, it's part of the background
        if (r > 255 - threshold) and (g > 255 - threshold) and (b > 255 - threshold):
            mask_pixels[cx, cy] = 255
            
            # Add neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if not visited[nx][ny]:
                        visited[nx][ny] = True
                        queue.append((nx, ny))
                        
    # 2. Feather the mask using a Gaussian blur to remove jagged edges.
    # The blur creates smooth transitions from 0 to 255.
    blurred_mask = mask.filter(ImageFilter.GaussianBlur(blur_radius))
    
    # 3. Create the final image by setting the alpha channel.
    # Alpha = 255 - blurred_mask (so background becomes transparent)
    final_img = Image.new("RGBA", (width, height))
    final_pixels = final_img.load()
    bm_pixels = blurred_mask.load()
    
    for x in range(width):
        for y in range(height):
            r, g, b, a = cropped_pixels[x, y]
            mask_val = bm_pixels[x, y]
            
            # Interpolate alpha based on mask value
            new_a = int(a * (1.0 - (mask_val / 255.0)))
            
            # To clean up any slight white halo, if a pixel is semi-transparent,
            # we can slightly darken it towards the neighbor colors or just adjust its color.
            # But let's keep it simple: just set the new alpha.
            final_pixels[x, y] = (r, g, b, new_a)
            
    # Save the polished image
    final_img.save(dest_path, "PNG")
    print(f"Polished image saved: {dest_path}")

def main():
    src_path = "/Users/arnaldorezende/.gemini/antigravity/brain/4c154055-99d0-441d-8f12-d1c6bd8841f9/media__1779219423157.png"
    dest_dir = "/Users/arnaldorezende/Documents/pavelsite/pavel-prime/src/assets"
    
    crops = {
        "trailer-bau-transparent.png": (0, 0, 341, 150),
        "trailer-sider-transparent.png": (341, 0, 682, 150),
        "trailer-semi-bau-transparent.png": (682, 0, 1024, 150),
        "trailer-basculante-transparent.png": (0, 215, 341, 360),
        "trailer-graneleira-ls-transparent.png": (341, 215, 682, 360),
        "trailer-graneleira-transparent.png": (682, 215, 1024, 360)
    }
    
    # We use a threshold of 35 for flood fill and blur_radius of 1.0 or 1.2 to feather the edges.
    for filename, box in crops.items():
        dest_path = os.path.join(dest_dir, filename)
        crop_and_clean_image(src_path, dest_path, box, threshold=35, blur_radius=1.0)

if __name__ == "__main__":
    main()
