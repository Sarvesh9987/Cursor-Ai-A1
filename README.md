# ElectronJS Desktop Application

A modern, feature-rich desktop application built with ElectronJS, showcasing a beautiful glassmorphism UI design with system information capabilities.

## 📋 Project Overview

This project demonstrates the creation of a desktop application using ElectronJS, featuring a modern user interface and secure inter-process communication (IPC) between the main and renderer processes. The application displays system information and serves as a foundation for building cross-platform desktop applications.

## ✨ Features

### Core Functionality
- **Main Process Management**: Handles application lifecycle and window management
- **Renderer Process**: Beautiful HTML/CSS/JavaScript-based user interface
- **System Information Display**: Real-time system information including:
  - Operating System details
  - Platform information
  - System architecture
  - Memory usage (Total & Free)
  - CPU core count

### UI/UX Features
- **Modern Glassmorphism Design**: Beautiful frosted glass effect cards with backdrop blur
- **Animated Background**: Smooth gradient animations
- **Interactive Elements**: 
  - Hover effects with parallax movement
  - Smooth transitions and animations
  - Responsive card layouts
- **Dark Theme**: Modern dark color scheme with purple/indigo accents
- **Professional Typography**: Clean, readable fonts optimized for desktop

### Security Features
- **Context Isolation**: Enabled for secure renderer process
- **Node Integration**: Disabled to prevent security vulnerabilities
- **Secure IPC Communication**: Safe inter-process communication using preload scripts
- **Content Security Policy**: Implemented for additional security layers

## 🛠️ Tech Stack

### Core Technologies
- **ElectronJS** (v39.2.7) - Desktop application framework
- **Node.js** - Runtime environment for main process
- **HTML5** - Structure and markup
- **CSS3** - Styling with modern features (backdrop-filter, animations)
- **JavaScript (ES6+)** - Application logic

### Key Libraries & APIs
- **Electron IPC** - Inter-process communication
- **Node.js OS Module** - System information retrieval
- **Context Bridge API** - Secure API exposure

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd electron-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

**Start the application:**
```bash
npm start
```

**Alternative command:**
```bash
npm run dev
```

The application window will open, displaying the main interface.

## 📁 Project Structure

```
electron-app/
│
├── main.js              # Main process - handles app lifecycle
├── preload.js           # Preload script - secure IPC bridge
├── index.html           # Renderer process HTML
├── styles.css           # Application styles
├── renderer.js          # Renderer process JavaScript
├── package.json         # Project configuration & dependencies
└── README.md           # Project documentation
```

## 📝 Key Files Explained

- **`main.js`**: Main Electron process that creates windows and handles system-level operations
- **`preload.js`**: Security bridge that safely exposes Node.js APIs to the renderer
- **`index.html`**: User interface structure
- **`styles.css`**: Complete styling with glassmorphism effects
- **`renderer.js`**: Client-side logic and interactivity

## 🎯 How It Works

### Process Architecture

1. **Main Process** (`main.js`)
   - Creates the application window
   - Handles IPC requests for system information
   - Manages application lifecycle

2. **Renderer Process** (`index.html`, `renderer.js`)
   - Displays the user interface
   - Handles user interactions
   - Makes secure API calls through preload script

3. **Preload Script** (`preload.js`)
   - Bridges main and renderer processes securely
   - Exposes safe API methods to the renderer

### System Information Flow

1. User clicks "Show System Info" button
2. Renderer calls `window.electronAPI.getSystemInfo()`
3. Preload script forwards request via IPC
4. Main process collects system data using Node.js `os` module
5. Data is returned and displayed in the UI

## 🤖 AI Tools Used

This project was developed with the assistance of AI coding tools:

- **Cursor AI** - Code generation and assistance
- **AI-powered code suggestions** - For implementing ElectronJS best practices
- **AI debugging assistance** - For troubleshooting IPC communication

*Note: While AI tools were used for development assistance, all code was reviewed and customized to meet project requirements.*

## ⏱️ Development Time

**Total Development Time: 2 days**

- Day 1: Project setup, basic Electron structure, UI design
- Day 2: System information feature, security implementation, styling refinements

## 🔒 Security Considerations

This application follows Electron security best practices:

- ✅ Context isolation enabled
- ✅ Node integration disabled
- ✅ Secure IPC communication
- ✅ Content Security Policy implemented
- ✅ No use of `remote` module
- ✅ Preload scripts for API exposure

## 📱 Screenshots

*Screenshots of the application can be added here*

## 🚧 Future Enhancements

Potential improvements for future versions:

- [ ] System resource monitoring (real-time updates)
- [ ] Additional system metrics (disk space, network info)
- [ ] Theme switcher (light/dark mode)
- [ ] Window customization options
- [ ] Export system information to file
- [ ] Multi-language support

## 📄 License

MIT License - feel free to use this project for learning and development purposes.

## 👨‍💻 Author

Developed as an ElectronJS assignment project.

## 🙏 Acknowledgments

- ElectronJS team for the excellent framework
- Modern CSS techniques and glassmorphism design inspiration

---

**Built with ❤️ using ElectronJS**


