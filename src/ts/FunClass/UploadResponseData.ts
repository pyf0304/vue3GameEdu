export class UploadResponseData {
  public errId = 0; //1.目录设置失败; 2. 请选择一个文件；  3.文件上传失败
  public success = false;
  public isHasFile = false;
  public errMsg = '';
  //   //如果图片地址为空，那么是修改 则不用存放地址；
  public fileNamePic = '';
  public fileNameOne = '';
  public fileNameTwo = '';
  public fileNameThree = '';
  public imgFilePathOne = '';
  public imgFilePathTwo = '';
  public imgFilePathThree = '';
}
