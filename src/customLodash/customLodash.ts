/**
 * checkAllowedFileFormat is a function that return a boolean if the filename extention is in the list of allowed extentions.
 *
 * @param text is the filename that it will going to be extract the extention and compare with each extention of the list.
*/

export const checkAllowedFileFormat = (text: string): boolean => {
  const alowedExtentions = ['jpg', 'jpeg', 'png', 'pdf', 'gif']
  const splitedTextArr = text.split('.');
  const fileExtention = splitedTextArr.slice(-1)[0];

  return (alowedExtentions.findIndex((ext) => ext === fileExtention) !== -1);
}
