Package.describe({
  name: 'aramk:file-upload',
  summary: 'Simple file uploads.',
  version: '0.4.0'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'coffeescript',
    'underscore',
    'templating',
    'less',
    'aramk:q@1.0.1_1',
    'aramk:utility@0.8.0',
    'cfs:standard-packages@0.5.7',
    'cfs:filesystem@0.1.2',
    'cfs:tempstore@0.1.5',
    'cfs:s3@0.1.3'
  ], ['client', 'server']);
  api.addFiles([
    'src/uploadField.html',
    'src/uploadField.coffee',
    'src/uploadField.less'
  ], 'client');
  api.addFiles([
    'src/common/FileUtils.coffee'
  ], ['client', 'server']);
  api.addFiles([
    'src/server/FileUtils.coffee'
  ], 'server');
  api.imply('cfs:standard-packages@0.5.7');
  api.export([
    'FileUtils'
  ], ['client', 'server']);
});
