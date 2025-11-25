const fs = require("fs");
const path = require("path");

const structure = {
    "backend": {
        "src": {
            "config": {
                "default.js": "",
                "db.js": ""
            },
            "routes": {
                "index.js": ""
            },
            "controllers": {
                "summaryController.js": "",
                "uploadController.js": ""
            },
            "services": {
                "summaryService.js": "",
                "embeddingService.js": ""
            },
            "utils": {
                "logger.js": "",
                "response.js": ""
            },
            "db": {
                "connection.js": ""
            },
            "app.js": "",
            "server.js": ""
        },
        "package.json":
`{
  "name": "backend",
  "type": "module",
  "dependencies": {
    "express": "^4.19.2",
    "cors": "^2.8.5",
    "mongoose": "^7.0.0"
  }
}`
    },

    "ai": {
        "embeddings": {
            "embedder.py": ""
        },
        "models": {
            "summarizer": {
                "summarizer.py": ""
            },
            "topic_model": {
                "topic_model.py": ""
            },
            "reranker": {
                "rerank.py": ""
            }
        },
        "pipelines": {
            "process_pdf.py": "",
            "generate_summary.py": ""
        },
        "notebooks": {
            "eda.ipynb": ""
        },
        "requirements.txt":
`sentence-transformers
pypdf
numpy
fastapi
uvicorn
`
    },

    "frontend": {
        "src": {
            "components": {
                "Navbar.jsx": "",
                "FileUploader.jsx": "",
                "SummaryCard.jsx": ""
            },
            "pages": {
                "Home.jsx": "",
                "Dashboard.jsx": ""
            },
            "context": {
                "AppContext.jsx": ""
            },
            "styles": {
                "global.css": ""
            },
            "utils": {
                "api.js": ""
            },
            "App.jsx": "",
            "main.jsx": ""
        },
        "public": {
            "index.html": ""
        },
        "package.json":
`{
  "name": "frontend",
  "dependencies": {
    "react": "^18",
    "axios": "^1.6.5"
  }
}`
    },

    "docs": {
        "README.md": "# Project Documentation"
    }
};


function createStructure(base, obj) {
    for (let item in obj) {
        const target = path.join(base, item);

        // agar value string hai → file create karo
        if (typeof obj[item] === "string") {
            fs.writeFileSync(target, obj[item]);
        }
        // agar value object hai → folder create karo then recurse
        else {
            if (!fs.existsSync(target)) {
                fs.mkdirSync(target);
            }
            createStructure(target, obj[item]);
        }
    }
}

createStructure(process.cwd(), structure);
console.log("🔥 Project structure with files created successfully!");
