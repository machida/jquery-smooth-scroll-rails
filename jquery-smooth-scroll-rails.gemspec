# -*- encoding: utf-8 -*-
require File.expand_path('../lib/jquery-smooth-scroll-rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["machida"]
  gem.email         = ["machida@fjord.jp"]
  gem.description   = %q{Automatically make same-page links scroll smoothly}
  gem.summary       = %q{jquery-smooth-scroll for rails}
  gem.homepage      = "https://github.com/machida/jquery-smooth-scroll-rails"

  gem.files         = Dir["{lib,app,vendor}/**/*"] + ["MIT-LICENSE", "README.md"]
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "jquery-smooth-scroll-rails"
  gem.require_paths = ["lib"]
  gem.version       = JquerySmoothScrollRails::VERSION

  gem.add_dependency "railties", ">= 4.1.0", "<= 5.1.4"
end
