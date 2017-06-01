import ngMaterial from 'angular-material';
import svgAssetsCache from 'svg-assets-cache';
import PostSettings from './settings/settings';
import EditorDirective from './editor';
import Toolbar from './toolbar';
import NewPost from './new-post';

let MODULE_NAME = "AngularizeEditor";

angular.module(MODULE_NAME, [
    ngMaterial,
    svgAssetsCache,
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
     .primaryPalette('purple')
     .accentPalette('indigo')
  })
    .directive('editable', EditorDirective)
    .component('postSettings', PostSettings)
    .component('toolbar', Toolbar)
    .component('newPost', NewPost)

export default MODULE_NAME;