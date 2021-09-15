export const formatDate = date => new Date(date).getFullYear();

export const concatGenres = genres => genres.reduce((a, b) => a + ", " + b);