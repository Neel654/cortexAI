import { getModel } from "../config/llmModels.js"


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
    return {
        ...state,
        aiResponse:String(res.content||"").trim()
    }
}