export default function readTypeImage(url){
    const BaseUrl = 'https://random.dog/'
    const UrlSlice = url.replace(BaseUrl, '')
    const dotIndex = UrlSlice.indexOf('.')
    const linkWithoutextension = UrlSlice.slice(0, dotIndex)
    const extension = UrlSlice.replace(linkWithoutextension, '')
    return extension.toLowerCase()
}