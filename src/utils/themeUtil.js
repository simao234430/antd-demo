/**
 * 获取本地保存的配置
 * @param load {boolean} 是否加载配置中的主题
 * @returns {Object}
 */
function getLocalSetting() {
  let localSetting = {};
  try {
    const localSettingStr = localStorage.getItem(
      process.env.VUE_APP_SETTING_KEY
    );
    localSetting = JSON.parse(localSettingStr);
  } catch (e) {
    console.error(e);
  }
  // if (loadTheme) {
  //   loadLocalTheme(localSetting);
  // }
  return localSetting;
}

module.exports = {
  getLocalSetting,
};
