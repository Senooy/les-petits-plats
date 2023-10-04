class StringUtils {
    normalizeString(str) {
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    capitalizeString(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }
}