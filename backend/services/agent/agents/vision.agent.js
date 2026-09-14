import { getModel } from "../config/llmModels.js"
import axios from "axios"
import { uploadToS3 } from "../utils/uploadToS3.js"
import { getFromS3 } from "../utils/getFromS3.js"

export const visionAgent=async (state) => {
    const llm=await getModel("image")
    const res=await llm.invoke(`
        You are an elite AI image prompt engineer.
        
Convert the user request into a highly detailed image generation prompt.

Requirements:

- Cinematic Lighting
- Professional composition
- Ultra realistic
- High detail
- Beautiful color palette
- Sharp focus
- 8k quality
- Photorealistic
- Depth of field
- Professional photography
- Stunning visuals

Return only the image prompt.

User Request:

${state.prompt}
`)
    const prompt=String(res.content||"").trim()
    const imageUrl=`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`

    const imageRes=await axios.get(imageUrl,{responseType:"arraybuffer",timeout:60000})
    const buffer=Buffer.from(imageRes.data)
    const contentType=imageRes.headers["content-type"] || "image/jpeg"
    const ext=contentType.includes("png")?"png":"jpg"

    const imageKey=`images/${Date.now()}-${state.conversationId || "gen"}.${ext}`
    await uploadToS3(imageKey,buffer,contentType)

    const signedUrl=await getFromS3(imageKey,7*24*60*60)

    return {
        ...state,
        aiResponse:"Here's your generated image:",
        images:[signedUrl]
    }
}