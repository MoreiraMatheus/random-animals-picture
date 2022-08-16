export default function formatValidation(filesize){
    const isValid = filesize.length <= 6 ? true : false
    return isValid
}