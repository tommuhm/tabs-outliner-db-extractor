# tabs-outliner-db-extractor
simple tool to extract all the urls from the db-file of the tabs outliner chrome extension

# How to

1. find the db file for the tabs outliner chrome extension
    e.g. .config/google-chrome/Default/Extensions/databases/chrome-extension_eggkanocgddhmamlbiijnphhppkpkmkl_0/

2. open the db file with some db-browser (e.g. DB Browser for SQLite)

3. find the table 'current_session_snapshot' and copy the data column from the first row to a file called 'data.json'

4. start the tool with 'npm start'

5. the file 'output.txt' now contains all the saved urls from the extension