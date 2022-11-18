/* react-router-dom useHistory have the same functionality
 * https://v5.reactrouter.com/web/api/Hooks/usehistory
 * or useSearchParams from react-router-dom
 */

export const getQueryParams = (params: OptionalRecord<string, string>) => {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
};

/**
 * Add request parameters to URL
 * @param params
 */
export const addQueryParams = (params: OptionalRecord<string, string>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
