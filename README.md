# Responsive Class View (clav)

This project demonstrates how to dynamically apply CSS classes based on screen sizes (mobile, tablet, desktop) using JavaScript. Each class prefix (`sm-`, `st-`, `sd-`, `std-`, `smt-`, `smd-`) determines which screen sizes the styles will apply to:

- `sm-`: Mobile only
- `st-`: Tablet only
- `sd-`: Desktop only
- `std-`: Tablet and Desktop
- `smt-`: Mobile and Tablet
- `smd-`: Mobile and Desktop

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Author](#author)

## Description

The JavaScript code dynamically adds and removes CSS classes from HTML elements based on the current viewport width. This allows for responsive styling without needing media queries in CSS files.

## Installation

To integrate this code into your project, follow these steps:

### Local
1. Clone or download this repository.
2. Include the `index.html` file and ensure the JavaScript (`script` tag) and CSS (`style` tag or separate file) are included properly.
3. Customize the CSS classes and HTML elements as needed for your project.

### CDN
Include the script in your HTML file
```html
<script src="https://cdn.jsdelivr.net/gh/marhaendev/js-clav/clav.js"></script>
```

## Usage

To use the responsive classes, apply the appropriate class prefixes (`sm-`, `st-`, `sd-`, `std-`, `smt-`, `smd-`) to your HTML elements. The JavaScript code will automatically manage these classes based on the current screen size:

- `sm-`: Mobile styles
- `st-`: Tablet styles
- `sd-`: Desktop styles
- `std-`: Styles for both tablet and desktop
- `smt-`: Styles for mobile and tablet
- `smd-`: Styles for mobile and desktop

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Classes Demo</title>
    <style>
        .bg-blue {
            background-color: blue;
            color: white;
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

<div class="sm-bg-blue">Mobile View</div>
<div class="st-bg-blue">Tablet View</div>
<div class="sd-bg-blue">Desktop View</div>
<div class="std-bg-blue">Tablet and Desktop View</div>
<div class="smt-bg-blue">Mobile and Tablet View</div>
<div class="smd-bg-blue">Mobile and Desktop View</div>

<script src="https://cdn.jsdelivr.net/gh/marhaendev/js-clav/clav.js"></script>

</body>
</html>
```

# License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/marhaendev/js-clav/tree/master?tab=MIT-1-ov-file)  file for details.

# Author
Created by [@marhaendev](https://github.com/marhaendev)
