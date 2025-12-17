export const LanguageToggle = () => {
    return (
        <>
            Hindi
            <input
                type="checkbox"
                className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
            />
            English
        </>
    );
};
