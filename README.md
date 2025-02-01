# **YouTube to MP3 Converter 🎵**

### @webdevelopermaruf fun

A simple **Node.js** application that converts YouTube videos to MP3 audio files using **Express.js, ytdl-core, and FFmpeg**.

## 🚀 **Features**
✅ Convert YouTube videos to MP3 audio files  
✅ Fast and efficient audio extraction  
✅ Auto-generated filenames based on timestamps  
✅ Easy-to-use API with a simple UI  

## 🛠️ **Tech Stack**
- **Node.js**  
- **Express.js**  
- **ytdl-core** (for fetching YouTube video data)  
- **FFmpeg** (for converting audio)  
- **fluent-ffmpeg** (FFmpeg wrapper for Node.js)  

---

## 👥 **Installation & Setup**

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/youtube-to-mp3.git
   cd youtube-to-mp3
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the application**  
   ```bash
   node index.js
   ```
   The server will start at **http://localhost:3000**.

---

## 🎯 **Usage**  

### **1️⃣ Web Interface**  
- Open `http://localhost:3000` in your browser.  
- Enter a **YouTube video URL** and click **Convert**.  
- The MP3 file will be generated and available for download.  

### **2️⃣ API Usage**  
#### **Convert a YouTube video to MP3**  
**Endpoint:**  
```
GET /convert?url=YOUTUBE_VIDEO_URL
```
**Example Request:**  
```
http://localhost:3000/convert?url=https://www.youtube.com/watch?v=YOUR_VIDEO_ID
```
**Response:**  
```json
{
  "title": "Video Title",
  "link": "/audios/1700000000.mp3"
}
```
Download the MP3 file from `http://localhost:3000/audios/1700000000.mp3`.

---
## 📌 **Requirements**  
Make sure you have the following installed on your system:  
- **Node.js** (v14 or higher)  
- **FFmpeg** (Download from [here](https://ffmpeg.org/download.html))  

If FFmpeg is not installed globally, you can install it using:  
```bash
npm install ffmpeg-static
```
---
## 🛠 **Troubleshooting**  
### **1. FFmpeg not found error**  
If you encounter an FFmpeg error, ensure it is installed and accessible in your system’s PATH.  
```bash
ffmpeg -version
```
If it’s missing, install it using:  
```bash
sudo apt install ffmpeg   # Linux
brew install ffmpeg       # macOS
choco install ffmpeg      # Windows (via Chocolatey)
```

### **2. "URL is required" Error**  
Ensure you are passing a **valid YouTube URL** as a query parameter.  
---
## 🐜 **License**  
This project is licensed under the **MIT License**.  
---
## 🤝 **Contributing**  
Contributions are welcome! Feel free to open an issue or submit a pull request.  
---
## 🌟 **Support**  
If you found this project helpful, please **star this repository ⭐** to support the development!  
