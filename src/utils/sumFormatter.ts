export const sumFormatter = (sum: number | string) => {
    return String(sum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
};
