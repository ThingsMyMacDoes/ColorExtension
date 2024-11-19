// Function to initialize the theme and text color on page load
function initializeTheme() {
  // Set default theme to dark and default text color to #6C6C6C (108, 108, 108)
  changeTheme('dark');
  document.body.style.color = '#C5C5C5';
}

// Function to change theme based on selection
function changeTheme(theme) {
  const body = document.body;
  const containers = document.querySelectorAll('.setting-container');
  const colorSquares = document.querySelectorAll('.color-square');

  if (theme === 'light') {
    // Apply light theme styles
    body.style.backgroundColor = '#E1E1E1';
    containers.forEach(container => container.style.backgroundColor = '#EEEEEE');
    body.style.color = '#3D3D3D'; // Default text color for light theme

    // Light theme color squares for high contrast options
    colorSquares.forEach(square => {
      if (square.dataset.color === 'color1') square.style.backgroundColor = '#c75300'; // Dark Orange
      if (square.dataset.color === 'color2') square.style.backgroundColor = '#000000'; // Black
      if (square.dataset.color === 'color3') square.style.backgroundColor = '#0061fd'; // Blue
      if (square.dataset.color === 'color4') square.style.backgroundColor = '#007000'; // Green
      if (square.dataset.color === 'color5') square.style.backgroundColor = '#c500db'; // Purple
      if (square.dataset.color === 'color6') square.style.backgroundColor = '#d10070'; // Pink
    });
  } else {
    // Apply dark theme styles
    body.style.backgroundColor = '#2c2c2c';
    containers.forEach(container => container.style.backgroundColor = '#1e1e1e');
    body.style.color = '#6C6C6C'; // Default text color for dark theme

    // Dark theme color squares for high contrast options
    colorSquares.forEach(square => {
      if (square.dataset.color === 'color1') square.style.backgroundColor = '#ffff00'; // Lighter Red
      if (square.dataset.color === 'color2') square.style.backgroundColor = '#00ffff'; // Lighter Orange
      if (square.dataset.color === 'color3') square.style.backgroundColor = '#d3d3d3'; // Yellow
      if (square.dataset.color === 'color4') square.style.backgroundColor = '#00ff00'; // Light Green
      if (square.dataset.color === 'color5') square.style.backgroundColor = '#ff5cb3'; // Light Blue
      if (square.dataset.color === 'color6') square.style.backgroundColor = '#ffa500'; // Light Gray
      if (square.dataset.color === 'color7') square.style.backgroundColor = '#A3B7F9'; // Light Gray
      if (square.dataset.color === 'color8') square.style.backgroundColor = '#C59434'; // Light Gray
      if (square.dataset.color === 'color9') square.style.backgroundColor = '#DECBE3'; // Light Gray
      if (square.dataset.color === 'color10') square.style.backgroundColor = '#FADFE2'; // Light Gray
      if (square.dataset.color === 'color11') square.style.backgroundColor = '#9E9CC2'; // Light Gray
      if (square.dataset.color === 'color12') square.style.backgroundColor = '#DCB69F'; // Light Gray
    });
  }

  // Store the selected theme in a variable to use in setTextColor
  body.dataset.theme = theme;
}

// Function to set text color based on high contrast selection
function setTextColor(color) {
  const body = document.body;
  const theme = body.dataset.theme; // Get the current theme

  // Set text color based on the selected color option and the current theme
  if (theme === 'light') {
    switch(color) {
      case 'color1':
        body.style.color = '#c75300'; // Dark Orange
        break;
      case 'color2':
        body.style.color = '#000000'; // Black
        break;
      case 'color3':
        body.style.color = '#0061fd'; // Blue
        break;
      case 'color4':
        body.style.color = '#007000'; // Green
        break;
      case 'color5':
        body.style.color = '#ff5cb3'; // Purple
        break;
      case 'color6':
        body.style.color = '#d10070'; // Pink
        break;
    }
  } else { // dark theme
    switch(color) {
      case 'color1':
        body.style.color = '#ffff00'; // Lighter Red
        break;
      case 'color2':
        body.style.color = '#00ffff'; // Lighter Orange
        break;
      case 'color3':
        body.style.color = '#d3d3d3'; // Yellow
        break;
      case 'color4':
        body.style.color = '#00ff00'; // Light Green
        break;
      case 'color5':
        body.style.color = '#ff5cb3'; // Light Blue
        break;
      case 'color6':
        body.style.color = '#ffa500'; // Light Gray
        break;
      case 'color7':
        body.style.color = '#A3B7F9'; // Light Gray
        break;
      case 'color8':
        body.style.color = '#C59434'; // Light Gray
        break;
      case 'color9':
        body.style.color = '#DECBE3'; // Light Gray
        break;
      case 'color10':
        body.style.color = '#FADFE2'; // Light Gray
        break;
      case 'color11':
        body.style.color = '#9E9CC2'; // Light Gray
        break;
      case 'color12':
        body.style.color = '#DCB69F'; // Light Gray
        break;
    }
  }
}

// Initialize theme on page load
window.onload = initializeTheme;
