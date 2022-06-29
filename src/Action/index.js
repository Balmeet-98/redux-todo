const add=(a)=>{
    return {
        type:"ADD",
        payload:a
    }
}
const remove =(b)=>{
    return {
        type:"DEL",
        payload:b
    }
}
const edit=(c)=>{
    return {
        type:"EDIT",
        payload:c
    }
}
export {add,remove,edit}