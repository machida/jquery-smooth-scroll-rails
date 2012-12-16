# -*- encoding: utf-8 -*-
require File.expand_path('../lib/powertip-rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["machida"]
  gem.email         = ["machida@fjord.jp"]
  gem.description   = %q{Powertip(A jQuery plugin that creates hover tooltips.) for rails.}
  gem.summary       = %q{Powertip for rails}
  gem.homepage      = "http://fjord.jp"

  gem.files         = Dir["{lib,vendor}/**/*"] + ["MIT-LICENSE", "README.md"]
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "powertip-rails"
  gem.require_paths = ["lib"]
  gem.version       = PowertipRails::VERSION

  gem.add_dependency "railties", "~> 3.1"
end
