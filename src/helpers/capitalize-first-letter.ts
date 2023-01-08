export function capitalizeFirstLetter(string: string) {
    return string.replace(/\w\S*/g, function (txt: string) {
        return (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).replace("Iu", "IU");
    });
}
