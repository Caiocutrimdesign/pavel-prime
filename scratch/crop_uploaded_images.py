import os
from PIL import Image

def flood_fill_transparent(img, threshold=40):
    """
    Converts white/near-white background to transparent using flood fill from corners.
    """
    img = img.convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # Visited grid
    visited = [[False for _ in range(height)] for _ in range(width)]
    
    # Queue for BFS (start from the 4 corners)
    queue = []
    
    # We add all boundary pixels of the crop box to start, because the background spans all edges
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
        r, g, b, a = pixels[cx, cy]
        
        # Check if the pixel is close to white (255, 255, 255)
        # We also check if it's already transparent or close to it
        if a > 0 and (r > 255 - threshold) and (g > 255 - threshold) and (b > 255 - threshold):
            # Make transparent
            pixels[cx, cy] = (r, g, b, 0)
            
            # Add neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if not visited[nx][ny]:
                        visited[nx][ny] = True
                        queue.append((nx, ny))
                        
    return img

def main():
    src_path = "/Users/arnaldorezende/.gemini/antigravity/brain/4c154055-99d0-441d-8f12-d1c6bd8841f9/media__1779219423157.png"
    dest_dir = "/Users/arnaldorezende/Documents/pavelsite/pavel-prime/src/assets"
    os.makedirs(dest_dir, exist_ok=True)
    
    if not os.path.exists(src_path):
        print(f"Source image not found: {src_path}")
        return
        
    img = Image.open(src_path)
    width, height = img.size
    print(f"Loaded image size: {width}x{height}")
    
    # Crop boxes (left, upper, right, lower)
    # Based on a 3 column x 2 row grid of 1024x441
    # Cols: 0 -> 341 -> 682 -> 1024
    # Rows: Row 1 y is roughly 0 to 220. Image of trailer is in top 150 pixels.
    #       Row 2 y is roughly 220 to 441. Image of trailer is in top 150 pixels of this row (220 to 370).
    crops = {
        "trailer-bau-transparent.png": (0, 0, 341, 150),
        "trailer-sider-transparent.png": (341, 0, 682, 150),
        "trailer-semi-bau-transparent.png": (682, 0, 1024, 150),
        "trailer-basculante-transparent.png": (0, 215, 341, 360),
        "trailer-graneleira-ls-transparent.png": (341, 215, 682, 360),
        "trailer-graneleira-transparent.png": (682, 215, 1024, 360)
    }
    
    for filename, box in crops.items():
        print(f"Cropping {filename} with box {box}...")
        cropped = img.crop(box)
        
        # Apply flood fill to remove white background
        processed = flood_fill_transparent(cropped, threshold=30)
        
        # Save to assets
        dest_path = os.path.join(dest_dir, filename)
        processed.save(dest_path, "PNG")
        print(f"Saved {dest_path}")

if __name__ == "__main__":
    main()
