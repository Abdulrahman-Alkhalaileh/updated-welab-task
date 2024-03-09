type Theme = {
    id: string;
    value: string;
};

const getTheme = async () => {
    let theme: Theme = await fetch("http://localhost:5000/theme/theme")
        .then((res) => res.json())
        .then((data) => data);
    return theme.value;
};

export default getTheme;
