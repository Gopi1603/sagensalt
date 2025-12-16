# PDF Menu Integration Guide

## Setup Instructions

### 1. Add Your Menu PDF

Place your menu PDF file in the `public` folder:
```
public/
  └── menu.pdf  ← Your menu PDF goes here
```

The PDF should be optimized for web viewing (compressed, not too large).

### 2. PDF Requirements

- **Format**: PDF
- **Recommended size**: Under 5MB for fast loading
- **Pages**: Any number of pages (the flipbook will automatically adapt)
- **Resolution**: 72-150 DPI is sufficient for screen viewing

### 3. How to Use

Users can:
- Click "View Full Menu (Flipbook)" button on the menu page
- Navigate pages using:
  - Left/Right arrow buttons
  - Clicking on page edges
  - Swiping on mobile devices
  - Keyboard arrow keys
- Zoom in/out using the zoom controls
- Close the viewer with the X button

### 4. Customization Options

Edit `components/MenuPDFViewer.tsx` to customize:

**Page Size**:
```typescript
width={Math.min(window.innerWidth * 0.4, 500) * scale}
height={Math.min(window.innerHeight * 0.7, 700) * scale}
```

**Flip Speed**:
```typescript
flippingTime={800}  // milliseconds (800 = 0.8 seconds)
```

**Initial Zoom**:
```typescript
const [scale, setScale] = useState(1.0)  // Change 1.0 to your preferred zoom
```

### 5. Features Included

✅ Realistic page-turning animation (like Kindle)
✅ Touch/swipe support for mobile
✅ Zoom in/out controls
✅ Page navigation buttons
✅ Page counter
✅ Responsive design
✅ Loading state
✅ Error handling

### 6. Troubleshooting

**PDF not loading?**
- Check that `menu.pdf` exists in the `public` folder
- Ensure the PDF file is not corrupted
- Check browser console for errors

**Slow performance?**
- Compress your PDF file (use tools like Adobe Acrobat or online PDF compressors)
- Reduce PDF resolution to 72-100 DPI
- Optimize images within the PDF

**Pages not flipping smoothly?**
- Reduce the `flippingTime` value
- Ensure your PDF has reasonable file size
- Check if the device has sufficient processing power

### 7. Alternative PDF Sources

You can also load PDFs from external URLs:
```typescript
<MenuPDFViewer
  pdfUrl="https://yourdomain.com/path/to/menu.pdf"
  onClose={() => setShowPDFViewer(false)}
/>
```

### 8. Next Steps

1. Export your current menu as PDF from your design software
2. Optimize the PDF for web (compress, reduce size)
3. Save as `menu.pdf` in the `public` folder
4. Test the flipbook on different devices
5. Adjust zoom and page size settings if needed
