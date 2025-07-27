const zod = require("zod");

// // for post request
// {
//     title: string,
//     description: string
// }

// // for put route
// {
//     id: zod.string
// }

const postSchema = zod.object({
    title: zod.string(),
    description: zod.string()
})

const putSchema = zod.object({
    id: zod.string()
})

module.exports= {
    postSchema: postSchema,
    putSchema: putSchema
}