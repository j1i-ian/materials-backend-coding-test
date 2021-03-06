/**
 * Define Metadata.
 *
 * @param _id MongoDB id
 * @param __v version
 * @param date DateStringFormat 2020-10-20T17:34:36.000Z
 * @param description Metadata description: Project templates, IntelliSense, npm integration, debugging, & more. Turn Visual Studio into a powerful Node.js development environment. Download for free.
 * @param image image url: https://visualstudio.microsoft.com/wp-content/uploads/2018/06/vscom_vs_features_node-js_twitter.png
 * @param publisher publisher: og:site_name -> Visual Studio
 * @param title html title. Node.js Developer Tools | Visual Studio
 * @param url source url. https://visualstudio.microsoft.com/ko/vs/features/node-js/
 */
export class Metadata {
  _id: string;
  __v: number;

  date: string;
  description: string;
  image: string;
  publisher: string;
  title: string;
  url: string;
}
