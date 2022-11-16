class LocalStorage {
  static getLocale = () => {
    return localStorage.getItem('locale');
  };

  static setLocale = (locale) => {
    localStorage.setItem('locale', locale);
  };
}

export default LocalStorage;