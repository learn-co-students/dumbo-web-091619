# Intro to SQL

# What is SQL?
Structured Query Language - Store information
(domain-specific language dealing primarily with databases)

CRUD rows in our database

Create

Read

Update

Delete

 - What problems does it solve?
 Persistence - Long-term storing of information

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
  SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
  SELECT * FROM artists
  WHERE name = "Black Sabbath";
  -- WHERE name LIKE "black %"
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
  CREATE TABLE fans (
    id INTEGER PRIMARY KEY,
    name TEXT
  );
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
  ALTER TABLE fans
  ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of Led Zeppelin? ArtistId **22**

```sql
  INSERT INTO fans (name, artist_id) VALUES ("Solo", 22), ("Oneil", 169);
  -- INSERT INTO fans (name, artist_id) VALUES ("Eric", (SELECT id FROM artists WHERE name = "Led Zeppelin"))
```

6. How would you update your name in the fans table to be your new name?

 ```sql
  UPDATE fans
  SET name = "Solomon"
  WHERE id = 1;
 ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
  SELECT * FROM fans
  WHERE artist_id != 169;
```

8. Write the SQL to display an artists name next to their album title

```sql
  SELECT artists.name, albums.title FROM albums
  JOIN artists
  ON albums.artist_id = artists.id;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

AGGREGATE FUNCTION

```sql
SELECT artists.name, albums.title, COUNT(tracks.id) FROM artists
JOIN albums
ON albums.artist_id = artists.id
JOIN tracks
ON tracks.album_id = albums.id
GROUP BY albums.id
ORDER BY COUNT(tracks.id) DESC
LIMIT 25;
```

9.5. Remove a fan

```sql
```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
