require 'yaml'

task :default => :server

desc "Clean up generated site"
task :clean do
  cleanup
end

desc "Build site with Jekyll"
task :build => :clean do
  compass '', false
  jekyll
end

desc 'Start server with --auto'
task :server => :clean do
  compass
  jekyll('--server --auto')
end

def cleanup
  sh 'rm -rf _site'
end

def jekyll(opts = '')
  sh 'bundle exec jekyll ' + opts
end

def compass(opts = '', watch=true)
  cmd = 'bundle exec compass compile -c config.rb --force ' + opts
  cmd += ' && bundle exec compass watch &' if watch
  sh cmd
end

