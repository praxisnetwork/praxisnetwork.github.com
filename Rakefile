#! /usr/bin/env ruby

require "rubygems"
require "dotenv"
require "google_drive"
require "date"
require "erb"

Dotenv.load

SPREADSHEET_KEY      = ENV.fetch('SPREADSHEET_KEY', '')
USER_EMAIL           = ENV.fetch('USER_EMAIL', '')
USER_PASSWORD        = ENV.fetch('USER_PASSWORD', '')

def login
  @session ||= GoogleDrive.login(ENV['GOOGLE_USER'], ENV['GOOGLE_PASSWORD'])
end

def get_worksheet(key)
  login
  @worksheet = @session.spreadsheet_by_key(ENV[key]).worksheets[0]
end

def over_rows(key)
  worksheet = get_worksheet(key)
  for row in 2..worksheet.num_rows
    yield(row)
  end
end

task :test do
  generate_institutions
end

def generate_institutions
  login
  @worksheet = @session.spreadsheet_by_key(ENV['INSTITUTIONS_KEY']).worksheets[0]

  institutions = @worksheet.rows.dup
  institutions.shift

  institutions.each do |institution|
    puts institution.inspect
  end

end

task :default => 'import:all'
namespace :import do

  desc "import all institutions."
  task :institutions do
    puts "starting import"

    over_rows('INSTITUTIONS_KEY') do |row|
      write_institutionsmarkdown row
    end
  end

  desc "import all students."
  task :students do
    puts "starting import"

    over_rows('PEOPLE_FORM_KEY') do |row|
      write_studentmarkdown row
    end
  end

  desc "Generate markup for both institutions and students"
  task :all => ['import:institutions', 'import:students']
end


def parse_date(date)
  parts = date.to_s.split(' ')
  date_components = parts[0].split('/')
  "%04d-%02d-%02d" % [date_components[2].to_i, date_components[0].to_i, date_components[1].to_i]
end

def make_name (string, date = Date.now)
  puts string
  d = parse_date(date)
  slug = string.to_s.gsub(/ /,"_").downcase
  "#{d}-#{slug}" 
end

def write_file(base_name, contents)

  puts "Writing #{base_name}..."
  #This writes a file in the subdirectory 'posts'
  begin
    file = File.open("_posts/#{base_name}.md", "w")
    file.write(contents)
  rescue IOError => e
    puts "File not writable."
  ensure
    file.close unless file == nil
  end
end

def write_fake_student(row)
  timestamp = row[0]
  student_name = row[1]
  program_name = row[2]
  year_entering_fellowship = row[3]
  personal_website = row[4]
  twitter_handle = row[5]
  research_area = row[6]
  other_research_areas = row[7]
  base_name = make_name(student_name, timestamp)

  contents = "---
layout: post
status: publish
permalink: posts/students/#{base_name}
title: #{student_name}
categories: [student, #{program_name}, #{research_area}]
other: #{other_research_areas}
website: #{personal_website}
---
  #{student_name}

Program Name: #{program_name}
Personal Website:  #{personal_website}
Twitter Handle:  #{twitter_handle}
  "

  write_file(base_name, contents)

end


#This method writes a markdown file (for students) for any row passed to it
def write_studentmarkdown (row)
  @timestamp                   = @worksheet[row, 1]
  @student_name                = @worksheet[row, 2]
  #student_email               = @worksheet[row, 3]
  @program_name                = @worksheet[row, 7]
  @year_entering_fellowship    = @worksheet[row, 4]
  @personal_website            = @worksheet[row, 5]
  @twitter_handle              = @worksheet[row, 6]
  @research_area               = @worksheet[row, 8]
  @other_research_areas        = @worksheet[row, 9]
  @base_name                    = make_name(@student_name, @timestamp)
  @image= get_image(@program_name)

  contents =render("lib/templates/student.html.erb")

  write_file(@base_name, contents)
end


# Maps program name to a program image
def get_image(program)
  images = {
    "Praxis Program (UVA)" => "uva-praxis-program.jpg",
    "Cultural Heritage Informatics (CHI) Initiative (MSU)" => "chi-initiative.jpg",
    "Mellon Scholars program (Hope College)" => "hope-mellon-scholars.jpg",
    "Digital Fellows Program (CUNY)" => "cuny-dh.jpg",
    "MA-MSc program (UCL)" => "ucldh.jpg",
    "PhD Lab in Digital Knowledge (Duke)" => "duke-phd-lab.jpg",
    "Interactive Arts and Science Program (Brock University)" => "brock-iasc.jpg",
    "Honors-level digital humanities program (University of Canterbury)" => "ucdh.jpg",
  }
  images[program]
end

module PraxisProgram
  class Page
    def slugify

    end

    def render

    end

    def save

    end

    def notice

    end

    def image

    end
  end

  class Student < Page
    def initialize

    end
  end

  class Institution < Page
    def initialize

    end
  end
end
#This method writes a markdown file (for institutions) for any row passed to it
def write_institutionsmarkdown (row)
  @timestamp                   = @worksheet[row, 1]
  #contact_name               = @worksheet[row, 2]
  #email                      = @worksheet[row, 3]
  @program_name                = @worksheet[row, 4]
  @program_url                 = @worksheet[row, 9]
  @institution_name            = @worksheet[row, 5]
  #program_address            = @worksheet[row, 6]
  @mission_statement           = @worksheet[row, 7]
  @population_supported        = @worksheet[row, 8]
  @other_population_supported  = @worksheet[row, 10]
  base_name                   = make_name(@program_name, @timestamp)

  contents =render("lib/templates/institution.html.erb")
  puts @population_supported

  write_file(base_name, contents)
end

def render(template_path)
  template = File.open(template_path, "r").read
  erb = ERB.new(template)
  erb.result(binding)
end

desc "Clean up _posts directory"
task :clean do
  `rm -f _posts/*.md`
end
