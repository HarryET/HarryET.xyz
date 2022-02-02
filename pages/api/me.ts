import { NextApiHandler } from "next"

const handler: NextApiHandler = (req, res) => {
    res.status(200).json({
        "name": "Harry Bairstow",
        "handle": "HarryET",
        "discord_server": "https://discord.gg/xZ8XafNXJ2",
        "socials": {
            "github": "https://github.com/HarryET",
            "twitter": "https://twitter.com/TheHarryET",
            "discord": "HarryET#2954"
        },
        "skills": {
            "languages": [
                "Python",
                "TypeScript",
                "JavaScript",
                "C#",
                "C++",
                "GoLang",
                "Rust",
                "Dart",
                "Kotlin",
                "Java"
            ],
            "databases": [
                "postgresql",
                "redis",
                "mongodb"
            ],
            "frameworks": [
                "vue.js",
                "react",
                "svelte"
            ],
            "os": [
                "Windows",
                "MacOS",
                "Debian"
            ]
        },
        "projects": [
            {
                "url": "https://github-chat.com",
                "description": "A chat room for every GitHub repository. Real-time.",
                "tags": ["hackathon"],
                "languages": ["typescript"],
                "tools": ["Next.js", "Supabase", "Vercel"]
            },
            {
                "url": "https://custodi-six.vercel.app",
                "description": "Open source Sentry alternative.",
                "tags": ["hackathon"],
                "languages": ["typescript"],
                "tools": ["Next.js", "Supabase", "Vercel"]
            }
        ],
        "open_source": [
            {
                "name": "Nyxx",
                "org": "https://github.com/nyxx-discord",
                "role": "maintainer",
                "description": "Discord API for Dart",
                "repos": ["nyxx", "nyxx_interactions", "running_on_dart", "glacier"],
                "tags": ["library", "discord-api"],
                "languages": ["dart"],
                "tools": ["GitHub Actions"]
            },
            {
                "name": "Supabase",
                "org": "https://github.com/supabase",
                "role": "contributor",
                "description": "The open source Firebase alternative.",
                "repos": ["gotrue", "gotrue-js", "supabase"],
                "tags": ["library", "auth", "discord-api"],
                "languages": ["golang", "typescript"],
                "tools": []
            }
        ]
    })
}

export default handler