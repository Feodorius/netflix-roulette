import { FALLBACK_IMG_SRC } from "./constants";

export const replaceImgSrcWithFallback = event => {
    event.target.src = FALLBACK_IMG_SRC;
}