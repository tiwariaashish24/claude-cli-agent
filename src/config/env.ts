import "dotenv/config";

export function requireApiKey(): string{
    const key  = process.env.ANTHROPIC_API_KEY;
    if(!key){
        throw new Error(
            "Missing ANTHROPIC_API_KEY. Copy .env.example to .env add you key"
        );
    }
    return key;
} 