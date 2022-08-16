export default function validImageTypes(extension){
    const ValidTypes = ['.jpeg', '.jpg', '.png']
    let isValid = true
    if(ValidTypes.indexOf(extension) == -1){
        isValid = false
    }
    return isValid
}