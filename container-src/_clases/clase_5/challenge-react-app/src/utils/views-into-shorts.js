const formatViews = (views) => {
    if (isNaN(views) || views < 0) {
        return '0';
    }

    if (views >= 1000000000) {
        return (views / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }

    if (views >= 1000000) {
        return (views / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }

    if (views >= 1000) {
        return (views / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }

    return views.toString();
}

export { formatViews }