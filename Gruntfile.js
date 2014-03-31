module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      // src/jsフォルダ以下のjs拡張子ファイルを対象に監視
      files: ['src/js/*.js'],
      // 変更があったらタスクjasmineを実行
      tasks: ['jasmine']
    },
    jasmine: {
        // プロパティ名はテストケース名
        sample: {
          // このテストケースでテストするファイルの指定
          src: 'src/js/sample.js',
          options: {
            // テストケース
            specs: 'spec/*Spec.js',
            // ヘルパー
            helpers: 'spec/*Helper.js'
          }
        }
    }
  });
  // gruntでjasmineを使う
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  // 変更したファイルを監視するためのwatch
  grunt.loadNpmTasks('grunt-contrib-watch');
};
