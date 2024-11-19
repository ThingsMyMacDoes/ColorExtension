// Themes and Color Names
const themes = {
  light: {
    colorNames: {
      color1: 'Dark Blue',
      color2: 'Pacific Blue',
      color3: 'Dark Grey',
      color4: 'Camarone',
      color5: 'Lipstick',
      color6: 'Indochine',
      pcolor1: 'Brick Red',
      pcolor2: 'Dark Tan',
      pcolor3: 'Forest Green',
      pcolor4: 'Pine Green',
      dcolor1: 'Rust',
      dcolor2: 'Gold',
      dcolor3: 'Moss Green',
      dcolor4: 'Deep Teal',
      tcolor1: 'Plum',
      tcolor2: 'Indigo',
      tcolor3: 'Charcoal',
      tcolor4: 'Bottle Green',
    },
  },
  dark: {
    colorNames: {
      color1: 'Yellow',
      color2: 'Cyan',
      color3: 'Light Grey',
      color4: 'Green',
      color5: 'Hot Pink',
      color6: 'Orange',
      pcolor1: 'Magenta',
      pcolor2: 'Lime Green',
      pcolor3: 'Amber',
      pcolor4: 'Turquoise',
      dcolor1: 'Jordy Blue',
      dcolor2: 'Alpine',
      dcolor3: 'Light Purple',
      dcolor4: 'Cameo',
      tcolor1: 'Peach',
      tcolor2: 'Lavender',
      tcolor3: 'Plum',
      tcolor4: 'Chartreuse',
    },
  },
};

// Change Theme Function
function changeTheme(theme) {
  document.body.className = theme + '-theme'; // Apply theme-specific class to the body

  // Update all setting containers
  document.querySelectorAll('.setting-container').forEach(container => {
    container.className = `setting-container ${theme}-theme`;
  });

  // Update color names and color squares dynamically
  const colorNames = themes[theme].colorNames;
  document.querySelectorAll('.color-option').forEach(option => {
    const colorSquare = option.querySelector('.color-square');
    const colorName = option.querySelector('.color-name');
    const colorKey = colorSquare.dataset.color;

    if (colorNames[colorKey]) {
      // Update color name
      colorName.textContent = colorNames[colorKey];
      // Update the background color of the color square
      colorSquare.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(`--${colorKey}`);
    }
  });

  // Update body text color dynamically
  const bodyTextColor = getComputedStyle(document.body).getPropertyValue('--text-color');
  document.body.style.color = bodyTextColor;
}

// Set Text Color Function
function setTextColor(colorKey) {
  const colorSquare = document.querySelector(`.color-square[data-color="${colorKey}"]`);
  if (colorSquare) {
    // Apply the selected color to the body text
    document.body.style.color = getComputedStyle(colorSquare).backgroundColor;
  }
}

// Initialize Theme on Page Load
window.onload = () => {
  changeTheme('dark'); // Default theme is dark
};
