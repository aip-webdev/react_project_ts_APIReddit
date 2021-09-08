import {includes} from "ramda";

export const isImageUrl = (url) =>
    includes('png', url) || includes('jpg', url) || includes('svg', url)
