import ConfigAuthFTP from "../types/config.auth.ftp.type"
import FTPFileNames from "../enums/ftp-file-names.enum";

export default interface FTP {
  connect: (config: ConfigAuthFTP) => void
  disconnect: () => void
  sendFile: (localFileName: string, remoteFileName: FTPFileNames) => Promise<boolean>
}
