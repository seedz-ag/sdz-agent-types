import ConfigAuthAPI from './config.auth.api.type';
import ConfigAuthFTP from './config.auth.ftp.type';
declare type ConfigAuth = {
    api: ConfigAuthAPI;
    ftp: ConfigAuthFTP;
};
export default ConfigAuth;
