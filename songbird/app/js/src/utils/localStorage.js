class LocalStorage {
  static getLocale = () => {
    return localStorage.getItem('locale');
  };

  static setLocale = (locale) => {
    localStorage.setItem('locale', locale);
  };

  static getScore = () => {
    return localStorage.getItem('score');
  };

  static setScore = (score) => {
    localStorage.setItem('score', score);
  };

  static removeScore = () => {
    localStorage.removeItem('score');
  };
}

export default LocalStorage;