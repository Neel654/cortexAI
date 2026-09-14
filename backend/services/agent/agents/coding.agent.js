import { getModel } from "../config/llmModels.js"

export const codingAgent=async (state) => {
    const intentLlm=await getModel("intent")
    const llm=await getModel("coding")
    const intentRes=await intentLlm.invoke(`
        You are an intent classifier.

Return ONLY one of these values.

CODE_GENERATION
CODE_REVIEW
CODE_EXPLANATION
DEBUGGING
OPTIMIZATION
CONVERSATION
DOCUMENTATION

User Request:
${state.prompt}
        `)
    const intent=String(intentRes.content||"").trim()

    if(intent=="CODE_GENERATION"){
        const prompt=`
        You are CortexAI Coding Agent.

Generate the requested project.

Default Stack:
- HTML
- CSS
- JavaScript

Use React / Next.js / Vue ONLY if explicitly requested.

Rules:

- Responsive
- Modern UI
- CSS Variables
- Flexbox/Grid
- Smooth Scroll
- Hover Effects
- Beautiful spacing
- Single page unless user asks otherwise.

IMAGES
===========================================

Always use real Unsplash images.

Never use placeholders.

Return ONLY valid JSON.

Schema:

{
"files":[
{
"name":"index.html",
"content":"..."
},
{
"name":"style.css",
"content":"..."
},
{
"name":"script.js",
"content":"..."
}
]
}

Rules:

-Output must start with {
- Output must end with }
- No markdown
- No explanation
- No extra text
- No \`\`\`
- Never mention input

User Request:
${state.prompt}
        `
        let res
        try {
            res=await llm.invoke(prompt)
            const content=String(res.content||"").replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/,"").trim()
            const parsed=JSON.parse(content)
            const files=parsed.files||[]
            const aiResponse=`Generated ${files.length} files:\n\n` + files.map(f=>{
                const lang=(f.name?.split(".").pop()||"").toLowerCase()
                return `### ${f.name}\n\n\`\`\`${lang}\n${f.content}\n\`\`\``
            }).join("\n\n")
            return {
                ...state,
                aiResponse,
                artifacts:[
                    {id:Date.now(),
                    type:"Project",
                    files:files,
                    title:state.prompt}]
            }
        } catch (error) {
            return {
                ...state,
                aiResponse:"I couldn't generate a complete project — the response was cut off or invalid. Please try again with a smaller or more specific request."
            }
        }
    }

    const res=await llm.invoke(`
        The user's request is:
        
${intent}

Return Markdown only.

Never generate project files.

Use headings like:

# Overview

# Explanation

## Problem

## Improvements

## Best Practices

## Optimized Code (if needed)

User Request:

${state.prompt}

`)
const data=res.content
return {
    ...state,
    aiResponse:data,
    artifacts:[]
}

}