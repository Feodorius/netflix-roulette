export const formatDate = date => new Date(date).getFullYear();

export const concatGenres = genres => genres.join(", ");

export const formatRuntime = runtime => {
    const minutes = runtime % 60;
    const hours = (runtime - minutes) / 60;
    return `${hours}h ${minutes}min`;
}