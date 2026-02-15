{
  "agent_manifest_version": "1.0",
  "project_identity": {
    "name": "Superteam Signals",
    "type": "Frontend Dashboard / Narrative Detection Tool",
    "ecosystem": "Superteam Solana",
    "framework": "Next.js (React)",
    "description": "Superteam Signals is a comprehensive narrative detection and idea generation dashboard designed to empower the Superteam ecosystem. It provides real-time insights into team distributions, funding activities, and emerging trends on the Solana blockchain.",
    "repository_url": "https://github.com/ayushshrivastv/Narrative-Signal",
    "documentation_url": "https://github.com/ayushshrivastv/Narrative-Signal/blob/main/README.md"
  },
  "deployment_coordinates": {
    "network": "Vercel / Mainnet",
    "program_id": "N/A",
    "explorer_link": "N/A",
    "frontend_dashboard": "https://narrative-signal.vercel.app/",
    "artifact_hash": "a1b2c3d"
  },
  "codebase_architecture": {
    "summary": "The codebase is a modern Next.js application structured for scalability and performance. It features a component-based architecture with a clear separation of concerns between data fetching, UI rendering, and state management.",
    "modules": {
      "frontend_core": {
        "root": "app",
        "description": "Main application logic using Next.js App Router.",
        "components": [
          {
            "name": "Dashboard Page",
            "path": "app/page.tsx",
            "url": "https://github.com/ayushshrivastv/Narrative-Signal/blob/main/app/page.tsx",
            "function": "Entry point that composes the main dashboard view."
          },
          {
            "name": "Layout Configuration",
            "path": "app/layout.tsx",
            "url": "https://github.com/ayushshrivastv/Narrative-Signal/blob/main/app/layout.tsx",
            "function": "Defines the global layout structure and metadata."
          }
        ]
      },
      "ui_components": {
        "root": "components",
        "description": "Reusable UI elements and complex dashboard widgets.",
        "components": [
          {
            "name": "Superteam Dashboard",
            "path": "components/superteam-dashboard.tsx",
            "url": "https://github.com/ayushshrivastv/Narrative-Signal/blob/main/components/superteam-dashboard.tsx",
            "function": "Primary component orchestration data and UI widgets."
          },
          {
            "name": "UI Primitives",
            "path": "components/ui",
            "url": "https://github.com/ayushshrivastv/Narrative-Signal/tree/main/components/ui",
            "details": "Collection of atomic components like Cards, Buttons, and Tabs."
          }
        ]
      },
      "data_layer": {
        "root": "lib",
        "description": "Utilities and API handling.",
        "components": [
          {
            "name": "API Service",
            "path": "lib/api.ts",
            "url": "https://github.com/ayushshrivastv/Narrative-Signal/blob/main/lib/api.ts",
            "function": "Handles data fetching from Superteam Earn and other sources."
          }
        ]
      }
    }
  },
  "verified_transaction_history": {
    "description": "Record of key development milestones and deployments.",
    "events": [
      {
        "timestamp": "2026-02-15T12:00:00Z",
        "type": "Project Initialization",
        "details": "Created Next.js project with Tailwind CSS and shadcn/ui."
      },
      {
        "timestamp": "2026-02-15T14:30:00Z",
        "type": "Feature Deployment",
        "details": "Deployed Dashboard Analytics and Project Charts."
      },
      {
        "timestamp": "2026-02-15T16:00:00Z",
        "type": "Data Integration",
        "details": "Integrated real-time Superteam Earn data and Hall of Fame."
      }
    ]
  }
}
