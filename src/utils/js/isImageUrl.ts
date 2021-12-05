import {includes} from "ramda";

export const isImageUrl = (url: string | readonly string[]) =>
    includes('png', url) || includes('jpg', url) || includes('svg', url)
