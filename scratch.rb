require 'rubygems'
require 'dotenv'
require 'google/api_client'
require 'google_drive'

Dotenv.load

SPREADSHEET_KEY = ENV.fetch('PEOPLE_FORM_KEY', '')
CLIENT_ID       = ENV.fetch('CLIENT_ID', '')
CLIENT_SECRET   = ENV.fetch('CLIENT_SECRET', '')

client = Google::APIClient.new(
  :application_name => "Praxis Network Generator",
  :application_version => "1.0"
)
auth = client.authorization
auth.client_id = "#{CLIENT_ID}"
auth.client_secret = CLIENT_SECRET

auth.scope =
    "https://www.googleapis.com/auth/drive " +
    "https://spreadsheets.google.com/feeds/"
auth.redirect_uri = "urn:ietf:wg:oauth:2.0:oob"
print("1. Open this page:\n%s\n\n" % auth.authorization_uri)
print("2. Enter the authorization code shown in the page: ")
auth.code = $stdin.gets.chomp
auth.fetch_access_token!
access_token = auth.access_token

session = GoogleDrive.login_with_oauth(access_token)

@worksheet = session.spreadsheet_by_key(SPREADSHEET_KEY).worksheets[0]

p @worksheet

