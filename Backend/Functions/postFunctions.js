export function isLiked(postId, userId) {
    if (userId.equals(postId)) {
        return true;
    } else {
        return false;
    }
}