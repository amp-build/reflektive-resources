page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

activate :sprockets

configure :development do
  activate :livereload
end

configure :build do
  # activate :minify_css
  # activate :minify_javascript
end
