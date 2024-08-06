module.exports = {
  '(app|config|lib|test)/**/*.rb': (files) =>
    `bundle exec rubocop ${files.join(' ')}`,
  '**/*.html.erb': (files) => `bundle exec erblint ${files.join(' ')}`,
  'config/locales/**/*.yml': () => 'npm i18n:fix',
  './**/*.js': ['biome --write', 'oxlint && eslint'],
  './**/*.scss': ['stylelint --fix', 'biome --write']
}
