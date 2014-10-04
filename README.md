## Installation

Rails programmer will have [jquery-smooth-scroll plugin](https://github.com/kswedberg/jquery-smooth-scroll) in asset pipeline when using this little shiny thang. Bling you scrolling!

There is no gem of this version bumping fork yet.

### Rails 4

Add this to your project's `Gemfile`:

```ruby
group :assets do
  #gem 'jquery-smooth-scroll-rails'
  gem 'jquery-smooth-scroll-rails', :git => 'git@github.com:gretel/jquery-smooth-scroll-rails.git'
end
```

Add this to `application.js`, possibly at `app/assets/javascripts/application.js`:

    //= require jquery-smooth-scroll

For production you might need to [re-precompile](http://guides.rubyonrails.org/asset_pipeline.html#precompiling-assets) assets:

    RAILS_ENV=production bundle exec rake assets:precompile

The actual usage is [explained here](https://github.com/kswedberg/jquery-smooth-scroll/blob/master/readme.md).

### Rails 3

Dunno if it works, sorry. Please report any issues.
