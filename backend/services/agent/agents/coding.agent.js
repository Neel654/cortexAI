import { getModel } from "../config/llmModels.js"

export const codingAgent=async (state) => {
    const intentLlm=await getModel("intent")
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
    const intent=intentRes.content
    console.log(intent)
}